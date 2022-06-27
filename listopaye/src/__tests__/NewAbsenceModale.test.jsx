import NewAbsenceModale from "../components/NewAbsenceModale";
import { render, screen } from '../setupTests';

import { Provider } from "react-redux";
import { store } from './../redux/store';
import { checkProps } from "../testsUtils";

jest.mock("../redux/redux-hooks");

describe("NewAbsenceModale component", () => {

	const container = document.createElement('div');
	const handleRegisterAbsence = jest.fn();
	const setNewEmployee = jest.fn();
	const setNewDateDebut = jest.fn();
	const setNewDateFin = jest.fn();
	const setNewType = jest.fn();
	const setShowNewAbsence = jest.fn();
	const showError = true;


	test("should render without crash", () => {
		render(
			<NewAbsenceModale handleRegisterAbsence={handleRegisterAbsence}
				setNewEmployee={setNewEmployee}
				setNewDateDebut={setNewDateDebut}
				setNewDateFin={setNewDateFin}
				setNewType={setNewType}
				setShowNewAbsence={setShowNewAbsence}
				showError={showError}
			/>
			, container);
	})

	test('should show its content on the page', () => {

		render(<Provider store={store}>
			<NewAbsenceModale handleRegisterAbsence={handleRegisterAbsence}
				setNewEmployee={setNewEmployee}
				setNewDateDebut={setNewDateDebut}
				setNewDateFin={setNewDateFin}
				setNewType={setNewType}
				setShowNewAbsence={setShowNewAbsence}
				showError={showError}
			/>
		</Provider>);

		const newAbsenceModale = screen.getByText("Nouvelle absence");
		expect(newAbsenceModale).toBeInTheDocument();

	})

	test("with good PropTypes should not show a warning", () => {
		const expectedProps = {
			handleRegisterAbsence: handleRegisterAbsence,
			setNewEmployee: setNewEmployee,
			setNewDateDebut: setNewDateDebut,
			setNewDateFin: setNewDateFin,
			setNewType: setNewType,
			setShowNewAbsence: setShowNewAbsence,
			showError: showError
		}
		const propsError = checkProps(NewAbsenceModale, expectedProps);
		expect(propsError).toBeUndefined()
	})
	test("with wrong PropTypes should show a warning", () => {
		const expectedProps = {
			handleRegisterAbsence: handleRegisterAbsence,
			setNewEmployee: setNewEmployee,
			setNewDateDebut: setNewDateDebut,
			setNewDateFin: setNewDateFin,
			setNewType: setNewType,
			setShowNewAbsence: setShowNewAbsence,
			showError: "Wrong test value"
		}
		const propsError = checkProps(NewAbsenceModale, expectedProps);
		// console.log(propsError)
		expect(propsError).toBeDefined()
	})
})