import React from "react";
import { useSelector } from "react-redux";
import { List } from "../../components/List/List";

const ExpenseList = () => {
  //read from store to get expenses
  const expenses = useSelector((store) => store.EXPENSE.expenses);
  return (
    <div>
      <List items={expenses} />
    </div>
  );
};

export default ExpenseList;
