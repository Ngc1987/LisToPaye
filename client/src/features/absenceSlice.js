import {  createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import absencesService from "../services/absences.service";

export const getAbsences = createAsyncThunk(
	"absences/getAbsences",
	async () => {
		const res = await absencesService.getAbsences();
		// console.log(res)
		return res.data
	}
)
export const modifyAbsence = createAsyncThunk(
	"absences/modifyAbsence",
	async (data) => {
		console.log(data)
		const res = await absencesService.modifyAbsence(data);
		console.log(res)
		return res.data
	}
)
export const createAbsence = createAsyncThunk(
	"absences/createAbsence",
	async ({employeeName, dateDebut, dateFin, absenceCode}) => {
		// console.log(employeeName, dateDebut, dateFin, absenceCode)
		const res = await absencesService.createAbsence({employeeName, dateDebut, dateFin, absenceCode});
		// console.log(res)
		return res.data
	}
)
export const deleteAbsence = createAsyncThunk(
	"absences/deleteAbsence",
	async ({id}) => {
		const res = await absencesService.deleteAbsence(id);
		console.log(res)
		return res.data
	}
)
export const resetAbsence = createAsyncThunk(
	"absences/resetAbsence",
	async () => {
		const res = await absencesService.resetAbsence();
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
	initialState: {
		absences: [],
		loading: false,
		status: ""
	},

	extraReducers(builder) {
		builder.addCase(getAbsences.pending, (state, action) => {
			state.status = "loading"
		})
		.addCase(getAbsences.fulfilled, (state, action) => {
			return {
				...state,
				absences: action.payload,
				status: "success"
			}
		})
		.addCase(getAbsences.rejected, (state, action) => {
			state.status = "failed"
		})
		.addCase(createAbsence.fulfilled, (state, action) => {
			state.absences.push(action.payload)
		})
		.addCase(modifyAbsence.fulfilled, (state, action) => {
			const index = state.absences.findIndex(absence => absence.id === action.payload.id);
			console.log(index)
			state.absences[index] = {
				...state.absences[index],
				...action.payload.data,
			};
		})
		.addCase(deleteAbsence.fulfilled, (state, action) => {
			let index = state.absences.findIndex(({ id }) => id === action.payload.id);
			state.absences.splice(index, 1);
		})
		.addCase(resetAbsence.fulfilled, (state, action) => {
			state.absences = action.payload;
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
export const selectAllAbsences = state => state.absences.absences
export default absenceSlice.reducer;

// const {reducer} = absenceSlice;

// export default reducer;