import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "@tanstack/react-router";
import { BookOpen, Menu, Moon, Search, Sun, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { BIBLE_BOOKS } from "../data/bibleBooks";

interface NavbarProps {
  darkMode: boolean;
  onToggleDark: () => void;
}

export function Navbar({ darkMode, onToggleDark }: NavbarProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [suggestions, setSuggestions] = useState<typeof BIBLE_BOOKS>([]);
  const navigate = useNavigate();
  const searchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (searchQuery.length < 1) {
      setSuggestions([]);
      return;
    }
    const q = searchQuery.toLowerCase();
    setSuggestions(
      BIBLE_BOOKS.filter(
        (b) =>
          b.name.toLowerCase().includes(q) ||
          b.description.toLowerCase().includes(q) ||
          b.category.toLowerCase().includes(q),
      ).slice(0, 6),
    );
  }, [searchQuery]);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
        setSearchOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  function handleSelect(bookName: string) {
    setSearchQuery("");
    setSearchOpen(false);
    navigate({
      to: "/book/$bookName",
      params: { bookName: encodeURIComponent(bookName) },
    });
  }

  function handleSearchKeyDown(e: React.KeyboardEvent) {
    if (e.key === "Enter" && suggestions.length > 0) {
      handleSelect(suggestions[0].name);
    }
  }

  return (
    <header className="sticky top-0 z-50 bg-card border-b border-border shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center h-16 gap-3">
          {/* Brand */}
          <Link
            to="/"
            className="flex items-center gap-2 shrink-0"
            data-ocid="nav.link"
          >
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <BookOpen className="w-4 h-4 text-primary-foreground" />
            </div>
            <span className="font-bold text-foreground text-base hidden sm:block tracking-tight">
              Holy Bible
            </span>
          </Link>

          {/* Search */}
          <div
            ref={searchRef}
            className="flex-1 max-w-sm relative mx-2 sm:mx-4"
          >
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Books, Chapters, Verses"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setSearchOpen(true);
                }}
                onFocus={() => setSearchOpen(true)}
                onKeyDown={handleSearchKeyDown}
                className="w-full pl-9 pr-4 py-2 text-sm rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/60 transition-all"
                data-ocid="nav.search_input"
              />
            </div>
            {searchOpen && suggestions.length > 0 && (
              <div className="absolute top-full left-0 right-0 mt-1 bg-card border border-border rounded-lg shadow-card overflow-hidden z-50 animate-fade-in">
                {suggestions.map((book) => (
                  <button
                    key={book.id}
                    type="button"
                    onClick={() => handleSelect(book.name)}
                    className="w-full flex items-start gap-3 px-4 py-2.5 hover:bg-accent text-left transition-colors"
                  >
                    <span className="text-xs font-semibold text-primary mt-0.5 w-8 shrink-0">
                      {book.abbreviation}
                    </span>
                    <div className="min-w-0">
                      <div className="text-sm font-medium text-foreground">
                        {book.name}
                      </div>
                      <div className="text-xs text-muted-foreground truncate">
                        {book.category} · {book.chapters} chapters
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1">
            <Link
              to="/"
              search={{ tab: "OT" }}
              className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-accent"
              data-ocid="nav.link"
            >
              Old Testament
            </Link>
            <Link
              to="/"
              search={{ tab: "NT" }}
              className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-accent"
              data-ocid="nav.link"
            >
              New Testament
            </Link>
          </nav>

          {/* Right Controls */}
          <div className="flex items-center gap-1 sm:gap-2 ml-auto shrink-0">
            <button
              type="button"
              onClick={onToggleDark}
              className="p-2 rounded-lg hover:bg-accent text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Toggle dark mode"
              data-ocid="nav.toggle"
            >
              {darkMode ? (
                <Sun className="w-4 h-4" />
              ) : (
                <Moon className="w-4 h-4" />
              )}
            </button>

            <Button
              size="sm"
              className="hidden sm:flex bg-primary text-primary-foreground hover:bg-primary/90 text-xs font-semibold px-4"
              asChild
              data-ocid="nav.primary_button"
            >
              <Link
                to="/book/$bookName/chapter/$chapterNum"
                params={{ bookName: "Genesis", chapterNum: "1" }}
              >
                Start Reading
              </Link>
            </Button>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-accent text-muted-foreground"
              aria-label="Toggle menu"
              data-ocid="nav.open_modal_button"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border bg-card px-4 py-3 space-y-1 animate-fade-in">
          <Link
            to="/"
            search={{ tab: "OT" }}
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent rounded-md"
            data-ocid="nav.link"
          >
            Old Testament
          </Link>
          <Link
            to="/"
            search={{ tab: "NT" }}
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent rounded-md"
            data-ocid="nav.link"
          >
            New Testament
          </Link>
          <Link
            to="/book/$bookName/chapter/$chapterNum"
            params={{ bookName: "Genesis", chapterNum: "1" }}
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-sm font-semibold text-primary hover:bg-accent rounded-md"
            data-ocid="nav.link"
          >
            Start Reading
          </Link>
        </div>
      )}
    </header>
  );
}
