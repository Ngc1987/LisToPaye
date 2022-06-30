import http from "../http-common";
class AbsencesService {
	getAbsences() {
		return http.get("/absences");
	}
	getAbsence(id) {
		return http.get(`/absences/${id}`);
	}
	createAbsence(data) {
		return http.post(`/absences`, data);
	}
	deleteAbsence(id) {
		return http.delete(`/absences/${id}`);
	}
	modifyAbsence(data) {
		console.log(data)
		return http.put(`/absences/${data.id}`, data);
	}
	getAbsencesTypes() {
		return http.get(`/type-absences`);
	}
	resetAbsences() {
		return http.get(`/reset-data`);
	}
}
export default new AbsencesService();