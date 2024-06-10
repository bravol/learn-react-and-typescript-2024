import axios from "axios";

function setInitialValue(initialValue) {
  return initialValue;
}

async function fetchValue() {
  const response = await axios("");
  return response.data;
}

function counterReducer(currentState, action) {
  switch (action.type) {
    case "INCREMENT":
      return currentState + action.payload; // 1
    case "DECREMENT":
      return currentState - 1; // -1;
    case "INCREMENT_BY_ANY_NUMBER":
      return currentState + action.payload;
    case "RESET_COUNTER":
      return setInitialValue(0);
    case "API_SETVALUE":
      return action.payload;
    default:
      return currentState;
  }
}

export { setInitialValue, counterReducer, fetchValue };
