import { useDispatch, useSelector } from "react-redux";
import { setIncomeAction } from "../../store/expense/expense_slice";
import s from "./style.module.css";

export default function IncomeInput(props) {
  //reading from the store to get data
  const income = useSelector((store) => store.EXPENSE.income);
  //write in the store
  const dispatch = useDispatch();

  function setIncome(e) {
    dispatch(setIncomeAction(Number.parseFloat(e.target.value)));
  }
  return (
    <div className="row justify-content-center mb-2">
      <div className={`col-6 ${s.label}`}>Income</div>
      <div className="col-6">
        <input
          type="number"
          className="form-control"
          placeholder="Ex: 3000"
          defaultValue={income}
          onChange={setIncome}
        />
      </div>
    </div>
  );
}
