import Header from "./components/Header";
import AbsencesList from "./components/AbsencesList";
import ResetButton from "./components/ResetButton";
import useWindowSize from './hooks/useWindowSize';
import { useEffect } from 'react';
import { useAppDispatch } from "./redux/redux-hooks";
import { getAbsences, getAbsence } from "./features/absenceSlice";

function App() {

	const dimensions = useWindowSize();

	const dispatch = useAppDispatch()

	useEffect(() => {
		dispatch(getAbsences())
		// dispatch(getAbsence(125))
	}, [dispatch])

	return (
		<div className="App" data-testid="app">

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
