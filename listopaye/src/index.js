import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import "./styles/index.scss";
// import reportWebVitals from './reportWebVitals.js';

import { Provider } from "react-redux";
import { getAbsences } from "./redux/absences.actions.js";

import { store } from './redux/store.js';

store.dispatch(getAbsences());

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<Provider store={store}>
    	<App />
  	</Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
