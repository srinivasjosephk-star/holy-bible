import { Link } from "@tanstack/react-router";
import { BookOpen, Heart } from "lucide-react";

export function Footer() {
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined" ? window.location.hostname : "";
  const caffeineUrl = `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`;

  return (
    <footer className="bg-card border-t border-border mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-7 h-7 rounded-lg bg-primary flex items-center justify-center">
                <BookOpen className="w-3.5 h-3.5 text-primary-foreground" />
              </div>
              <span className="font-bold text-foreground text-sm">
                Holy Bible
              </span>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Read, study, and meditate on God's word. All 66 books of the Holy
              Bible in KJV.
            </p>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-foreground mb-3">
              Resources
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  search={{ tab: "OT" }}
                  className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                >
                  Old Testament
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  search={{ tab: "NT" }}
                  className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                >
                  New Testament
                </Link>
              </li>
              <li>
                <Link
                  to="/book/$bookName"
                  params={{ bookName: "Genesis" }}
                  className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                >
                  Genesis
                </Link>
              </li>
              <li>
                <Link
                  to="/book/$bookName"
                  params={{ bookName: "Psalms" }}
                  className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                >
                  Psalms
                </Link>
              </li>
              <li>
                <Link
                  to="/book/$bookName"
                  params={{ bookName: "Proverbs" }}
                  className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                >
                  Proverbs
                </Link>
              </li>
            </ul>
          </div>

          {/* Popular Books */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-foreground mb-3">
              Popular
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/book/$bookName/chapter/$chapterNum"
                  params={{ bookName: "John", chapterNum: "3" }}
                  className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                >
                  John 3
                </Link>
              </li>
              <li>
                <Link
                  to="/book/$bookName/chapter/$chapterNum"
                  params={{ bookName: "Romans", chapterNum: "8" }}
                  className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                >
                  Romans 8
                </Link>
              </li>
              <li>
                <Link
                  to="/book/$bookName/chapter/$chapterNum"
                  params={{ bookName: "Psalms", chapterNum: "23" }}
                  className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                >
                  Psalm 23
                </Link>
              </li>
              <li>
                <Link
                  to="/book/$bookName/chapter/$chapterNum"
                  params={{ bookName: "Isaiah", chapterNum: "53" }}
                  className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                >
                  Isaiah 53
                </Link>
              </li>
              <li>
                <Link
                  to="/book/$bookName/chapter/$chapterNum"
                  params={{ bookName: "Revelation", chapterNum: "1" }}
                  className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                >
                  Revelation 1
                </Link>
              </li>
            </ul>
          </div>

          {/* About */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-foreground mb-3">
              About
            </h4>
            <ul className="space-y-2">
              <li>
                <span className="text-xs text-muted-foreground">
                  KJV Translation
                </span>
              </li>
              <li>
                <span className="text-xs text-muted-foreground">
                  Public Domain
                </span>
              </li>
              <li>
                <span className="text-xs text-muted-foreground">
                  Open Source
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-muted-foreground text-center sm:text-left">
            Holy Bible KJV — Public Domain
          </p>
          <p className="text-xs text-muted-foreground flex items-center gap-1">
            &copy; {year}. Built with{" "}
            <Heart className="w-3 h-3 text-red-400 inline" /> using{" "}
            <a
              href={caffeineUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
