import React from "react";
import ReactDOM from "react-dom";

import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

import App from "./app";
import "./app.css";

import todoReducer from "./features/todoSlice"

const store = configureStore({
  reducer: {
    todos: todoReducer
  },
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
