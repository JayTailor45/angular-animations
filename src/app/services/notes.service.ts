import { Injectable, computed, signal } from '@angular/core';
import { Note } from '../model/note.model';

@Injectable({
  providedIn: 'root',
})
export class NotesService {
  #notes = signal<Note[]>([]);
  notes = computed(this.#notes);

  constructor() {
    this.#feedData();
  }

  addNote(title: string) {
    const note: Note = {
      id: this.#getRandomId(),
      title,
    };
    this.#notes.set([...this.notes(), note]);
  }

  deleteNote(id: string) {
    this.#notes.set([...this.notes().filter((note) => note.id !== id)]);
  }

  markNoteAsComplete(id: string) {
    this.#notes.update((notes) => {
      const note = notes.find((note) => note.id === id);
      if (note) {
        note.complete = true;
      }
      return notes;
    });
  }

  #feedData() {
    this.#notes.set([
      {
        id: this.#getRandomId(),
        title: 'Write a technical blog',
      },
      {
        id: this.#getRandomId(),
        title: 'House cleaning',
      },
      {
        id: this.#getRandomId(),
        title: 'Walk a dog',
      },
    ]);
  }

  #getRandomId() {
    return Math.floor(Math.random() * 10000).toString();
  }
}
