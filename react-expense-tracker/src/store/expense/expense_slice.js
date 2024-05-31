import { createSlice } from "@reduxjs/toolkit";

export const expenseSlice = createSlice({
  name: "expenseSlice",
  initialState: {
    expenses: [],
    income: 1000,
    countActionPerformed: 0,
  },
  reducers: {
    addExpenseAction: (currentSlice, action) => {
      //   console.log(action);
      currentSlice.expenses.push(action.payload);
    },

    setIncomeAction: (currentSlice, action) => {
      currentSlice.income = action.payload;
    },
    incrmentActionPerformed: (currentSlice, action) => {
      currentSlice.countActionPerformed++;
    },
  },
});
export const { addExpenseAction, setIncomeAction, incrmentActionPerformed } =
  expenseSlice.actions;
