import { combineReducers, createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleware from "redux-thunk";
import businessesReducer from "./store/businessesSlice";
import userReducer from "./store/userSlice";
import alertReducer from "./store/alertSlice";

const reducer = combineReducers({
  businesses: businessesReducer,
  user: userReducer,
  alert: alertReducer,
});

const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware));

const store = createStore(reducer, composedEnhancer);

export default store;
