import { useSelector } from "react-redux";
import s from "./style.module.css";

export function ExpenseTotal(props) {
  //calculating total expense

  const expenses = useSelector((store) => store.EXPENSE.expenses);
  const totalExpenses = expenses.reduce((accumulator, expense) => {
    return Number.parseFloat(accumulator) + Number.parseFloat(expense.price);
  }, 0);

  //remaing money
  const { income } = useSelector((store) => store.EXPENSE);
  const remainingMoney = income - totalExpenses;
  return (
    <div>
      <div className="row">
        <div className={`col ${s.label}`}>Total expenses</div>
        <div className={`col ${s.amount}`}> {totalExpenses} $</div>
      </div>
      <div className="row">
        <div className={`col ${s.label}`}>Remaining money</div>
        <div className={`col ${s.amount}`}>{remainingMoney} $</div>
      </div>
    </div>
  );
}
