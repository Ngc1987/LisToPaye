import AbsencesList from "../components/AbsencesList";
import { unmountComponentAtNode } from "react-dom";
import { render, screen } from '../setupTests';
import { useAppDispatch, useAppSelector } from "../redux/redux-hooks";
import { testUseAppSelector } from './../redux/test-app-selector';
import { Provider } from "react-redux";
import { store } from './../redux/store';

jest.mock("../redux/redux-hooks");



describe("AbsenceList", () => {

	const dispatch = jest.fn()

	let container = null;

	beforeEach(() => {
		useAppSelector.mockImplementation(testUseAppSelector);
		useAppDispatch.mockImplementation(() => dispatch);

		container = document.createElement("div");
		document.body.appendChild(container);
	})

	afterEach(() => {
		jest.clearAllMocks()

		unmountComponentAtNode(container);
		container.remove();
		container = null;
	})

	test("should render without crash", () => {

		render(
			<AbsencesList />
			, container);
	})

	test('should show its content on the page', () => {
		render(<Provider store={store}>
			<AbsencesList />
		</Provider>);

		const pageTitle = screen.getByText("Liste des absences");
		expect(pageTitle).toBeInTheDocument();

	})
	test('show the loader before the content', () => {
		render(<Provider store={store}>
			<AbsencesList />
		</Provider>);

		const loader = screen.getByTestId("loader");
		expect(loader).toBeInTheDocument();

	})
})