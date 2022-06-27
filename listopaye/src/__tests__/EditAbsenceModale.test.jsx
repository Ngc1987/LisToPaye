import EditAbsenceModale from "../components/EditAbsenceModale";
import { render, screen } from '../setupTests';

import { Provider } from "react-redux";
import { store } from './../redux/store';

jest.mock("../redux/redux-hooks");

describe("EditAbsenceModale component", () => {

	const container = document.createElement('div');
	const setEditAbsenceModale = jest.fn()

	const mockedData = { id: 1, dateDebut: "2020-01-01", dateFin: "2020-01-01", absenceCode: "A", employeeName: "John Doe" };
	const { id, dateDebut, dateFin, absenceCode, employeeName } = mockedData;

	test("should render without crash", () => {
		render(
			<EditAbsenceModale setEditAbsenceModale={setEditAbsenceModale}
									employee={employeeName}
									dateDebut={dateDebut}
									dateFin={dateFin}
									type={absenceCode}
									id={id} />
			, container);
	})

	test('should show its content on the page', () => {

		render(<Provider store={store}>
				<EditAbsenceModale setEditAbsenceModale={setEditAbsenceModale}
										employee={employeeName}
										dateDebut={dateDebut}
										dateFin={dateFin}
										type={absenceCode}
										id={id} />
				</Provider>);

		const updateModale = screen.getByTestId("updateModale");
		expect(updateModale).toBeInTheDocument();

	})
})