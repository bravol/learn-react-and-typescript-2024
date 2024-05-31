import { createSlice } from "@reduxjs/toolkit";

export const expenseSlice = createSlice({
  name: "expenseSlice",
  initialState: {
    expenses: [],
  },
  reducers: {
    addExpenseAction: (currentSlice, action) => {
      //   console.log(action);
      currentSlice.expenses.push(action.payload);
    },
  },
});
export const { addExpenseAction } = expenseSlice.actions;
