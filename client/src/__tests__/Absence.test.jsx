import Absence from "../components/Absence";
import { unmountComponentAtNode } from "react-dom";
import { render, screen } from '../setupTests';
import { Provider } from "react-redux";
import { store } from '../features/absenceSlice';
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

	const mockedData = { id: 1, dateDebut: "2020-01-01", dateFin: "2020-01-01", absenceCode: "A", employeeName: "John Doe" };
	const { id, dateDebut, dateFin, absenceCode, employeeName } = mockedData;

	test("should render without crash", () => {
		render(
			<Absence employee={employeeName}
				dateDebut={dateDebut}
				dateFin={dateFin}
				type={absenceCode}
				id={id} />
			, container);
	})

	test('should show its content on the page', () => {


		render(<Provider store={store}>
			<Absence employee={employeeName}
				dateDebut={dateDebut}
				dateFin={dateFin}
				type={absenceCode}
				id={id} />
		</Provider>);

		const absence = screen.getByTestId("absence");
		expect(absence).toBeInTheDocument();


	})

	test("with good PropTypes should not show a warning",() => {
		const expectedProps = {
			employee: "Test Employee",
			dateDebut: "Test dateDebut",
			dateFin: "Test dateFin",
			type: "Test type",
			id: 9
		}
		const propsError = checkProps(Absence, expectedProps);
		expect(propsError).toBeUndefined()
	})
	test("with wrong PropTypes should show a warning",() => {
		const expectedProps = {
			employee: "Test Employee",
			dateDebut: "Test dateDebut",
			dateFin: "Test dateFin",
			type: "Test type",
			id: "Wrong test value"
		}
		const propsError = checkProps(Absence, expectedProps);
		// console.log(propsError)
		expect(propsError).toBeDefined()
	})
})