import s from "./style.module.css";
export function Error({ msg }) {
  return <span className={s.container}>{msg}</span>;
}
