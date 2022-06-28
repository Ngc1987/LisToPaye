import moxios from "moxios";
import axios from "axios";
import { wait } from "@testing-library/react";
import { testStore } from "../../testsUtils";
import * as absences from "../../redux/absences.actions";
import waitForElement from "@testing-library/react";
// const moxiosWait = () => new Promise((r) => moxios.wait(r));
import configureStore from "redux-mock-store";
import * as thunk from 'redux-thunk';

// const api = `https://lit-citadel-53781.herokuapp.com/https://test-technique-front.vercel.app/api/type-absences`
// jest.mock(absencesApi)
describe("Absence actions", () => {

	const middlewares = [thunk.default];
	const mockStore = configureStore(middlewares)
	const initialState = {
		absences: [
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
				absenceCode: "CONGE_PATERNITE",
				employeeName: "John Doe"
			}
		],
		absence: {},
		absencesTypes: {}
	}


	test("shoukld create an action to add a new absence", () => {
		const store = mockStore(initialState);
		const newAbsence = {
			dateDebut: "2020-01-01",
			dateFin: "2020-01-01",
			absenceCode: "CONGE_PATERNITE",
			employeeName: "Michel Michel"
		}

		const expectedPayload = [
			{
				type: absences.CREATE_ABSENCE,
				payload: newAbsence
			}
		]

		return store.dispatch(absences.createAbsence(newAbsence))
			.then(() => {
				const actions = store.getActions();
				expect(actions).toEqual(expectedPayload);
			})
	})
})
