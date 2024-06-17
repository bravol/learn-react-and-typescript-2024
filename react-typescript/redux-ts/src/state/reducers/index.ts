import { combineReducers } from "redux";
import repositoriesReducers from "./repositories_reducers";

export const reducers = combineReducers({
  repositories: repositoriesReducers,
});
