import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import { ProtectedApp } from "./App";
import "./index.css";
import Note from "./pages/Note";
import NoteBrowse from "./pages/NoteBrowse";
import NoteCreate from "./pages/NoteCreate";
import PageNotFound from "./pages/PageNotFound";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import { FirebaseApp } from "./service/firebase";
import { persistor, store } from "./store";

FirebaseApp.init(); // before doing anything, we first establish connection with firebase
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <BrowserRouter>
        <Routes>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/" element={<ProtectedApp />}>
            <Route path="/" element={<NoteBrowse />} />
            <Route path="/notes/:id" element={<Note />} />
            <Route path="/note/new" element={<NoteCreate />} />
            <Route path="*" element={<PageNotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </PersistGate>
  </Provider>
);
//   <React.StrictMode> removed to avoid Useffect to run twice
