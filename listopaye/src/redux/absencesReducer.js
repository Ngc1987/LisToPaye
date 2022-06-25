import { GET_ABSENCES, GET_ABSENCE, CREATE_ABSENCE, MODIFY_ABSENCE, DELETE_ABSENCE, GET_ABSENCE_TYPES, RESET_ABSENCES } from './absences.actions';

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
			const newAbsencesState =  state.absences.map((absence) => {
				if(absence.id === action.payload.id) {
					return {
						...absence,
						dateDebut: action.payload.data.dateDebut,
						dateFin: action.payload.data.dateFin,
						absenceCode: action.payload.data.absenceCode,
						employeeName: action.payload.data.employeeName,
					}
				}return absence
			})
			return {
				...state,
				absences: newAbsencesState
			}

		case DELETE_ABSENCE:
			return {
				...state,
				absences: state.absences.filter((absence) => absence.id !== action.payload)
			}

		default:
			return state;
	}
}