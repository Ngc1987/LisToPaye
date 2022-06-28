import checkPropTypes from "check-prop-types";

import { applyMiddleware, legacy_createStore as createStore } from "redux";
import absencesReducer from "../redux/absences.reducer";
import { middlewares } from "../redux/store";


export const findByTestAttr = (component, attr) => {
	const wrapper = component.find(`[data-testid='${attr}']`);
	return wrapper;
}


export const checkProps = (component, expectedProps) => {
	const propsErrors = checkPropTypes(component.propTypes, expectedProps, 'props', component.name);
	return propsErrors;
}


export const testStore = (initialState) => {
	const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);
	return createStoreWithMiddleware(absencesReducer, initialState)
}