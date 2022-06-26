import React, {useState} from 'react';
import { resetAbsences } from "../redux/absences.actions";
import { useAppDispatch } from './../redux/redux-hooks';

const ResetButton = () => {

	const [showConfirmModale, setShowConfirmModale] = useState(false);
	const [showConfirmText, setShowConfirmText] = useState(false);

	const dispatch = useAppDispatch()

	const resetDatas = () => {
		dispatch(resetAbsences())
		setShowConfirmText(true)
		setTimeout(() => {
			setShowConfirmModale(false)
			setShowConfirmText(false)
		}, 5000);
	}


	return (
		<>
			<button onClick={() => setShowConfirmModale(true)} className="reset__button" >
				Réinitialiser les données
			</button>

			{showConfirmModale &&
				<div className="reset__confirm modale" >
				
					{!showConfirmText ?
						<>
							<p>Êtes vous sûr(e) ?</p>

							<div className="buttons">
								<button className="reset__confirm__button"
										onClick={resetDatas} >
										Oui
								</button>
								<button className="reset__confirm__button" 
										onClick={() => setShowConfirmModale(false)} >
										Annuler
								</button>
							</div>
						</>
						:
						<p>Les données ont bien <br /> été réinitialisées</p>
					}
				</div>
			}
		</>
	)
}

export default ResetButton;