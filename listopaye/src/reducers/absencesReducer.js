import { GET_ABSENCES, GET_ABSENCE, CREATE_ABSENCE, MODIFY_ABSENCE, DELETE_ABSENCE, GET_ABSENCE_TYPES, RESET_ABSENCES} from '../actions/absences.actions';

const initialState = {};

export default function absencesReducer(state = initialState, action) {
	switch(action.type) {
		case GET_ABSENCES:
			return action.payload
			
		default:
			return state;
	}
}