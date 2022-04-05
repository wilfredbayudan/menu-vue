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
