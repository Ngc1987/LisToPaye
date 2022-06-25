import AbsencesList from "../components/AbsencesList";
import { render, fireEvent, screen } from '../setupTests';
import ReactDOM from 'react-dom';
import { useAppDispatch, useAppSelector } from "../redux/redux-hooks";
import { testUseAppSelector } from './../redux/test-app-selector';
import { Provider } from "react-redux";
import { store } from './../redux/store';

jest.mock("../redux/redux-hooks");

describe("Header component", () => {

	const dispatch = jest.fn()

	beforeEach(() => {
		useAppSelector.mockImplementation(testUseAppSelector);
		useAppDispatch.mockImplementation(() => dispatch);
	})

	afterEach(() => {
		jest.clearAllMocks()
	})

	const container = document.createElement('div');
	test("should render without crash", () => {
		ReactDOM.render(
			<AbsencesList />
			, container);
	})

	test('should show its content on the page', () => {
		render(<Provider store={store}>
			<AbsencesList />
		</Provider>);

		const pageTitle = screen.getByText("Liste des absences");
		expect(pageTitle).toBeInTheDocument();

		// expect(useAppDispatch).toHaveBeenCalled();
		// expect(dispatch).toHaveBeenCalledWith({
		// 	"type": "GET_ABSENCES",
		// 	"payload": ""
		// })

	})
})