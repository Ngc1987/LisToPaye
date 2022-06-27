import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

const NewAbsenceModale = ({ handleRegisterAbsence, setNewEmployee, setNewDateDebut, setNewDateFin, setNewType, setShowNewAbsence, showError }) => {

	useEffect(() => {
		// Close the edit modale when click outside of it
		function closeNewAbsenceModale(e) {
			if (e.target.parentElement.className !== "absences__add-modale modale" && e.target.className !== "absences__add-modale modale" && e.target.id !== "addAbsenceButton" && e.target.id !== "interrogation") {
				setShowNewAbsence(false);
			}
		}

		window.addEventListener("click", closeNewAbsenceModale)
		return () => window.removeEventListener("click", closeNewAbsenceModale)
	})

	return (

		<form className="absences__add-modale modale"
			onSubmit={handleRegisterAbsence}
					>

		<h2>Nouvelle absence</h2>

			<label htmlFor="employee">Employé</label>
			<input type="text"
					id="employee"
					name="employee"
					onChange={(e) => setNewEmployee(e.target.value)} />

			<label htmlFor="type">Type de congé 
				<span id="interrogation"
						title="CONGE_MATERNITE  CONGE_PATERNITE  CONGE_PAYE  CONGE_SANS_SOLDE  REDUCTION_DU_TEMPS_DE_TRAVAIL">
					?
				</span>
			</label>

			<input type="text"
					id="type"
					name="type"
					title="CONGE_MATERNITE, CONGE_PATERNITE, CONGE_PAYE, CONGE_SANS_SOLDE, REDUCTION_DU_TEMPS_DE_TRAVAIL"
					onChange={(e) => setNewType(e.target.value)}
				/>

			{showError && <p className="error">Veuillez entrer un type de congé valide</p>}

			<label htmlFor="dateDebut">Employé</label>
			<input type="date"
					id="dateDebut"
					name="dateDebut"
					onChange={(e) => setNewDateDebut(e.target.value)}
				/>

			<label htmlFor="DateFin">Employé</label>
			<input type="date"
					id="DateFin"
					name="DateFin"
					onChange={(e) => setNewDateFin(e.target.value)}
				/>

			<button type="submit">Enregistrer absence</button>

		</form>
	)
}

NewAbsenceModale.propTypes = {
	/**
	 * State to show the modale to create a new absence
	 */
	setShowNewAbsence: PropTypes.func.isRequired,
	/**
	 * The state to register the employee name value
	 */
	setNewEmployee: PropTypes.func.isRequired,
	/**
	 * The state to register the absence staring date value
	 */
	setNewDateDebut: PropTypes.func.isRequired,
	/**
	 * The state to register the absence end date value
	 */
	setNewDateFin: PropTypes.func.isRequired,
	/**
	 * The state to register the absence type value
	 */
	setNewType: PropTypes.func.isRequired,
	/**
	 * Function to create a new absence
	 */
	handleRegisterAbsence: PropTypes.func.isRequired,
	/**
	 * Boolean to show or no the error message for the absence type input
	 */
	showError: PropTypes.bool.isRequired,
}

export default NewAbsenceModale;