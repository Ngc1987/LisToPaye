import EditAbsenceButton from "../components/EditAbsenceButton";
import { render, fireEvent, screen } from '../setupTests';

import { Provider } from "react-redux";
import { store } from './../redux/store';
import { checkProps } from "../testsUtils";

jest.mock("../redux/redux-hooks");

describe("EditAbsenceButton component", () => {

	const container = document.createElement('div');
	const setEditAbsenceModale = jest.fn()

	test("should render without crash", () => {
		render(
			<EditAbsenceButton setEditAbsenceModale={setEditAbsenceModale} />
			, container);
	})

	test('should show its content on the page and call the setState action on click', () => {

		render(<Provider store={store}>
			<EditAbsenceButton setEditAbsenceModale={setEditAbsenceModale} />
		</Provider>);

		const editButton = screen.getByTestId("editButton");
		expect(editButton).toBeInTheDocument();

		fireEvent.click(editButton);
		expect(setEditAbsenceModale).toHaveBeenCalled();

	})

	test("with good PropTypes should not show a warning", () => {
		const expectedProps = {
			setEditAbsenceModale: setEditAbsenceModale
		}
		const propsError = checkProps(EditAbsenceButton, expectedProps);
		expect(propsError).toBeUndefined()
	})
	test("with wrong PropTypes should show a warning", () => {
		const expectedProps = {
			setEditAbsenceModale: "Wrong test value"
		}
		const propsError = checkProps(EditAbsenceButton, expectedProps);
		// console.log(propsError)
		expect(propsError).toBeDefined()
	})
})