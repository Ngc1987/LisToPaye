// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
import React from 'react';
import { render } from '@testing-library/react';

import { Provider } from "react-redux";
import { legacy_createStore as createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import absencesReducer from "./redux/absencesReducer";
// import RouterProvider from './providers/router-provider';
import { store } from "./redux/store";


const AllTheProviders = ({ children }) => {
	return (
		<Provider store={store}>
				{children}
		</Provider>
	);
};

const customRender = (ui, options) => render(ui, { wrapper: AllTheProviders, ...options });

const originalError = console.error;
beforeAll(() => {
	console.error = (...args) => {
		if (/Warning: ReactDOM.render is no longer supported in React 18./.test(args[0])) {
			return;
		}
		originalError.call(console, ...args);
	};
});

afterAll(() => {
	jest.clearAllMocks()
	console.error = originalError;
});

export * from '@testing-library/react';
export * from '@testing-library/jest-dom';

export { customRender as render };