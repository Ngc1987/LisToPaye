import checkPropTypes from "check-prop-types";

export const findByTestAttr = (component, attr) => {
	const wrapper = component.find(`[data-testid='${attr}']`);
	return wrapper;
}


export const checkProps = (component, expectedProps) => {
	const propsErrors = checkPropTypes(component.propTypes, expectedProps, 'props', component.name);
	return propsErrors;
}