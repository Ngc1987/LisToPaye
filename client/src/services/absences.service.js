import http from "../http-common";
class AbsencesService {
	getAbsences() {
		return http.get("/absences");
	}
	createAbsence() {
		return http.post(`/absences`);
	}
	getAbsence(id) {
		return http.get(`/absences/${id}`);
	}
	deleteAbsence(id) {
		return http.delete(`/absences/${id}`);
	}
	modifyAbsence(id, data) {
		return http.put(`/absences/${id}`, data);
	}
	getAbsencesTypes() {
		return http.get(`/type-absences`);
	}
	resetAbsences() {
		return http.get(`/reset-data`);
	}
}
export default new AbsencesService();