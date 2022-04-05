export function setAlert(status) {
  return {
    type: "alert/login",
    payload: status,
  };
}

const initialState = {
  status: false,
};

export default function alertReducer(state = initialState, action) {
  switch (action.type) {
    case "alert/setAlert":
      return {
        ...state,
        status: action.payload,
      };
    default:
      return state;
  }
}
