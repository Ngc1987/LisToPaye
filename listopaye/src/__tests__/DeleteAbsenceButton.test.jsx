import DeleteAbsenceButton from "../components/DeleteAbsenceButton";
import { render, fireEvent, screen } from '../setupTests';

import { Provider } from "react-redux";
import { store } from './../redux/store';

jest.mock("../redux/redux-hooks");

describe("DeleteAbsenceButton component", () => {

	const container = document.createElement('div');
	const setDeleteAbsenceModale = jest.fn()

	test("should render without crash", () => {
		render(
			<DeleteAbsenceButton setDeleteAbsenceModale={setDeleteAbsenceModale} />
			, container);
	})

	test('should show its content on the page and call the setState action on click', () => {

		render(<Provider store={store}>
			<DeleteAbsenceButton setDeleteAbsenceModale={setDeleteAbsenceModale} />
		</Provider>);

		const deleteButton = screen.getByTestId("deleteButton");
		expect(deleteButton).toBeInTheDocument();

		fireEvent.click(deleteButton);
		expect(setDeleteAbsenceModale).toHaveBeenCalled();


	})
})