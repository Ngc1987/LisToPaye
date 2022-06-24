import axios from "axios";

export const GET_ABSENCES = "GET_ABSENCES";
export const GET_ABSENCE = "GET_ABSENCE";
export const CREATE_ABSENCE = "CREATE_ABSENCE";
export const MODIFY_ABSENCE = "MODIFY_ABSENCE";
export const DELETE_ABSENCE = "DELETE_ABSENCE";
export const GET_ABSENCE_TYPES = "GET_ABSENCE_TYPES";
export const RESET_ABSENCES = "RESET_ABSENCES";

export const getAbsences = () => {
	  return (dispatch) => {
		axios({
			method: "get",
			url: "https://lit-citadel-53781.herokuapp.com/https://test-technique-front.vercel.app/api/absences"
		})
		.then((res) => {
			dispatch({
				type: GET_ABSENCES,
				payload: res.data
			});
		})
		.catch((err) => {
			console.log(err);
		});
	};
}