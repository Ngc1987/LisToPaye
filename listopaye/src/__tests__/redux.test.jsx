import { GET_ABSENCES, GET_ABSENCE, CREATE_ABSENCE, MODIFY_ABSENCE, DELETE_ABSENCE, GET_ABSENCE_TYPES, RESET_ABSENCES } from "../redux/absences.actions";
import absencesReducer from "../redux/absences.reducer";


describe("Absences reducer", () => {
	
	
	
	it("should return the initial default empty state", () => {
		const initialState = absencesReducer(undefined, {});
		const newState = absencesReducer(undefined, {});
		expect(newState).toEqual(initialState)
	})
	
	it("should add the absences list at state.absences when call GET_ABSENCES", () => {
		const absences = [
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
		]
		
		const newState = absencesReducer(undefined, {
			type: GET_ABSENCES,
			payload: absences
		})
		expect(newState).toEqual({ absences: absences, absence: {}, absencesTypes: {}})
	})
	it("should add one absence on state.absence when call GET_ABSENCE with the absence id on payload", () => {
		const initialState = {
			absences: [{
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
			} ],
			absence: {},
			absencesTypes: {}
		}
		

		const newState = absencesReducer(initialState, {
			type: GET_ABSENCE,
			payload: {id: 1}
		})
		expect(newState).toEqual({
			absences: [{
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
			}],
			absence: {
				id: 1,
				dateDebut: "2020-01-01",
				dateFin: "2020-01-01",
				absenceCode: "CONGE_PATERNITE",
				employeeName: "John Doe"
			},
			absencesTypes: {}
		})
	})

	it("should add an absence on state.absences when calling CREATE_ABSENCE", () => {
		const initialState = {
			absences: [{
				id: 1,
				dateDebut: "2020-01-01",
				dateFin: "2020-01-01",
				absenceCode: "CONGE_PATERNITE",
				employeeName: "John Doe"
			}],
			absence: {},
			absencesTypes: {}
		}


		const newState = absencesReducer(initialState, {
			type: CREATE_ABSENCE,
			payload: {
				id: 3,
				dateDebut: "2020-01-01",
				dateFin: "2020-01-01",
				absenceCode: "CONGE_PATERNITE",
				employeeName: "Michel Michel"
			}
		})

		expect(newState).toEqual({
			absences: [{
				id: 3,
				dateDebut: "2020-01-01",
				dateFin: "2020-01-01",
				absenceCode: "CONGE_PATERNITE",
				employeeName: "Michel Michel"
			},
			{
				id: 1,
				dateDebut: "2020-01-01",
				dateFin: "2020-01-01",
				absenceCode: "CONGE_PATERNITE",
				employeeName: "John Doe"
			}
			],
			absence: {},
			absencesTypes: {}
		})
	})
	it("should delete an absence on state.absences when calling DELETE_ABSENCE with the absence id on the payload", () => {

		const initialState = {
			absences: [{
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
				employeeName: "Jane Doe"
			}],
			absence: {},
			absencesTypes: {}
		}


		const newState = absencesReducer(initialState, {
			type: DELETE_ABSENCE,
			payload: 2
		})

		expect(newState).toEqual({
			absences: [{
				id: 1,
				dateDebut: "2020-01-01",
				dateFin: "2020-01-01",
				absenceCode: "CONGE_PATERNITE",
				employeeName: "John Doe"
			}],
			absence: {},
			absencesTypes: {}
		})
	})

	it("should change an absence on state.absences when calling MODIFY_ABSENCE with the new absence infos on the payload", () => {
		const initialState = {
			absences: [{
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
			}],
			absence: {},
			absencesTypes: {}
		}


		const newState = absencesReducer(initialState, {
			type: MODIFY_ABSENCE,
			payload: {
				id: 2, data: {
					dateDebut: "2022-01-01",
					dateFin: "2022-01-03",
					absenceCode: "CONGE_PATERNITE",
					employeeName: "John Doe"
				}
			}
		})

		expect(newState).toEqual({
			absences: [{
				id: 1,
				dateDebut: "2020-01-01",
				dateFin: "2020-01-01",
				absenceCode: "CONGE_PATERNITE",
				employeeName: "John Doe"
			},
			{
				id: 2,
				dateDebut: "2022-01-01",
				dateFin: "2022-01-03",
				absenceCode: "CONGE_PATERNITE",
				employeeName: "John Doe"
			}],
			absence: {},
			absencesTypes: {}
		})
	})
	it("should fetch the different absence types when calling GET_ABSENCE_TYPES", () => {
		const initialState = {
			absences: {},
			absence: {},
			absencesTypes: {}
		}

		const newState = absencesReducer(initialState, {
			type: GET_ABSENCE_TYPES,
			payload: [
				{
					code: "CONGE_MATERNITE",
					libelle: "Congé maternité"
				},
				{
					code: "CONGE_PATERNITE",
					libelle: "Congé paternité"
				},
				{
					code: "CONGE_PAYE",
					libelle: "Congé payé"
				},
			]
		})

		expect(newState).toEqual({
			absences: {},
			absence: {},
			absencesTypes: [
				{
					code: "CONGE_MATERNITE",
					libelle: "Congé maternité"
				},
				{
					code: "CONGE_PATERNITE",
					libelle: "Congé paternité"
				},
				{
					code: "CONGE_PAYE",
					libelle: "Congé payé"
				},
			]
		})
	})
	it("should reset the datas and make the store empty when calling RESET_ABSENCES", () => {
		const initialState = {
			absences: [{
				id: 1,
				dateDebut: "2020-01-01",
				dateFin: "2020-01-01",
				absenceCode: "CONGE_PATERNITE",
				employeeName: "John Doe"
			},
			{
				id: 2,
				dateDebut: "2022-01-01",
				dateFin: "2022-01-03",
				absenceCode: "CONGE_PATERNITE",
				employeeName: "John Doe"
			}],
			absence: {},
			absencesTypes: {}
		}

		const newState = absencesReducer(initialState, {
			type: RESET_ABSENCES
		})

		expect(newState).toEqual({
			absences: {},
			absence: {},
			absencesTypes: {}
		})
	})

	
})

	// import fetchMock from 'fetch-mock'
	// import { apiMiddleware, ApiError } from 'redux-api-middleware';
	// import configureMockStore from 'redux-mock-store'
	// import thunk from 'redux-thunk'
	// import * as absencesReducers from "../redux/absences.reducer";
	// import * as absencesActions from "../redux/absences.actions";
	// import { useAppDispatch, useAppSelector } from "../redux/redux-hooks";
	// import axios from "axios";
	// import MockAdapter from 'axios-mock-adapter';
	// // const actions = require("./redux/absences.actions")

	// import configureStore from 'redux-mock-store';
	// const middlewares = [thunk]
	// const mockStore = configureStore(middlewares);
	// const mock = new MockAdapter(axios);
	// // const createStore = configureMockStore(middlewares)
	// // const store = createStore(initialState)
	// const store = mockStore([
	// 	{
	// 		id: 1,
	// 		dateDebut: "2020-01-01",
	// 		dateFin: "2020-01-01",
	// 		absenceCode: "CONGE_PATERNITE",
	// 		employeeName: "John Doe"
	// 	},
	// 	{
	// 		id: 2,
	// 		dateDebut: "2020-01-01",
	// 		dateFin: "2020-01-01",
	// 		absenceCode: "CONGE_MATERNITE",
	// 		employeeName: "Jane Doe"
	// 	},
	// ]);
	// // const dispatch = jest.fn()

	// describe('Absences reducer', () => {

	// 	afterEach(() => {
	// 		// fetchMock.reset()
	// 		// fetchMock.restore()
	// 	})

	// 	it('dispatch GET_ABSENCES after fetching', () => {


	// 		mock.onGet('/absences').reply(200, {
	// 			response: [
	// 				{
	// 					id: 1,
	// 					dateDebut: "2020-01-01",
	// 					dateFin: "2020-01-01",
	// 					absenceCode: "CONGE_PATERNITE",
	// 					employeeName: "John Doe"
	// 				},
	// 				{
	// 					id: 2,
	// 					dateDebut: "2020-01-01",
	// 					dateFin: "2020-01-01",
	// 					absenceCode: "CONGE_MATERNITE",
	// 					employeeName: "Jane Doe"
	// 				},
	// 			]
	// 		});


	// 		const expectedActions = [
	// 			{
	// 				type: absencesActions.GET_ABSENCES, payload: {
	// 					data: [
	// 						{
	// 							id: 1,
	// 							dateDebut: "2020-01-01",
	// 							dateFin: "2020-01-01",
	// 							absenceCode: "CONGE_PATERNITE",
	// 							employeeName: "John Doe"
	// 						},
	// 						{
	// 							id: 2,
	// 							dateDebut: "2020-01-01",
	// 							dateFin: "2020-01-01",
	// 							absenceCode: "CONGE_MATERNITE",
	// 							employeeName: "Jane Doe"
	// 						},
	// 					]
	// 				}
	// 			}
	// 		]

	// 		store.dispatch(absencesActions.getAbsences())
	// 		expect(store.getActions()).toEqual(expectedActions)
	// 	})
	// 	// it('dispatch CREATE_ABSENCE', async () => {

	// 	// 	const response = [
	// 	// 		{
	// 	// 			id: 12,
	// 	// 			dateDebut: "2020-01-01",
	// 	// 			dateFin: "2020-01-01",
	// 	// 			absenceCode: "CONGE_PATERNITE",
	// 	// 			employeeName: "John Doe"
	// 	// 		}
	// 	// 	]


	// 	// 	mock.onPost('https://lit-citadel-53781.herokuapp.com/https://test-technique-front.vercel.app/api/absences').reply(200, {
	// 	// 		response: {
	// 	// 			id: 15,
	// 	// 			dateDebut: "2022-01-01",
	// 	// 			dateFin: "2022-01-01",
	// 	// 			absenceCode: "CONGE_PATERNITE",
	// 	// 			employeeName: "John Doey"
	// 	// 		}
	// 	// 	});



	// 	// 	await store.dispatch(absencesActions.createAbsence(response)).then(() => {
	// 	// 		const expectedActions = [
	// 	// 			{
	// 	// 				type: absencesActions.CREATE_ABSENCE, payload: {
	// 	// 					id: 15,
	// 	// 					dateDebut: "2022-01-01",
	// 	// 					dateFin: "2022-01-01",
	// 	// 					absenceCode: "CONGE_PATERNITE",
	// 	// 					employeeName: "John Doey"
	// 	// 				}
	// 	// 			}
	// 	// 		]

	// 	// 		expect(store.getActions()).toEqual(expectedActions)
	// 	// 	})
	// 	// })
	// })
	// // 
// })