import fetchMock from 'fetch-mock'
import { apiMiddleware, ApiError } from 'redux-api-middleware';
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import * as absencesReducers from "../redux/absences.reducer";
import * as absencesActions from "../redux/absences.actions";
import { useAppDispatch, useAppSelector } from "../redux/redux-hooks";
import axios from "axios";
import MockAdapter from 'axios-mock-adapter';
// const actions = require("./redux/absences.actions")

import configureStore from 'redux-mock-store';
const middlewares = [thunk]
const mockStore = configureStore(middlewares);
const mock = new MockAdapter(axios);
// const createStore = configureMockStore(middlewares)
// const store = createStore(initialState)
const store = mockStore({});
// const dispatch = jest.fn()

describe('Absences reducer', () => {

	afterEach(() => {
		fetchMock.reset()
		fetchMock.restore()
	})

	it('dispatch GET_ABSENCES after fetching', () => {


		mock.onGet('/absences').reply(200, {
			response: [
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
		});


		const expectedActions = [
			{
				type: absencesActions.GET_ABSENCES, payload: {
					data: [
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
				}
			}
		]

		store.dispatch(absencesActions.getAbsences())
		expect(store.getActions()).toEqual()
	})
	it('dispatch CREATE_ABSENCE', async () => {

		const response = [
			{
				id: 12,
				dateDebut: "2020-01-01",
				dateFin: "2020-01-01",
				absenceCode: "CONGE_PATERNITE",
				employeeName: "John Doe"
			}
		]


		mock.onPost('https://lit-citadel-53781.herokuapp.com/https://test-technique-front.vercel.app/api/absences').reply(200, {
			response: {
				id: 15,
				dateDebut: "2022-01-01",
				dateFin: "2022-01-01",
				absenceCode: "CONGE_PATERNITE",
				employeeName: "John Doey"
			}
		});



		await store.dispatch(absencesActions.createAbsence(response)).then(() => {
			const expectedActions = [
				{
					type: absencesActions.CREATE_ABSENCE, payload: {
						id: 15,
						dateDebut: "2022-01-01",
						dateFin: "2022-01-01",
						absenceCode: "CONGE_PATERNITE",
						employeeName: "John Doey"
					}
				}
			]

			expect(store.getActions()).toEqual(expectedActions)
		})
	})
})
// })