import AbsencesTypes from "../components/AbsencesTypes";
import { unmountComponentAtNode } from "react-dom";
import { render, screen } from '../setupTests';
import { Provider } from "react-redux";
import { store } from './../redux/store';
import { checkProps } from "../testsUtils";

jest.mock("../redux/redux-hooks");

describe("Absence component", () => {

	let container = null;

	beforeEach(() => {

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
			<AbsencesTypes className="absencesTypes showAbsences" />
			, container);
	})

	test('should show its content on the page', () => {


		render(<Provider store={store}>
			<AbsencesTypes className="absencesTypes showAbsences" />
		</Provider>);

		const absencesTypes = screen.getByTestId("absencesTypes");
		expect(absencesTypes).toBeInTheDocument();


	})

	test("with good PropTypes should not show a warning", () => {
		const expectedProps = {
			className: "absencesTypes showAbsences"
		}
		const propsError = checkProps(AbsencesTypes, expectedProps);
		expect(propsError).toBeUndefined()
	})
	test("with wrong PropTypes should show a warning", () => {
		const expectedProps = {
			id: "Wrong test value"
		}
		const propsError = checkProps(AbsencesTypes, expectedProps);
		// console.log(propsError)
		expect(propsError).toBeDefined()
	})
})