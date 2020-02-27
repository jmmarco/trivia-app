import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Card from "./components/Card";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { questionsReducer } from "./reducers/questions";
import middleware from "./middleware";

// Specify the initial state
export const initialAppState = { questions: null, index: 0, intro: true, loading: true, error: null, completed: false }

// Create the Redux store
const store = createStore(
  questionsReducer,
  initialAppState,
  middleware
);

// console.log(store.getState());

ReactDOM.render(
  <Provider store={store}>
    <Card />
  </Provider>,
  document.getElementById("root")
);
