import DeleteAbsenceModale from "../components/DeleteAbsenceModale";
import { render,screen } from '../setupTests';

import { Provider } from "react-redux";
import { store } from './../redux/store';

jest.mock("../redux/redux-hooks");

describe("DeleteAbsenceModale component", () => {

	const container = document.createElement('div');
	const setDeleteAbsenceModale = jest.fn()
	// const handleDeleteAbsence = jest.fn()
	const id = 20;

	test("should render without crash", () => {
		render(
			<DeleteAbsenceModale
				setDeleteAbsenceModale={setDeleteAbsenceModale}
				id={id} />
			, container);
	})

	test('should show its content on the page', () => {

		render(<Provider store={store}>
			<DeleteAbsenceModale
				setDeleteAbsenceModale={setDeleteAbsenceModale}
				id={id} />
		</Provider>);

		const deleteModale = screen.getByTestId("deleteModale");
		expect(deleteModale).toBeInTheDocument();

		// const deleteModaleButton = screen.getByTestId("deleteModaleButton");
		// fireEvent.click(deleteModaleButton);
		// expect(handleDeleteAbsence).toHaveBeenCalled();

	})
})