import { configureStore } from "@reduxjs/toolkit";
import  absenceReducer from "../features/absenceSlice";

export const store = configureStore({
	reducer: {
		absences: absenceReducer
	}
})