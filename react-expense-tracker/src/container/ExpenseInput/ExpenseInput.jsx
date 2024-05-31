import { useState } from "react";
import { useDispatch } from "react-redux";
import { addExpenseAction } from "../../store/expense/expense_slice";
import s from "./style.module.css";

export default function ExpenseInput(props) {
  const dispatch = useDispatch(); //to call actions you have to use dispatch

  const [price, setPrice] = useState();
  const [name, setName] = useState();
  function submit(e) {
    e.preventDefault();
    const expenseData = {
      price: price,
      name: name,
    };
    dispatch(addExpenseAction(expenseData));
  }
  return (
    <form onSubmit={submit}>
      <div className="row justify-content-center">
        <div className="col-12 col-sm-5 col-md-4 col-lg-4 mb-2">
          <input
            type="text"
            className="form-control"
            placeholder='Ex : "Apple"'
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="col-12 col-sm-2 col-md-4 col-lg-4 mb-2">
          <input
            type="number"
            step="0.01"
            className="form-control"
            placeholder="Ex: 3.99"
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>

        <div className="col-12 col-sm-2 col-md-4 col-lg-4 mb-2">
          <button type="submit" className={`btn btn-primary ${s.btn}`}>
            Add
          </button>
        </div>
      </div>
    </form>
  );
}
