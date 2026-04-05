import Iter "mo:core/Iter";
import Order "mo:core/Order";
import Array "mo:core/Array";
import Map "mo:core/Map";
import List "mo:core/List";
import Nat "mo:core/Nat";
import Principal "mo:core/Principal";
import Runtime "mo:core/Runtime";

actor {
  type Progress = {
    book : Text;
    chapter : Nat;
  };

  type Bookmark = {
    book : Text;
    chapter : Nat;
    verse : Nat;
    text : Text;
  };

  type Note = {
    book : Text;
    chapter : Nat;
    verse : Nat;
    note : Text;
  };

  module Bookmark {
    public func compare(bookmark1 : Bookmark, bookmark2 : Bookmark) : Order.Order {
      switch (Text.compare(bookmark1.book, bookmark2.book)) {
        case (#equal) {};
        case (order) { return order };
      };
      switch (Nat.compare(bookmark1.chapter, bookmark2.chapter)) {
        case (#equal) {};
        case (order) { return order };
      };
      switch (Nat.compare(bookmark1.verse, bookmark2.verse)) {
        case (#equal) { Text.compare(bookmark1.text, bookmark2.text) };
        case (order) { order };
      };
    };
  };

  module Note {
    public func compare(note1 : Note, note2 : Note) : Order.Order {
      switch (Text.compare(note1.book, note2.book)) {
        case (#equal) {};
        case (order) { return order };
      };
      switch (Nat.compare(note1.chapter, note2.chapter)) {
        case (#equal) {};
        case (order) { return order };
      };
      switch (Nat.compare(note1.verse, note2.verse)) {
        case (#equal) {};
        case (order) { return order };
      };
      Text.compare(note1.note, note2.note);
    };
  };

  let bookmarks = Map.empty<Principal, List.List<Bookmark>>();
  let notes = Map.empty<Principal, List.List<Note>>();
  let progress = Map.empty<Principal, Progress>();

  // Bookmarks
  public shared ({ caller }) func addBookmark(book : Text, chapter : Nat, verse : Nat, text : Text) : async () {
    let bookmark : Bookmark = {
      book;
      chapter;
      verse;
      text;
    };

    let userBookmarks = switch (bookmarks.get(caller)) {
      case (null) { List.empty<Bookmark>() };
      case (?list) { list };
    };

    userBookmarks.add(bookmark);
    bookmarks.add(caller, userBookmarks);
  };

  public shared ({ caller }) func removeBookmark(book : Text, chapter : Nat, verse : Nat) : async () {
    let userBookmarks = switch (bookmarks.get(caller)) {
      case (null) { Runtime.trap("No bookmarks found for user") };
      case (?list) { list };
    };

    let filteredBookmarks = userBookmarks.filter(
      func(b) {
        not (b.book == book and b.chapter == chapter and b.verse == verse);
      }
    );

    bookmarks.add(caller, filteredBookmarks);
  };

  public query ({ caller }) func getBookmarks() : async [Bookmark] {
    switch (bookmarks.get(caller)) {
      case (null) { [] };
      case (?list) { list.toArray().sort() };
    };
  };

  // Notes
  public shared ({ caller }) func addNote(book : Text, chapter : Nat, verse : Nat, noteText : Text) : async () {
    let note : Note = {
      book;
      chapter;
      verse;
      note = noteText;
    };

    let userNotes = switch (notes.get(caller)) {
      case (null) { List.empty<Note>() };
      case (?list) { list };
    };

    userNotes.add(note);
    notes.add(caller, userNotes);
  };

  public query ({ caller }) func getNotes() : async [Note] {
    switch (notes.get(caller)) {
      case (null) { [] };
      case (?list) { list.toArray().sort() };
    };
  };

  // Reading Progress
  public shared ({ caller }) func updateProgress(book : Text, chapter : Nat) : async () {
    let userProgress : Progress = {
      book;
      chapter;
    };
    progress.add(caller, userProgress);
  };

  public query ({ caller }) func getProgress() : async ?Progress {
    progress.get(caller);
  };
};
