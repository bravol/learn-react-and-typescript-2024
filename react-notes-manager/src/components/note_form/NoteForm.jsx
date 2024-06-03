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

export function NoteForm({ title, onClickEdit, onClickCreate, onSubmit }) {
  const [formErrors, setFormErrors] = useState({
    title: true,
    content: true,
  });
  const [formValues, seFormValues] = useState({
    title: "",
    content: "",
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
        {onClickEdit && <PencilFill className={s.icon} />}
      </div>
      <div className="col-1">
        {onClickEdit && <TrashFill className={s.icon} />}
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
      <div className={`mb-3 ${s.title_input_container}`}>{titleInput}</div>
      <div className="mb-3">{contentInput}</div>
      {submitBtn}
    </div>
  );
}
