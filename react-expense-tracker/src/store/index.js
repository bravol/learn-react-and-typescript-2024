import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  persistReducer,
  persistStore,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { expenseSlice } from "./expense/expense_slice";

// const store = configureStore({
//   // reducer: {
//   //   EXPENSE: expenseSlice.reducer,
//   // },
// });

//[x] 1 Combine the reducers ( slices content ) into a single reducer
const rootReducer = combineReducers({
  EXPENSE: expenseSlice.reducer,
});
//[x] 2 Create a basic configuration to tell redux to use the local storage
const persistConfig = {
  key: "root",
  version: 1,
  storage: storage,
  // blacklist: ["EXPENSE"], // TELLS WHICH REDUCERS TO IGNORE, OR NOT TO BE PERSISTED
  // whitelist: ["EXPENSE"], // TELLS WHICH REDUCERS TO PERSIST . THIS ONE IS SAFER THAN BLACKLIST
};
//[x] 3 Persist the reducers
const persisitedReducers = persistReducer(persistConfig, rootReducer);
//[x] 4 Send the persisted reducers to the store
const store = configureStore({
  reducer: persisitedReducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
//[x] 5 Create a persisted version of the store
const persistor = persistStore(store);
//[x] 6 Export the persisted version of the store
export { persistor, store };

//[] 7 Use the PersistGate component to give your app access to the persisted store

//[] 8 Tell Redux to ignore all the actions sent by redux-persist
// export { store };
