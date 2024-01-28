import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { Provider } from "react-redux";
import createSagaMiddleware from "redux-saga";
import { configureStore } from "@reduxjs/toolkit";
import  catReducer  from "./catSlice";
import catSaga from "./catSaga";

const saga = createSagaMiddleware();
const store = configureStore({
  reducer: {
    cats: catReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(saga)
});

saga.run(catSaga);
ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
