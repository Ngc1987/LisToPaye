import Absence from "../components/Absence";
import { render, screen } from '../setupTests';
import { Provider } from "react-redux";
import { store } from './../redux/store';

jest.mock("../redux/redux-hooks");

describe("Absence component", () => {

	// const dispatch = jest.fn()

	// beforeEach(() => {
	// 	useAppSelector.mockImplementation(testUseAppSelector);
	// 	useAppDispatch.mockImplementation(() => dispatch);
	// })

	// afterEach(() => {
	// 	jest.clearAllMocks()
	// })

	const container = document.createElement('div');

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
})