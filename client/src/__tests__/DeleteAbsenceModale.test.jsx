import DeleteAbsenceModale from "../components/DeleteAbsenceModale";
import { render,screen } from '../setupTests';
import { Provider } from "react-redux";
import { store } from './../redux/store';
import { checkProps } from "../testsUtils";

jest.mock("../redux/redux-hooks");

describe("DeleteAbsenceModale component", () => {

	const container = document.createElement('div');
	const setDeleteAbsenceModale = jest.fn()
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

	})

	test("with good PropTypes should not show a warning", () => {
		const expectedProps = {
			setDeleteAbsenceModale: setDeleteAbsenceModale,
			id: 12
		}
		const propsError = checkProps(DeleteAbsenceModale, expectedProps);
		expect(propsError).toBeUndefined()
	})
	test("with wrong PropTypes should show a warning", () => {
		const expectedProps = {
			setDeleteAbsenceModale: setDeleteAbsenceModale,
			id: "Test wrong value"
		}
		const propsError = checkProps(DeleteAbsenceModale, expectedProps);
		expect(propsError).toBeDefined()
	})
})