import Loader from "../components/Loader";
import { render, fireEvent, screen } from '../setupTests';

import { Provider } from "react-redux";
import { store } from './../redux/store';

jest.mock("../redux/redux-hooks");

describe("Loader component", () => {

	const container = document.createElement('div');

	test("should render without crash", () => {
		render(
			<Loader />
			, container);
	})

	test('should show its content on the page', () => {

		render(<Provider store={store}>
			<Loader />
		</Provider>);

		const loader = screen.getByTestId("loader");
		expect(loader).toBeInTheDocument();

	})
})