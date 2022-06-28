import React, { useEffect, useState } from 'react';

import AbsencesTypes from './AbsencesTypes';

import PropTypes from 'prop-types';

const NewAbsenceModale = ({ handleRegisterAbsence, setNewEmployee, setNewDateDebut, setNewDateFin, setNewType, setShowNewAbsence, showError }) => {

	// State to show or no an the absences types
	const [showAbsencesTypes, setShowAbsencesTypes] = useState(false);

	useEffect(() => {
		// Close the edit modale when click outside of it
		function closeNewAbsenceModale(e) {
			if (e.target.parentElement.className !== "absences__add-modale modale" && e.target.parentElement.className !== "absencesTypes showAbsences" && e.target.parentElement.className !== "absencesTypes hideAbsences" && e.target.className !== "absences__add-modale modale" && e.target.id !== "addAbsenceButton" && e.target.id !== "interrogation") {
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

			<label htmlFor="type"
				id="absencesTypeLabel"
				onClick={() => setShowAbsencesTypes(!showAbsencesTypes)}>
				Type de congé ?
			</label>
			<AbsencesTypes className={showAbsencesTypes ? "showAbsences" : "hideAbsences"} />

			<input type="text"
					id="type"
					name="type"
					title="CONGE_MATERNITE, CONGE_PATERNITE, CONGE_PAYE, CONGE_SANS_SOLDE, REDUCTION_DU_TEMPS_DE_TRAVAIL"
					onChange={(e) => setNewType(e.target.value)}
				/>

			{showError && <p className="error">Veuillez entrer un type de congé valide</p>}

			<label htmlFor="dateDebut">Date de début</label>
			<input type="date"
					id="dateDebut"
					name="dateDebut"
					onChange={(e) => setNewDateDebut(e.target.value)}
				/>

			<label htmlFor="DateFin">Date de fin</label>
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