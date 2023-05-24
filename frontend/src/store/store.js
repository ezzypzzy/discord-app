// 'composeWithDevTools' is a function that allows you to turn on the Redux DevTools extension in your browser for debugging purposes.
import { composeWithDevTools } from "redux-devtools-extension";

// Here we're importing several utilities from 'redux':
// 'combineReducers' allows you to merge multiple reducers into one,
// 'createStore' is a function that creates your Redux store,
// and 'applyMiddleware' is a Redux method that lets you use middleware in the dispatch process.
import { combineReducers, createStore, applyMiddleware } from "redux";

// Thunk is a middleware that allows you to write action creators that return a function instead of an action
// It can be used to delay the dispatch of an action or to dispatch only if certain conditions are met.
import thunk from "redux-thunk";

import authReducer from "./reducers/authReducer";
import alertReducer from "./reducers/alertReducer";

// 'rootReducer' will be the single source of truth for your state tree in your Redux store.
// --> We find this useful as this will help us to avoid creating one big reducer function.
// Therefore, we are able to split our application state into multiple reducers.
const rootReducer = combineReducers({
  auth: authReducer,
  alert: alertReducer,
});

// Here, the Redux store is being created using createStore. The first argument is the root reducer,
// and the second argument is the result of the composeWithDevTools function, which includes the applyMiddleware
// function call with thunk as its argument.
// This means that the Redux DevTools will be enabled and the Redux store will be able to handle thunk actions.
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
