import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface Progress {
    book: string;
    chapter: bigint;
}
export interface Bookmark {
    verse: bigint;
    book: string;
    text: string;
    chapter: bigint;
}
export interface Note {
    verse: bigint;
    book: string;
    note: string;
    chapter: bigint;
}
export interface backendInterface {
    addBookmark(book: string, chapter: bigint, verse: bigint, text: string): Promise<void>;
    addNote(book: string, chapter: bigint, verse: bigint, noteText: string): Promise<void>;
    getBookmarks(): Promise<Array<Bookmark>>;
    getNotes(): Promise<Array<Note>>;
    getProgress(): Promise<Progress | null>;
    removeBookmark(book: string, chapter: bigint, verse: bigint): Promise<void>;
    updateProgress(book: string, chapter: bigint): Promise<void>;
}
