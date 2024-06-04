import { useState } from "react";
import { Trash } from "react-bootstrap-icons";
import s from "./style.module.css";
export default function NoteCard(props) {
  const [isCardHovered, setIsCardHovered] = useState(false);
  const [isTrashHovered, setIsTrashHovered] = useState(false);

  function onClickTrash_(e) {
    props.onClickTrash();
    e.stopPropagation();
  }
  return (
    <div
      onClick={props.onClick}
      className={`card ${s.container}`}
      style={{ borderColor: isCardHovered ? "#0d6efd" : "transparent" }}
      onMouseEnter={() => setIsCardHovered(true)}
      onMouseLeave={() => setIsCardHovered(false)}
    >
      <div className="card-body">
        <div className={s.title_row}>
          <h5 className="card-title">{props.title}</h5>
          <Trash
            size={20}
            onMouseEnter={() => setIsTrashHovered(true)}
            onMouseLeave={() => setIsTrashHovered(false)}
            style={{ color: isTrashHovered ? "#FF7373" : "#b8b8b8" }}
            onClick={onClickTrash_}
          />
        </div>
        <h6 className={`card-subtitle mb-2 text-muted`}>{props.subtitle}</h6>
        <p className={`card-text ${s.text_content}`}>{props.content}</p>
      </div>
    </div>
  );
}
