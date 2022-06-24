import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./styles/index.scss";
import reportWebVitals from './reportWebVitals';
import { Provider } from "react-redux";
import { legacy_createStore as createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";

import absencesReducer from "./reducers/absencesReducer";
// Dev tools
import { composeWithDevTools } from "redux-devtools-extension";
import { getAbsences } from "./actions/absences.actions";

const store = createStore(
	absencesReducer, composeWithDevTools(applyMiddleware(thunk, logger))
);

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
reportWebVitals();
