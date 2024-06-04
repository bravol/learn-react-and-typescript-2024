import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { firebaseConfig } from "../config";

export class FirebaseApp {
  static firebaseApp = undefined;
  static auth = undefined;
  static init() {
    this.firebaseApp = initializeApp(firebaseConfig);
    this.auth = getAuth();
    signInWithEmailAndPassword(this.auth, "lumala@gmail.com", "lumala@123");
  }
}
