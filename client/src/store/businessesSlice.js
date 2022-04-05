export function fetchBusinesses() {
  return function (dispatch) {
    dispatch({ type: "businesses/loading" });
    fetch("/businesses")
      .then((res) => res.json())
      .then((json) => dispatch({ type: "businesses/loaded", payload: json }));
  };
}

const initialState = {
  entities: [], // array of businesses
  status: "idle",
};

export default function businessesReducer(state = initialState, action) {
  switch (action.type) {
    case "businesses/loading":
      return {
        ...state,
        status: "loading",
      };
    case "businesses/loaded":
      return {
        ...state,
        status: "idle",
        entities: action.payload,
      };
    default:
      return state;
  }
}
