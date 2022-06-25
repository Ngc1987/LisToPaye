import { GET_ABSENCES, GET_ABSENCE, CREATE_ABSENCE, MODIFY_ABSENCE, DELETE_ABSENCE, GET_ABSENCE_TYPES, RESET_ABSENCES } from '../actions/absences.actions';

const initialState = {absences: {}};

export default function absencesReducer(state = initialState, action) {
	switch (action.type) {
		case GET_ABSENCES:
			return {
				...state,
				absences: action.payload
			}

		case CREATE_ABSENCE:
			return {
				...state,
				absences: [action.payload, ...state.absences]
			}

		case MODIFY_ABSENCE:
			return state.map((absence) => {
				return {
					...absence,
					dateDebut: action.payload.dateDebut,
					dateFin: action.payload.dateFin,
					absenceCode: action.payload.absenceCode,
					employeeName: action.payload.employeeName,
				}
			})


		default:
			return state;
	}
}