import { createListenerMiddleware } from "@reduxjs/toolkit";

export const loggerMiddelWare = createListenerMiddleware();

loggerMiddelWare.startListening({
  //   match: isAnyOf(setIncomeAction, addExpenseAction), // or predicate, work the same

  predicate: (action) => {
    //wc actions you want to listen
    // return action.type==='expenseSlice/addExpenseAction' // only this actions
    return true; // all actions
  },
  effect: async (action, listenerAPI) => {
    //what you want to do when these actions are called
    console.log("Action", action);
    console.log("NEW store Value", listenerAPI.getState());
    // listenerAPI.dispatch(incrmentActionPerformed());
  },
});
