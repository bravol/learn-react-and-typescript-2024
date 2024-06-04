import { query } from "firebase/database";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  onSnapshot,
  orderBy,
  updateDoc,
} from "firebase/firestore";
import { FirebaseApp } from "../service/firebase";

export class NoteApi {
  static async create(note) {
    const response = await addDoc(collection(FirebaseApp.db, "notes"), note);
    return {
      id: response.id,
      ...note,
    };
  }
  static async fetachAll() {
    const q = query(
      collection(FirebaseApp.db, "notes"),
      orderBy("created_at", "asc")
    );
    const response = await getDocs(q);
    return response.docs.map((doc) => {
      return {
        id: doc.id,
        ...doc.data(),
      };
    });
  }
  static async delete(id) {
    await deleteDoc(doc(FirebaseApp.db, "notes", id));
  }
  static async update(id, note) {
    const query = doc(FirebaseApp.db, "notes", id);
    await updateDoc(query, note);
    return {
      id,
      ...note,
    };
  }
  //getting real time data
  static onShouldSyncNotes(fetchAllNotes) {
    const q = query(collection(FirebaseApp.db, "notes"));
    const unsub = onSnapshot(q, (querySnapshot) => {
      const isUserPerformingChange = querySnapshot.metadata.hasPendingWrites;
      if (!isUserPerformingChange) {
        console.log("You are not synced with the notes collection");
        fetchAllNotes();
      }
    });
    return unsub;
  }
}
