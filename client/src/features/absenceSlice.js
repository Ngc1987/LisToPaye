import {  createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import absencesService from "../services/absences.service";

const initialState = [];

export const getAbsences = createAsyncThunk(
	"absences/getAbsences",
	async () => {
		const res = await absencesService.getAbsences();
		console.log(res)
		return res.data
	}
)
// export const getAbsence = createAsyncThunk(
// 	"absences/getAbsence",
// 	async (id) => {
// 		const res = await absencesService.getAbsence(id);
// 		return res.data
// 	}
// )


export const absenceSlice = createSlice({
	name: "absences",
	initialState: {},

	extraReducers(builder) {
		builder.addCase(getAbsences.pending, (state, action) => {
			state.status = "loading"
		})
		.addCase(getAbsences.fulfilled, (state, action) => {
			return action.payload
		})
		.addCase(getAbsences.rejected, (state, action) => {
			state.status = "failed"
		})

		// [getAbsence.pending] : (state, action) => {
		// 	state.status = "loading"
		// },
		// [getAbsence.fulfilled] : (state, {payload}) => {
		// 	state.absence.push(payload)
		// 	state.status = "success"
		// },
		// [getAbsence.rejected] : (state, action) => {
		// 	state.status = "failed"
		// },
	}
})



// export const store = configureStore({
// 	reducer: {
// 		absences: absenceSlice.reducer
// 	}
// })

// export const { getAbsences, getAbsence, createAbsence, modifyAbsence, deleteAbsence, getAbsencesTypes, resetAbsences } = absenceSlice.actions;
export const selectAllAbsences = state => state.absences
export default absenceSlice.reducer;