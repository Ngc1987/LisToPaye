
import { legacy_createStore as createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import absencesReducer from "./absences.reducer.js";
// Dev tools
import { composeWithDevTools } from "redux-devtools-extension";

export const middlewares = [thunk];

export const createStoreWithMiddleware = composeWithDevTools(applyMiddleware(...middlewares))(createStore);

export const store = createStoreWithMiddleware(absencesReducer)

