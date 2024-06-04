import s from "./style.module.css";
export default function Button({ children, onClick, isDisabled, type }) {
  return (
    <button
      disabled={isDisabled}
      onClick={onClick}
      type={type || "button"}
      className={`btn btn-primary ${s.button}`}
    >
      {children}
    </button>
  );
}
