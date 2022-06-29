import { createAsyncThunk } from "@reduxjs/toolkit";

export const getPosts = createAsyncThunk(
	'posts/getPosts',

	async (arg, { dispatch, getState, extra, requestId, signal, rejectWithValue }) => {

		return fetch(
			`https://lit-citadel-53781.herokuapp.com/https://test-technique-front.vercel.app/api/absences`
		).then((res) => {
			if (!res.ok) {

				return rejectWithValue([], "api url not found from");
			}
			return res.json()
		}).catch(error => {

			return rejectWithValue([], error);

		})
	}

)