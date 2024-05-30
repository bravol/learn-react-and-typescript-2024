import React from "react";

export default function PasswordGeneratorBody() {
  return (
    <form className="form_root">
      <div className="grid_container">
        <div className="grid_item">
          Size
          <select>
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
            <option value="20">20</option>
          </select>
        </div>
        <div className="grid_item">
          Uppercase
          <input type="checkbox" defaultChecked />
        </div>
        <div className="grid_item">
          Numbers
          <input type="checkbox" defaultChecked />
        </div>
        <div className="grid_item">
          Specials
          <input type="checkbox" defaultChecked />
        </div>
      </div>
      <div className="btn_container">
        <button className="btn_generate">GENERATE</button>
      </div>
    </form>
  );
}
