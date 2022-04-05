import { combineReducers, createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleware from "redux-thunk";
import businessesReducer from "./store/businessesSlice";
import userReducer from "./store/userSlice";

const reducer = combineReducers({
  businesses: businessesReducer,
  user: userReducer,
});

const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware));

const store = createStore(reducer, composedEnhancer);

export default store;
