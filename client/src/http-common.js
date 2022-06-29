import axios from "axios";
export default axios.create({
	baseURL: "https://lit-citadel-53781.herokuapp.com/https://test-technique-front.vercel.app/api",
	headers: {
		"Content-type": "application/json"
	}
});