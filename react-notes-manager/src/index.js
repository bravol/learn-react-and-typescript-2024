import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import "./index.css";
import { ProtectedNote } from "./pages/Note";
import { ProtectedNoteBrowse } from "./pages/NoteBrowse";
import { ProtectedNoteCreate } from "./pages/NoteCreate";
import PageNotFound from "./pages/PageNotFound";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import { FirebaseApp } from "./service/firebase";
import { store } from "./store";

FirebaseApp.init(); // before doing anything, we first establish connection with firebase
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/" element={<App />}>
            <Route path="/" element={<ProtectedNoteBrowse />} />
            <Route path="/notes/:id" element={<ProtectedNote />} />
            <Route path="/note/new" element={<ProtectedNoteCreate />} />
            <Route path="*" element={<PageNotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
