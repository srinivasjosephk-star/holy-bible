import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Skeleton } from "@/components/ui/skeleton";
import { Textarea } from "@/components/ui/textarea";
import { Link, useNavigate, useParams } from "@tanstack/react-router";
import {
  Bookmark,
  BookmarkCheck,
  Check,
  ChevronLeft,
  ChevronRight,
  Copy,
  Loader2,
  PenLine,
} from "lucide-react";
import { motion } from "motion/react";
import { useCallback, useEffect, useState } from "react";
import { toast } from "sonner";
import { BIBLE_BOOKS, getBook } from "../data/bibleBooks";
import { getChapter } from "../data/bibleText";
import {
  useAddBookmark,
  useAddNote,
  useBookmarks,
  useNotes,
  useRemoveBookmark,
  useUpdateProgress,
} from "../hooks/useQueries";

export function ReadingPage() {
  const { bookName, chapterNum } = useParams({
    from: "/book/$bookName/chapter/$chapterNum",
  });
  const navigate = useNavigate();

  const decodedBookName = decodeURIComponent(bookName ?? "");
  const book = getBook(decodedBookName);
  const chapter = Number.parseInt(chapterNum ?? "1", 10);

  const [noteDialogVerse, setNoteDialogVerse] = useState<number | null>(null);
  const [noteText, setNoteText] = useState("");
  const [copiedVerse, setCopiedVerse] = useState<number | null>(null);

  // Derived data
  const chapterData = book
    ? getChapter(book.name, chapter, book.verses[chapter - 1] ?? 10)
    : null;
  const bookIndex = book ? BIBLE_BOOKS.findIndex((b) => b.id === book.id) : -1;
  const prevChapter = chapter > 1 ? chapter - 1 : null;
  const nextChapter = book && chapter < book.chapters ? chapter + 1 : null;
  const prevBook =
    !prevChapter && bookIndex > 0 ? BIBLE_BOOKS[bookIndex - 1] : null;
  const nextBook =
    !nextChapter && bookIndex < BIBLE_BOOKS.length - 1
      ? BIBLE_BOOKS[bookIndex + 1]
      : null;

  // Hooks
  const { data: bookmarks = [], isLoading: bookmarksLoading } = useBookmarks();
  const { data: notes = [] } = useNotes();
  const addBookmarkMutation = useAddBookmark();
  const removeBookmarkMutation = useRemoveBookmark();
  const addNoteMutation = useAddNote();
  const updateProgressMutation = useUpdateProgress();

  // Save progress on chapter load
  const updateProgressMutate = updateProgressMutation.mutate;
  useEffect(() => {
    if (book) {
      updateProgressMutate({ book: book.name, chapter });
    }
  }, [book, chapter, updateProgressMutate]);

  const isVerseBookmarked = useCallback(
    (verse: number) =>
      bookmarks.some(
        (bm) =>
          bm.book === book?.name &&
          Number(bm.chapter) === chapter &&
          Number(bm.verse) === verse,
      ),
    [bookmarks, book, chapter],
  );

  const getVerseNote = useCallback(
    (verse: number) =>
      notes.find(
        (n) =>
          n.book === book?.name &&
          Number(n.chapter) === chapter &&
          Number(n.verse) === verse,
      ),
    [notes, book, chapter],
  );

  function toggleBookmark(verse: number, text: string) {
    if (!book) return;
    if (isVerseBookmarked(verse)) {
      removeBookmarkMutation.mutate(
        { book: book.name, chapter, verse },
        {
          onSuccess: () => toast.success("Bookmark removed"),
          onError: () => toast.error("Failed to remove bookmark"),
        },
      );
    } else {
      addBookmarkMutation.mutate(
        { book: book.name, chapter, verse, text },
        {
          onSuccess: () => toast.success("Verse bookmarked"),
          onError: () => toast.error("Failed to bookmark"),
        },
      );
    }
  }

  function copyVerse(verse: number, text: string) {
    const ref = `${book?.name} ${chapter}:${verse} (KJV)`;
    navigator.clipboard.writeText(`"${text}" \u2014 ${ref}`).then(() => {
      setCopiedVerse(verse);
      toast.success("Verse copied to clipboard");
      setTimeout(() => setCopiedVerse(null), 2000);
    });
  }

  function navigateTo(bookN: string, ch: number) {
    navigate({
      to: "/book/$bookName/chapter/$chapterNum",
      params: { bookName: encodeURIComponent(bookN), chapterNum: String(ch) },
    });
  }

  if (!book) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-xl font-semibold mb-2">Book not found</h2>
          <Button asChild>
            <Link to="/">Back to Library</Link>
          </Button>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
        {/* Breadcrumb */}
        <nav
          className="flex items-center gap-1.5 text-xs text-muted-foreground mb-6 flex-wrap"
          aria-label="Breadcrumb"
        >
          <Link to="/" className="hover:text-foreground transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3 h-3" />
          <Link
            to="/"
            search={{ tab: book.testament }}
            className="hover:text-foreground transition-colors"
          >
            {book.testament === "OT" ? "Old Testament" : "New Testament"}
          </Link>
          <ChevronRight className="w-3 h-3" />
          <Link
            to="/book/$bookName"
            params={{ bookName: encodeURIComponent(book.name) }}
            className="hover:text-foreground transition-colors"
          >
            {book.name}
          </Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-foreground font-medium">Chapter {chapter}</span>
        </nav>

        <div className="flex gap-6 items-start">
          {/* Main Reading Column */}
          <article className="flex-1 min-w-0">
            <motion.div
              key={`${book.name}-${chapter}`}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-1">
                {book.name} {chapter}
              </h1>
              <p className="text-sm text-muted-foreground mb-8">
                {book.name} {chapter}:1\u2013{book.verses[chapter - 1]} &middot;
                King James Version
              </p>

              {/* Verses */}
              {bookmarksLoading ? (
                <div className="space-y-4" data-ocid="reading.loading_state">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Skeleton key={i} className="h-6 w-full" />
                  ))}
                </div>
              ) : (
                <div className="space-y-1" data-ocid="reading.list">
                  {chapterData?.verses.map((v, idx) => {
                    const bookmarked = isVerseBookmarked(v.verse);
                    const note = getVerseNote(v.verse);
                    return (
                      <div
                        key={v.verse}
                        className="group relative py-2 px-3 -mx-3 rounded-lg hover:bg-accent/40 transition-colors"
                        data-ocid={`reading.item.${idx + 1}`}
                      >
                        <p className="font-scripture text-foreground leading-relaxed text-base sm:text-lg">
                          <span className="verse-number">{v.verse}</span>
                          {v.text}
                        </p>
                        {note && (
                          <p className="mt-1 text-xs text-primary italic border-l-2 border-primary/30 pl-2">
                            \ud83d\udcdd {note.note}
                          </p>
                        )}
                        {/* Verse actions */}
                        <div className="flex items-center gap-1 mt-1 opacity-0 group-hover:opacity-100 transition-opacity">
                          <button
                            type="button"
                            onClick={() => toggleBookmark(v.verse, v.text)}
                            className={`p-1.5 rounded text-xs flex items-center gap-1 transition-colors ${
                              bookmarked
                                ? "text-primary bg-primary/10"
                                : "text-muted-foreground hover:text-primary hover:bg-primary/10"
                            }`}
                            title={
                              bookmarked ? "Remove bookmark" : "Add bookmark"
                            }
                            data-ocid={`reading.toggle.${idx + 1}`}
                          >
                            {bookmarked ? (
                              <BookmarkCheck className="w-3.5 h-3.5" />
                            ) : (
                              <Bookmark className="w-3.5 h-3.5" />
                            )}
                          </button>
                          <button
                            type="button"
                            onClick={() => copyVerse(v.verse, v.text)}
                            className="p-1.5 rounded text-xs text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                            title="Copy verse"
                            data-ocid={`reading.secondary_button.${idx + 1}`}
                          >
                            {copiedVerse === v.verse ? (
                              <Check className="w-3.5 h-3.5" />
                            ) : (
                              <Copy className="w-3.5 h-3.5" />
                            )}
                          </button>
                          <Dialog
                            open={noteDialogVerse === v.verse}
                            onOpenChange={(open) => {
                              if (!open) {
                                setNoteDialogVerse(null);
                                setNoteText("");
                              }
                            }}
                          >
                            <DialogTrigger asChild>
                              <button
                                type="button"
                                onClick={() => {
                                  setNoteDialogVerse(v.verse);
                                  setNoteText(note?.note ?? "");
                                }}
                                className="p-1.5 rounded text-xs text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                                title="Add note"
                                data-ocid={`reading.edit_button.${idx + 1}`}
                              >
                                <PenLine className="w-3.5 h-3.5" />
                              </button>
                            </DialogTrigger>
                            <DialogContent data-ocid="reading.dialog">
                              <DialogHeader>
                                <DialogTitle>
                                  Note for {book.name} {chapter}:{v.verse}
                                </DialogTitle>
                              </DialogHeader>
                              <p className="text-sm text-muted-foreground italic font-scripture border-l-2 border-primary/30 pl-3 py-1">
                                {v.text}
                              </p>
                              <div className="space-y-2">
                                <Label htmlFor={`note-textarea-${v.verse}`}>
                                  Your note
                                </Label>
                                <Textarea
                                  id={`note-textarea-${v.verse}`}
                                  value={noteText}
                                  onChange={(e) => setNoteText(e.target.value)}
                                  placeholder="Write your note here..."
                                  rows={4}
                                  data-ocid="reading.textarea"
                                />
                              </div>
                              <div className="flex justify-end gap-2">
                                <Button
                                  type="button"
                                  variant="outline"
                                  onClick={() => {
                                    setNoteDialogVerse(null);
                                    setNoteText("");
                                  }}
                                  data-ocid="reading.cancel_button"
                                >
                                  Cancel
                                </Button>
                                <Button
                                  type="button"
                                  onClick={() =>
                                    addNoteMutation.mutate(
                                      {
                                        book: book.name,
                                        chapter,
                                        verse: v.verse,
                                        note: noteText,
                                      },
                                      {
                                        onSuccess: () => {
                                          toast.success("Note saved");
                                          setNoteDialogVerse(null);
                                          setNoteText("");
                                        },
                                        onError: () =>
                                          toast.error("Failed to save note"),
                                      },
                                    )
                                  }
                                  disabled={
                                    addNoteMutation.isPending ||
                                    !noteText.trim()
                                  }
                                  className="bg-primary text-primary-foreground"
                                  data-ocid="reading.save_button"
                                >
                                  {addNoteMutation.isPending && (
                                    <Loader2 className="w-3.5 h-3.5 mr-1.5 animate-spin" />
                                  )}
                                  Save Note
                                </Button>
                              </div>
                            </DialogContent>
                          </Dialog>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}

              {/* Chapter Navigation */}
              <div className="flex items-center justify-between mt-12 pt-6 border-t border-border">
                {prevChapter ? (
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => navigateTo(book.name, prevChapter)}
                    className="flex items-center gap-2"
                    data-ocid="reading.pagination_prev"
                  >
                    <ChevronLeft className="w-4 h-4" />
                    Chapter {prevChapter}
                  </Button>
                ) : prevBook ? (
                  <Button
                    variant="outline"
                    asChild
                    data-ocid="reading.pagination_prev"
                  >
                    <Link
                      to="/book/$bookName/chapter/$chapterNum"
                      params={{
                        bookName: encodeURIComponent(prevBook.name),
                        chapterNum: String(prevBook.chapters),
                      }}
                    >
                      <ChevronLeft className="w-4 h-4 mr-1.5" />
                      {prevBook.name}
                    </Link>
                  </Button>
                ) : (
                  <span />
                )}

                <span className="text-xs text-muted-foreground">
                  {chapter} / {book.chapters}
                </span>

                {nextChapter ? (
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => navigateTo(book.name, nextChapter)}
                    className="flex items-center gap-2"
                    data-ocid="reading.pagination_next"
                  >
                    Chapter {nextChapter}
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                ) : nextBook ? (
                  <Button
                    variant="outline"
                    asChild
                    data-ocid="reading.pagination_next"
                  >
                    <Link
                      to="/book/$bookName/chapter/$chapterNum"
                      params={{
                        bookName: encodeURIComponent(nextBook.name),
                        chapterNum: "1",
                      }}
                    >
                      {nextBook.name}
                      <ChevronRight className="w-4 h-4 ml-1.5" />
                    </Link>
                  </Button>
                ) : (
                  <span />
                )}
              </div>
            </motion.div>
          </article>

          {/* Sidebar */}
          <aside className="hidden lg:block w-64 shrink-0">
            <div className="sticky top-24 bg-card border border-border rounded-xl p-4 space-y-4">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Navigation
              </h3>

              {/* Book Select */}
              <div className="space-y-1.5">
                <Label
                  htmlFor="book-select"
                  className="text-xs text-muted-foreground"
                >
                  Book
                </Label>
                <Select
                  value={book.name}
                  onValueChange={(val) =>
                    navigate({
                      to: "/book/$bookName/chapter/$chapterNum",
                      params: {
                        bookName: encodeURIComponent(val),
                        chapterNum: "1",
                      },
                    })
                  }
                >
                  <SelectTrigger
                    id="book-select"
                    className="w-full text-sm"
                    data-ocid="reading.select"
                  >
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="max-h-64">
                    {BIBLE_BOOKS.map((b) => (
                      <SelectItem key={b.id} value={b.name}>
                        {b.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Chapter Select */}
              <div className="space-y-1.5">
                <Label
                  htmlFor="chapter-select"
                  className="text-xs text-muted-foreground"
                >
                  Chapter
                </Label>
                <Select
                  value={String(chapter)}
                  onValueChange={(val) =>
                    navigateTo(book.name, Number.parseInt(val))
                  }
                >
                  <SelectTrigger
                    id="chapter-select"
                    className="w-full text-sm"
                    data-ocid="reading.select"
                  >
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="max-h-48">
                    {Array.from({ length: book.chapters }, (_, i) => i + 1).map(
                      (ch) => (
                        <SelectItem key={ch} value={String(ch)}>
                          Chapter {ch}
                        </SelectItem>
                      ),
                    )}
                  </SelectContent>
                </Select>
              </div>

              {/* Quick stats */}
              <div className="pt-2 border-t border-border space-y-2">
                <div className="flex justify-between text-xs">
                  <span className="text-muted-foreground">Testament</span>
                  <span className="text-foreground font-medium">
                    {book.testament === "OT" ? "Old" : "New"}
                  </span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-muted-foreground">Category</span>
                  <span className="text-foreground font-medium">
                    {book.category}
                  </span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-muted-foreground">Verses</span>
                  <span className="text-foreground font-medium">
                    {book.verses[chapter - 1]}
                  </span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-muted-foreground">Total Chapters</span>
                  <span className="text-foreground font-medium">
                    {book.chapters}
                  </span>
                </div>
              </div>

              {/* Bookmarks count */}
              {!bookmarksLoading && bookmarks.length > 0 && (
                <div className="pt-2 border-t border-border">
                  <p className="text-xs text-muted-foreground">
                    <span className="font-semibold text-primary">
                      {bookmarks.length}
                    </span>{" "}
                    verse
                    {bookmarks.length !== 1 ? "s" : ""} bookmarked
                  </p>
                </div>
              )}

              <Button
                className="w-full bg-primary text-primary-foreground text-xs font-semibold"
                asChild
                data-ocid="reading.primary_button"
              >
                <Link
                  to="/book/$bookName"
                  params={{ bookName: encodeURIComponent(book.name) }}
                >
                  All Chapters
                </Link>
              </Button>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
