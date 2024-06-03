import { useState } from "react";
import { PencilFill, TrashFill } from "react-bootstrap-icons";
import ValidatorService from "../../services/validator";
import Button from "../button/Button";
import { Error } from "../error/Error";
import s from "./style.module.css";

const VALIDATOR = {
  title: (value) => {
    return ValidatorService.min(value, 3) || ValidatorService.max(value, 20);
  },
  content: (value) => {
    return ValidatorService.min(value, 5);
  },
};

export function NoteForm({
  title,
  onClickEdit,
  onClickDelete,
  onSubmit,
  isEditable = true,
  note,
}) {
  const [formErrors, setFormErrors] = useState({
    title: note?.title ? undefined : true,
    content: note?.content ? undefined : true,
  });
  const [formValues, seFormValues] = useState({
    title: note?.title || "",
    content: note?.content || "",
    created_at: new Date().toDateString(),
  });

  const validate = (name, value) => {
    setFormErrors({ ...formErrors, [name]: VALIDATOR[name](value) });
  };
  const hasError = () => {
    for (const fieldName in formErrors) {
      if (formErrors[fieldName]) {
        return true;
      }
    }
    return false;
  };

  const updateFormValues = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    seFormValues({ ...formValues, [name]: value });
    validate(name, value);
  };

  const actionIcons = (
    <>
      <div className="col-1">
        {onClickEdit && <PencilFill onClick={onClickEdit} className={s.icon} />}
      </div>
      <div className="col-1">
        {onClickEdit && (
          <TrashFill onClick={onClickDelete} className={s.icon} />
        )}
      </div>
    </>
  );
  const titleInput = (
    <div className=" mb-5">
      <label className="form-label">Title</label>
      <input
        onChange={updateFormValues}
        type="text"
        name="title"
        className="form-control"
        value={formValues?.title}
      />
      <Error msg={formErrors.title} />
    </div>
  );
  const contentInput = (
    <div className="mb-5">
      <label className="form-label">Content</label>
      <textarea
        onChange={updateFormValues}
        type="text"
        name="content"
        className="form-control"
        row="5"
        value={formValues?.content}
      />
      <Error msg={formErrors.content} />
    </div>
  );

  const submitBtn = (
    <div className={s.submit_btn}>
      {onSubmit && (
        <Button onClick={() => onSubmit(formValues)} isDisabled={hasError()}>
          Submit
        </Button>
      )}
    </div>
  );

  return (
    <div className={s.container}>
      <div className="row justify-content-space-between">
        <div className="col-10">
          <h2 className="mb-3">{title}</h2>
        </div>
        {actionIcons}
      </div>
      <div className={`mb-3 ${s.title_input_container}`}>
        {isEditable && titleInput}
      </div>
      <div className="mb-3">
        {isEditable ? contentInput : <pre> {note.content}</pre>}
      </div>
      {submitBtn}
    </div>
  );
}
