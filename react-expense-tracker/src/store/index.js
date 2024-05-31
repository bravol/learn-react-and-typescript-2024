import { configureStore } from "@reduxjs/toolkit";
import { expenseSlice } from "./expense/expense_slice";

const store = configureStore({
  reducer: {
    EXPENSE: expenseSlice.reducer,
  },
});

export { store };
