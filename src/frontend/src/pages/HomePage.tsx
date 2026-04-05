import { Link, useNavigate, useSearch } from "@tanstack/react-router";
import { BookOpen, ChevronRight, Search } from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useMemo, useState } from "react";
import { BookCard } from "../components/BookCard";
import { BIBLE_BOOKS, NT_BOOKS, OT_BOOKS } from "../data/bibleBooks";
import type { Testament } from "../data/bibleBooks";

type Tab = Testament;

export function HomePage() {
  const search = useSearch({ from: "/" });
  const navigate = useNavigate();
  const tabParam = (search as { tab?: string }).tab as Tab | undefined;
  const [activeTab, setActiveTab] = useState<Tab>(
    tabParam === "NT" ? "NT" : "OT",
  );
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    if (tabParam === "NT" || tabParam === "OT") {
      setActiveTab(tabParam);
    }
  }, [tabParam]);

  function switchTab(tab: Tab) {
    setActiveTab(tab);
    navigate({ to: "/", search: { tab } });
  }

  const books = activeTab === "OT" ? OT_BOOKS : NT_BOOKS;

  const filteredBooks = useMemo(() => {
    if (!searchQuery.trim()) return books;
    const q = searchQuery.toLowerCase();
    const allFiltered = BIBLE_BOOKS.filter(
      (b) =>
        b.name.toLowerCase().includes(q) ||
        b.description.toLowerCase().includes(q) ||
        b.category.toLowerCase().includes(q) ||
        b.abbreviation.toLowerCase().includes(q),
    );
    if (allFiltered.length > 0) return allFiltered;
    return books;
  }, [books, searchQuery]);

  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="bg-card border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <div className="flex items-center gap-2 text-xs text-muted-foreground mb-4">
              <span>66 Books</span>
              <ChevronRight className="w-3 h-3" />
              <span>39 Old Testament</span>
              <ChevronRight className="w-3 h-3" />
              <span>27 New Testament</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-3 leading-tight">
              Explore the Scriptures
            </h1>
            <p className="text-muted-foreground text-sm sm:text-base max-w-xl mb-6">
              Read the Holy Bible in King James Version — all 66 books, every
              chapter and verse.
            </p>

            {/* Hero Search */}
            <div className="relative max-w-lg">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search books, topics, or descriptions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-3 text-sm rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50 transition-all shadow-xs"
                data-ocid="home.search_input"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
        {/* Tabs */}
        {!searchQuery && (
          <div className="flex items-center gap-0 border-b border-border mb-6">
            <button
              type="button"
              onClick={() => switchTab("OT")}
              className={`px-4 py-3 text-xs font-bold uppercase tracking-wider transition-colors relative ${
                activeTab === "OT"
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
              data-ocid="home.tab"
            >
              Old Testament
              <span className="ml-2 text-muted-foreground font-normal normal-case tracking-normal text-xs">
                (39 Books)
              </span>
              {activeTab === "OT" && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-t" />
              )}
            </button>
            <button
              type="button"
              onClick={() => switchTab("NT")}
              className={`px-4 py-3 text-xs font-bold uppercase tracking-wider transition-colors relative ${
                activeTab === "NT"
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
              data-ocid="home.tab"
            >
              New Testament
              <span className="ml-2 text-muted-foreground font-normal normal-case tracking-normal text-xs">
                (27 Books)
              </span>
              {activeTab === "NT" && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-t" />
              )}
            </button>
          </div>
        )}

        {searchQuery && (
          <div className="mb-4 text-sm text-muted-foreground">
            {filteredBooks.length} result{filteredBooks.length !== 1 ? "s" : ""}{" "}
            for &ldquo;{searchQuery}&rdquo;
          </div>
        )}

        {/* Book Grid */}
        {filteredBooks.length > 0 ? (
          <div
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3"
            data-ocid="home.list"
          >
            {filteredBooks.map((book, i) => (
              <BookCard key={book.id} book={book} index={i} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16" data-ocid="home.empty_state">
            <BookOpen className="w-12 h-12 text-muted-foreground mx-auto mb-3" />
            <p className="text-muted-foreground">
              No books found for &ldquo;{searchQuery}&rdquo;
            </p>
            <button
              type="button"
              onClick={() => setSearchQuery("")}
              className="mt-3 text-sm text-primary hover:underline"
            >
              Clear search
            </button>
          </div>
        )}

        {/* Quick Links */}
        {!searchQuery && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-10 bg-card border border-border rounded-xl p-6"
          >
            <h2 className="text-sm font-semibold text-foreground mb-4">
              Suggested Reading
            </h2>
            <div className="flex flex-wrap gap-2">
              <Link
                to="/book/$bookName/chapter/$chapterNum"
                params={{ bookName: "Genesis", chapterNum: "1" }}
                className="inline-flex items-center gap-1 text-xs font-medium bg-background border border-border rounded-full px-3 py-1.5 text-muted-foreground hover:text-primary hover:border-primary/40 hover:bg-primary/5 transition-all"
                data-ocid="home.link"
              >
                Genesis 1 — Creation
              </Link>
              <Link
                to="/book/$bookName/chapter/$chapterNum"
                params={{ bookName: "John", chapterNum: "3" }}
                className="inline-flex items-center gap-1 text-xs font-medium bg-background border border-border rounded-full px-3 py-1.5 text-muted-foreground hover:text-primary hover:border-primary/40 hover:bg-primary/5 transition-all"
                data-ocid="home.link"
              >
                John 3 — Born Again
              </Link>
              <Link
                to="/book/$bookName/chapter/$chapterNum"
                params={{ bookName: "Psalms", chapterNum: "23" }}
                className="inline-flex items-center gap-1 text-xs font-medium bg-background border border-border rounded-full px-3 py-1.5 text-muted-foreground hover:text-primary hover:border-primary/40 hover:bg-primary/5 transition-all"
                data-ocid="home.link"
              >
                Psalm 23 — The Shepherd
              </Link>
              <Link
                to="/book/$bookName/chapter/$chapterNum"
                params={{ bookName: "Romans", chapterNum: "8" }}
                className="inline-flex items-center gap-1 text-xs font-medium bg-background border border-border rounded-full px-3 py-1.5 text-muted-foreground hover:text-primary hover:border-primary/40 hover:bg-primary/5 transition-all"
                data-ocid="home.link"
              >
                Romans 8 — No Condemnation
              </Link>
              <Link
                to="/book/$bookName/chapter/$chapterNum"
                params={{ bookName: "Isaiah", chapterNum: "53" }}
                className="inline-flex items-center gap-1 text-xs font-medium bg-background border border-border rounded-full px-3 py-1.5 text-muted-foreground hover:text-primary hover:border-primary/40 hover:bg-primary/5 transition-all"
                data-ocid="home.link"
              >
                Isaiah 53 — Suffering Servant
              </Link>
              <Link
                to="/book/$bookName/chapter/$chapterNum"
                params={{ bookName: "Revelation", chapterNum: "21" }}
                className="inline-flex items-center gap-1 text-xs font-medium bg-background border border-border rounded-full px-3 py-1.5 text-muted-foreground hover:text-primary hover:border-primary/40 hover:bg-primary/5 transition-all"
                data-ocid="home.link"
              >
                Revelation 21 — New Jerusalem
              </Link>
            </div>
          </motion.div>
        )}
      </section>
    </main>
  );
}
