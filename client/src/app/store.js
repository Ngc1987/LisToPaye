import { configureStore } from "@reduxjs/toolkit";
import  absenceReducer from "../features/absenceSlice.js";
import  absenceTypesReducer from "../features/absencesTypesSlice.js";

const reducer = {
	absences: absenceReducer,
	absenceTypes: absenceTypesReducer
}

const store = configureStore({
	reducer: reducer,
	devTools: true
})

export default store;