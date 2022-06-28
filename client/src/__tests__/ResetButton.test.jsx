import ResetButton from "../components/ResetButton";
import { render, fireEvent, screen } from '../setupTests';
import { Provider } from "react-redux";
import { store } from './../redux/store';

describe("ResetButton component", () => {

	const container = document.createElement('div');


	test("should render without crash", () => {
		render(
			<ResetButton />
			, container);
	})

	test('should show its content on the page', () => {

		render(<Provider store={store}>
			<ResetButton />
		</Provider>);

		const resetButton = screen.getByTestId("resetButton");
		expect(resetButton).toBeInTheDocument();

	})
	test('should show the reset modale after click on the reset button', () => {

		render(<Provider store={store}>
			<ResetButton />
		</Provider>);

		const resetButton = screen.getByTestId("resetButton");

		fireEvent.click(resetButton);
		const resetModale = screen.getByTestId("resetModale");
		expect(resetModale).toBeInTheDocument();

	})
})