import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { FirebaseApp } from "../service/firebase";

export class AuthAPI {
  //signin
  static async signin(email, password) {
    const response = await signInWithEmailAndPassword(
      FirebaseApp.auth,
      email,
      password
    );
    return response.user.toJSON();
  }
  //sign up
  static async signup(email, password) {
    const response = await createUserWithEmailAndPassword(
      FirebaseApp.auth,
      email,
      password
    );
    return response.user.toJSON();
  }
  //signout
  static async signout() {
    signOut(FirebaseApp.auth);
  }
}
