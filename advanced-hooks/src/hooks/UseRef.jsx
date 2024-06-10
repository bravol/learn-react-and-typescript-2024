import React, { useRef } from "react";

const UseRef = () => {
  const codeInputRef = useRef();
  const dateInputRef = useRef();

  function handleCardNumberChange(e) {
    if (e.target.value.length >= 16) {
      codeInputRef.current.focus();
    }
  }

  function handleCodeChange(e) {
    if (e.target.value.length >= 3) {
      dateInputRef.current.focus();
    }
  }

  function handleDateChange(e) {
    if (e.target.value.length >= 4) {
      dateInputRef.current.blur();
    }
  }

  return (
    <div>
      <div>
        <label>Card Number</label>
        <input
          autoFocus
          onChange={handleCardNumberChange}
          type="number"
          name="creditCardNumber"
        />
      </div>
      <div>
        <label>Secret code</label>
        <input
          onChange={handleCodeChange}
          ref={codeInputRef}
          type="number"
          name="creditCardCode"
        />
      </div>
      <div>
        <label>Expiration Date</label>
        <input
          onChange={handleDateChange}
          ref={dateInputRef}
          type="text"
          name="creditCardCode"
        />
      </div>
    </div>
  );
};

export default UseRef;
