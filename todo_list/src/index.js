import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
/*
import { createStore } from "redux";
*/
import { Provider } from "react-redux";
import todos from "./reducers/todos";
/*
import { composeWithDevTools } from "redux-devtools-extension";
*/
import { restore } from "./actions/todos";
import configureStore from "./store";

/*
const store = createStore(todos, composeWithDevTools());
*/

const store = configureStore(todos);

function loadData() {
  try {
    const data = localStorage.getItem("todo-app-data");
    console.log("loadData data : " + data);

    if (!data) return;

    store.dispatch(restore(JSON.parse(data)));
    
  } catch (e) {
    console.log("localStorage is not working");
  }
}

loadData();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
