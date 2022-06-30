import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import absencesService from "../services/absences.service";

export const getAbsencesTypes = createAsyncThunk(
	"absencesTypes/getAbsencesTypes",
	async () => {
		const res = await absencesService.getAbsencesTypes();
		// console.log(res)
		return res.data
	}
)


export const absenceTypesSlice = createSlice({
	name: "absenceTypes",
	initialState: {
		absenceTypes: [],
		loading: false,
		status: ""
	},

	extraReducers(builder) {
		builder.addCase(getAbsencesTypes.pending, (state, action) => {
			state.status = "loading"
		})
			.addCase(getAbsencesTypes.fulfilled, (state, action) => {
				return {
					...state,
					absenceTypes: action.payload,
					status: "success"
				}
			})
			.addCase(getAbsencesTypes.rejected, (state, action) => {
				state.status = "failed"
			})

	}
})

export const selectAllAbsencesTypes = state => state.absenceTypes.absenceTypes
// console.log(selectAllAbsencesTypes)
export default absenceTypesSlice.reducer;

