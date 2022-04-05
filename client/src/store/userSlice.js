const initialState = {
  user: null, // user object
  status: "idle",
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case "user/loading":
      return {
        ...state,
        status: "loading",
      };
    case "user/loaded":
      return {
        ...state,
        status: "idle",
        entities: action.payload,
      };
    default:
      return state;
  }
}
