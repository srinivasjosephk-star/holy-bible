import { Link } from "@tanstack/react-router";
import { BookOpen } from "lucide-react";
import type { BibleBook } from "../data/bibleBooks";

interface BookCardProps {
  book: BibleBook;
  index: number;
}

export function BookCard({ book, index }: BookCardProps) {
  return (
    <Link
      to="/book/$bookName"
      params={{ bookName: encodeURIComponent(book.name) }}
      className="group block bg-card border border-border rounded-lg p-4 hover:bg-accent/50 hover:border-primary/30 hover:shadow-card transition-all duration-200 animate-fade-in"
      style={{ animationDelay: `${Math.min(index * 20, 400)}ms` }}
      data-ocid={`book.item.${index + 1}`}
    >
      <div className="flex items-start justify-between gap-2 mb-2">
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold text-primary bg-primary/10 rounded px-1.5 py-0.5">
            {book.abbreviation}
          </span>
        </div>
        <BookOpen className="w-3.5 h-3.5 text-muted-foreground shrink-0 mt-0.5 group-hover:text-primary transition-colors" />
      </div>
      <h3 className="font-semibold text-foreground text-sm leading-tight mb-1 group-hover:text-primary transition-colors">
        {book.name}
      </h3>
      <p className="text-xs text-muted-foreground mb-2">
        {book.chapters} {book.chapters === 1 ? "Chapter" : "Chapters"}
      </p>
      <p className="text-xs text-muted-foreground line-clamp-2 leading-relaxed">
        {book.description}
      </p>
    </Link>
  );
}
