import { Toaster } from "@/components/ui/sonner";
import {
  Outlet,
  RouterProvider,
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { BookPage } from "./pages/BookPage";
import { HomePage } from "./pages/HomePage";
import { ReadingPage } from "./pages/ReadingPage";

// ─── Root layout ─────────────────────────────────────────────────────────────
function RootLayout() {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    const stored = localStorage.getItem("bible-dark-mode");
    if (stored !== null) return stored === "true";
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("bible-dark-mode", String(darkMode));
  }, [darkMode]);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar
        darkMode={darkMode}
        onToggleDark={() => setDarkMode((prev) => !prev)}
      />
      <div className="flex-1">
        <Outlet />
      </div>
      <Footer />
      <Toaster position="bottom-right" richColors />
    </div>
  );
}

// ─── Routes ──────────────────────────────────────────────────────────────────
const rootRoute = createRootRoute({ component: RootLayout });

const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: HomePage,
});

const bookRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/book/$bookName",
  component: BookPage,
});

const readingRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/book/$bookName/chapter/$chapterNum",
  component: ReadingPage,
});

const routeTree = rootRoute.addChildren([homeRoute, bookRoute, readingRoute]);

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return <RouterProvider router={router} />;
}
