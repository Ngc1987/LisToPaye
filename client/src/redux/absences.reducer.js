import { GET_ABSENCES, GET_ABSENCE, CREATE_ABSENCE, MODIFY_ABSENCE, DELETE_ABSENCE, GET_ABSENCE_TYPES, RESET_ABSENCES } from './absences.actions.js';

export const initialState = {
	absences: {},
	absence: {},
	absencesTypes: {}
};

export default function absencesReducer(state = initialState, action) {
	switch (action.type) {
		case GET_ABSENCES:
			return {
				...state,
				absences: action.payload
			}
		case GET_ABSENCES:
			return {
				...state,
				absences: action.payload
			}
		case GET_ABSENCES:
			return {
				...state,
				absences: action.payload
			}
		case GET_ABSENCES:
			return {
				...state,
				absences: action.payload
			}
		case GET_ABSENCES:
			return {
				...state,
				absences: action.payload
			}
		case GET_ABSENCES:
			return {
				...state,
				absences: action.payload
			}

		case CREATE_ABSENCE:
			return {
				...state,
				absences: [...state.absences, action.payload]
			}

		case GET_ABSENCE:
			return {
				...state,
				absence: state.absences.find((absence) => absence.id === action.payload.id)
			}

		case DELETE_ABSENCE:
			return {
				...state,
				absences: state.absences.filter((absence) => absence.id !== action.payload)
			}

		case MODIFY_ABSENCE:
			const newAbsencesState = state.absences.map((absence) => {
				if (absence.id === action.payload.id) {
					return {
						...absence,
						dateDebut: action.payload.data.dateDebut,
						dateFin: action.payload.data.dateFin,
						absenceCode: action.payload.data.absenceCode,
						employeeName: action.payload.data.employeeName,
					}
				} return absence
			})
			return {
				...state,
				absences: newAbsencesState
			}

		case GET_ABSENCE_TYPES:
			return {
				...state,
				absencesTypes: action.payload
			}

		case RESET_ABSENCES:
			return {
				...state,
				absences: {},
				absence: {},
				absencesTypes: {}
			}

		default:
			return state;
	}
}

// export function getAbsencess(state = initialState) {
// 	return state
// }