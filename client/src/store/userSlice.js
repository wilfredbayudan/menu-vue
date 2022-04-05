export function login(user) {
  return {
    type: "user/login",
    payload: user,
  };
}

export function logout() {
  return {
    type: "user/logout",
  };
}

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
    case "user/login":
      return {
        ...state,
        user: action.payload,
      };
    case "user/logout":
      return {
        ...state,
        user: null,
      };
    default:
      return state;
  }
}
