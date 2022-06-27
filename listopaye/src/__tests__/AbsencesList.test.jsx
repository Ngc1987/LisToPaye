import AbsencesList from "../components/AbsencesList";
import { unmountComponentAtNode } from "react-dom";
import { render, screen } from '../setupTests';
import { useAppDispatch, useAppSelector } from "../redux/redux-hooks";
import { testUseAppSelector } from './../redux/test-app-selector';
import { Provider } from "react-redux";
import { store } from './../redux/store';
import { waitFor, waitForElementToBeRemoved } from "@testing-library/react";

import { act } from "react-dom/test-utils";
import { rest } from 'msw'
import { setupServer } from 'msw/node'

jest.mock("../redux/redux-hooks");

const mockedAbsences = [
	{
		id: 1,
		dateDebut: "2020-01-01",
		dateFin: "2020-01-01",
		absenceCode: "CONGE_PATERNITE",
		employeeName: "John Doe"
	},
	{
		id: 2,
		dateDebut: "2020-01-01",
		dateFin: "2020-01-01",
		absenceCode: "CONGE_MATERNITE",
		employeeName: "Jane Doe"
	},
]

const server = setupServer(
	// On précise ici l'url qu'il faudra "intercepter"
	rest.get('https://lit-citadel-53781.herokuapp.com/https://test-technique-front.vercel.app/api/absences', (req, res, ctx) => {
		// Là on va pouvoir passer les datas mockées dans ce qui est retourné en json
		return res(ctx.json({ absences: mockedAbsences }))
	})
)


// Active la simulation d'API avant les tests depuis server
beforeAll(() => server.listen())
// Réinitialise tout ce qu'on aurait pu ajouter en termes de durée pour nos tests avant chaque test
afterEach(() => server.resetHandlers())
// Ferme la simulation d'API une fois que les tests sont finis
afterAll(() => server.close())

describe("AbsenceList", () => {

	const dispatch = jest.fn()

	let container = null;

	beforeEach(() => {
		useAppSelector.mockImplementation(testUseAppSelector);
		useAppDispatch.mockImplementation(() => dispatch);

		container = document.createElement("div");
		document.body.appendChild(container);
	})

	afterEach(() => {
		jest.clearAllMocks()

		unmountComponentAtNode(container);
		container.remove();
		container = null;
	})

	// const container = document.createElement('div');
	test("should render without crash", () => {

		render(
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
	test('show the loader before the content', async () => {
		render(<Provider store={store}>
			<AbsencesList />
		</Provider>);

		const loader = screen.getByTestId("loader");
		expect(loader).toBeInTheDocument();

		// await waitForElementToBeRemoved(() => loader)

		// await waitFor(() => {
		// 	expect(screen.getByText("John Doe")).toBeTruthy()

		// })

		// expect(useAppDispatch).toHaveBeenCalled();
		// expect(dispatch).toHaveBeenCalledWith({
		// 	"type": "GET_ABSENCES",
		// 	"payload": ""
		// })

	})
})