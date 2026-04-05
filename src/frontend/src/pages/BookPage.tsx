import { Button } from "@/components/ui/button";
import { Link, useNavigate, useParams } from "@tanstack/react-router";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "motion/react";
import { BIBLE_BOOKS, getBook } from "../data/bibleBooks";

export function BookPage() {
  const { bookName } = useParams({ from: "/book/$bookName" });
  const navigate = useNavigate();
  const book = getBook(decodeURIComponent(bookName ?? ""));

  if (!book) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-xl font-semibold text-foreground mb-2">
            Book not found
          </h2>
          <p className="text-muted-foreground mb-4">
            We could not find the book "{bookName}".
          </p>
          <Button asChild>
            <Link to="/">Back to Library</Link>
          </Button>
        </div>
      </main>
    );
  }

  const bookIndex = BIBLE_BOOKS.findIndex((b) => b.id === book.id);
  const prevBook = bookIndex > 0 ? BIBLE_BOOKS[bookIndex - 1] : null;
  const nextBook =
    bookIndex < BIBLE_BOOKS.length - 1 ? BIBLE_BOOKS[bookIndex + 1] : null;

  return (
    <main className="min-h-screen">
      {/* Header */}
      <section className="bg-card border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
          {/* Breadcrumb */}
          <nav
            className="flex items-center gap-1.5 text-xs text-muted-foreground mb-4"
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
            <span className="text-foreground font-medium">{book.name}</span>
          </nav>

          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-bold text-primary bg-primary/10 rounded px-2 py-0.5">
                  {book.abbreviation}
                </span>
                <span className="text-xs text-muted-foreground">
                  {book.category}
                </span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
                {book.name}
              </h1>
              <p className="text-sm text-muted-foreground max-w-xl leading-relaxed">
                {book.description}
              </p>
            </div>
            <div className="text-right shrink-0 hidden sm:block">
              <div className="text-2xl font-bold text-primary">
                {book.chapters}
              </div>
              <div className="text-xs text-muted-foreground uppercase tracking-wide">
                {book.chapters === 1 ? "Chapter" : "Chapters"}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chapters Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
        <h2 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-4">
          All Chapters
        </h2>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-5 sm:grid-cols-8 md:grid-cols-10 lg:grid-cols-12 gap-2"
          data-ocid="book.list"
        >
          {Array.from({ length: book.chapters }, (_, i) => i + 1).map((ch) => (
            <Link
              key={ch}
              to="/book/$bookName/chapter/$chapterNum"
              params={{
                bookName: encodeURIComponent(book.name),
                chapterNum: String(ch),
              }}
              className="flex items-center justify-center h-12 rounded-lg border border-border bg-card text-sm font-semibold text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-150"
              data-ocid={`book.item.${ch}`}
            >
              {ch}
            </Link>
          ))}
        </motion.div>

        {/* Prev / Next Book */}
        <div className="flex items-center justify-between mt-10 pt-6 border-t border-border">
          {prevBook ? (
            <button
              type="button"
              onClick={() =>
                navigate({
                  to: "/book/$bookName",
                  params: { bookName: encodeURIComponent(prevBook.name) },
                })
              }
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group"
              data-ocid="book.secondary_button"
            >
              <ChevronLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
              <span>{prevBook.name}</span>
            </button>
          ) : (
            <span />
          )}
          {nextBook ? (
            <button
              type="button"
              onClick={() =>
                navigate({
                  to: "/book/$bookName",
                  params: { bookName: encodeURIComponent(nextBook.name) },
                })
              }
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group"
              data-ocid="book.primary_button"
            >
              <span>{nextBook.name}</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </button>
          ) : (
            <span />
          )}
        </div>
      </section>
    </main>
  );
}
