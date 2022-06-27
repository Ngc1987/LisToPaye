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

export const getAbsence = (id) => {
	return (dispatch) => {
		axios({
			method: "get",
			url: `https://lit-citadel-53781.herokuapp.com/https://test-technique-front.vercel.app/api/absences/${id}`
		})
			.then((res) => {
				dispatch({
					type: GET_ABSENCE,
					payload: res.data
				});
			})
			.catch((err) => {
				console.log(err);
			});
	};
}

export const createAbsence = (data) => {
	console.log(data)
	return (dispatch) => {
		axios.post(`https://lit-citadel-53781.herokuapp.com/https://test-technique-front.vercel.app/api/absences`, data)
			.then((res) => {
				dispatch({ type: CREATE_ABSENCE, payload: data })
			})
			.catch((err) => console.log(err))
	}
}
export const modifyAbsence = (id, data) => {

	console.log(id, data)
	return (dispatch) => {
		axios.put(`https://lit-citadel-53781.herokuapp.com/https://test-technique-front.vercel.app/api/absences/${id}`, data)
			.then((res) => {
				dispatch({ type: MODIFY_ABSENCE, payload: { data, id } })
				// console.log(res)
			})
			.catch((err) => console.log(err))
	}
}

export const deleteAbsence = (id) => {
	return (dispatch) => {
		axios.delete(`https://lit-citadel-53781.herokuapp.com/https://test-technique-front.vercel.app/api/absences/${id}`)
			.then((res) => {
				dispatch({ type: DELETE_ABSENCE, payload: id });
			})
			.catch((err) => console.log(err));
	};
}

export const getAbsencesTypes = () => {
	return (dispatch) => {
		axios({
			method: "get",
			url: "https://lit-citadel-53781.herokuapp.com/https://test-technique-front.vercel.app/api/type-absences"
		})
			.then((res) => {
				dispatch({
					type: GET_ABSENCE_TYPES,
					payload: res.data
				});
			})
			.catch((err) => {
				console.log(err);
			});
	}
}

export const resetAbsences = () => {
	return (dispatch) => {
		axios({
			method: "get",
			url: "https://lit-citadel-53781.herokuapp.com/https://test-technique-front.vercel.app/api/reset-data"
		})
			.then((res) => {
				console.log(res)
				dispatch({ type: RESET_ABSENCES})
			})
			.then(() => dispatch(getAbsences()))
			.catch((err) => {
				console.log(err);
			});
	}
}