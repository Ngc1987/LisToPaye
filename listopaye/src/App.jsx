import Header from "./components/Header";
import AbsencesList from "./components/AbsencesList";
import ResetButton from "./components/ResetButton";
import useWindowSize from './hooks/useWindowSize';

function App() {

	const dimensions = useWindowSize();

	return (
		<div className="App" data-testid="app">
		{/* <div className="background">
			<img src={process.env.PUBLIC_URL + "/assets/calendar.webp"} alt="" />
		</div> */}

			<Header />
			{dimensions.width > 639 ?
				<>
					<AbsencesList />
					<ResetButton/>
				</>
				:
				<h2 id="smallScreenMsg" >Veuillez mettre votre appareil en mode paysage, ou utiliser un écran de 640 pixels minimum de large afin de profiter de ce magnifique gestionnaire d'absences :) </h2>
			}
		</div>
	);
}

export default App;
