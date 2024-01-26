import { Injectable } from '@angular/core';
import {
  Firestore,
  addDoc,
  collection,
  collectionData,
  deleteDoc,
  doc,
  docData,
  updateDoc,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';

export interface Note {
  id?: string;
  field: string;
  test: string;
}
@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private firestore: Firestore) {}

  getNotes(): Observable<Note[]> {
    const notesRef = collection(this.firestore, 'notes');
    return collectionData(notesRef, { idField: 'id' }) as Observable<Note[]>;
  }
  getNoteById(id): Observable<Note> {
    const NoteDocRef = doc(this.firestore, `notes/${id}`);
    return docData(NoteDocRef, { idField: 'id' }) as Observable<Note>;
  }

  addNote(note: Note) {
    const notesRef = collection(this.firestore, 'notes');
    return addDoc(notesRef, note);
  }
  updateNote(note: Note) {
    const notesRef = doc(this.firestore, `notes/${note.id}`);
    return updateDoc(notesRef, { field: note.field, test: note.test });
  }

  deleteNote(note: Note) {
    const notesRef = doc(this.firestore, `notes/${note.id}`);
    return deleteDoc(notesRef);
  }
}
