import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import type { Bookmark, Note, Progress } from "../backend.d";
import { useActor } from "./useActor";

export function useBookmarks() {
  const { actor, isFetching } = useActor();
  return useQuery<Bookmark[]>({
    queryKey: ["bookmarks"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getBookmarks();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useNotes() {
  const { actor, isFetching } = useActor();
  return useQuery<Note[]>({
    queryKey: ["notes"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getNotes();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useProgress() {
  const { actor, isFetching } = useActor();
  return useQuery<Progress | null>({
    queryKey: ["progress"],
    queryFn: async () => {
      if (!actor) return null;
      return actor.getProgress();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useAddBookmark() {
  const { actor } = useActor();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async ({
      book,
      chapter,
      verse,
      text,
    }: { book: string; chapter: number; verse: number; text: string }) => {
      if (!actor) throw new Error("Not connected");
      return actor.addBookmark(book, BigInt(chapter), BigInt(verse), text);
    },
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["bookmarks"] }),
  });
}

export function useRemoveBookmark() {
  const { actor } = useActor();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async ({
      book,
      chapter,
      verse,
    }: { book: string; chapter: number; verse: number }) => {
      if (!actor) throw new Error("Not connected");
      return actor.removeBookmark(book, BigInt(chapter), BigInt(verse));
    },
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["bookmarks"] }),
  });
}

export function useAddNote() {
  const { actor } = useActor();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async ({
      book,
      chapter,
      verse,
      note,
    }: { book: string; chapter: number; verse: number; note: string }) => {
      if (!actor) throw new Error("Not connected");
      return actor.addNote(book, BigInt(chapter), BigInt(verse), note);
    },
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["notes"] }),
  });
}

export function useUpdateProgress() {
  const { actor } = useActor();
  return useMutation({
    mutationFn: async ({
      book,
      chapter,
    }: { book: string; chapter: number }) => {
      if (!actor) return;
      return actor.updateProgress(book, BigInt(chapter));
    },
  });
}
