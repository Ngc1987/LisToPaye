import Header from "./components/Header";
import Absences from "./components/Absences";
import { useEffect } from "react";
import axios from "axios";

function App() {

	return (
		<div className="App">
			<Header />
			<Absences />
		</div>
	);
}

export default App;
