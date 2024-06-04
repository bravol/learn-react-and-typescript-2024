import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { firebaseConfig } from "../config";

export class FirebaseApp {
  static firebaseApp = undefined;
  static auth = undefined;
  static db = undefined;
  static init() {
    this.firebaseApp = initializeApp(firebaseConfig);
    this.auth = getAuth();
    this.db = getFirestore(this.firebaseApp);
  }
}
