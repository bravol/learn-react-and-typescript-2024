import React from "react";
import { generatePassword } from "../../utils/password";

export default function PasswordGeneratorBody(props) {
  //submit
  const submit = (e) => {
    e.preventDefault();
    const formData = {};
    new FormData(e.currentTarget).forEach((value, key) => {
      formData[key] = value;
      // console.log(key, value);
    });
    // console.log("###", formData);
    //generate a random password usinf formData
    //send the password to the parent component
    //parent component will display the password
    // ACTUALLY update parrent password state with the generated password
    let generatedPassword = generatePassword(formData);
    props.setPassword(generatedPassword);
  };
  return (
    <form className="form_root" onSubmit={submit}>
      <div className="grid_container">
        <div className="grid_item">
          Size
          <select name="size">
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
            <option value="20">20</option>
          </select>
        </div>
        <div className="grid_item">
          Uppercase
          <input type="checkbox" defaultChecked name="uppercase" />
        </div>
        <div className="grid_item">
          Numbers
          <input type="checkbox" defaultChecked name="number" />
        </div>
        <div className="grid_item">
          Specials
          <input type="checkbox" defaultChecked name="special" />
        </div>
      </div>
      <div className="btn_container">
        <button className="btn_generate" type="submit">
          GENERATE
        </button>
      </div>
    </form>
  );
}
