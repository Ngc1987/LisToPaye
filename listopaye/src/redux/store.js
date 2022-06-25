
import { legacy_createStore as createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import absencesReducer from "./absencesReducer";
// Dev tools
import { composeWithDevTools } from "redux-devtools-extension";

export const store = createStore(
	absencesReducer, composeWithDevTools(applyMiddleware(thunk))
);

