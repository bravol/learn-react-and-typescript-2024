import React from "react";
import { Provider } from "react-redux";
import { store } from "./state";
import RepositoriesList from "./components/RepositoriesList";
function App() {
  return (
    <Provider store={store}>
      <h2>Search for a page</h2>
      <RepositoriesList />
    </Provider>
  );
}

export default App;
