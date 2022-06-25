import React, { useState } from 'react';
import { useDispatch } from "react-redux";

import { getAbsences, modifyAbsence } from "../redux/absences.actions";

import PropTypes from 'prop-types';

const EditAbsenceModale = ({ employee, dateDebut, dateFin, type, id, editAbsenceModale, setEditAbsenceModale }) => {

	const dispatch = useDispatch();

	// States for the values of the inputs to the edit absence modale
	const [newEmployee, setNewEmployee] = useState(employee);
	const [newDateDebut, setNewDateDebut] = useState(dateDebut);
	const [newDateFin, setNewDateFin] = useState(dateFin);
	const [newType, setNewType] = useState(type);

	// State to show or no an error if the absence type input value is wrong
	const [showError, setShowError] = useState(false);
	// Convert the new dates to iso String format to store on the api
	const convertedNewDateDebut = new Date(newDateDebut).toISOString();
	const convertedNewDateFin = new Date(newDateFin).toISOString();

	// Function to update the absence on the database
	const handleModifyAbsence = () => {

		const data = {
			dateDebut: convertedNewDateDebut,
			dateFin: convertedNewDateFin,
			absenceCode: newType,
			employeeName: newEmployee
		}
		setShowError(false);
		
		if(newType !== "CONGE_MATERNITE" &&
			newType !== "CONGE_PATERNITE"&&
			newType !== "CONGE_PAYES" &&
			newType !== "CONGE_SANS_SOLDE"&&
			newType !== "REDUCTION_DU_TEMPS_DE_TRAVAIL") {
				setShowError(true);
		} else {
			setShowError(false);
			dispatch(modifyAbsence(id, data))
			setEditAbsenceModale(false);
			dispatch(getAbsences());
		}
	}

	return (
		<div className={`absence__update ${editAbsenceModale ? "visible" : "hidden"}`}
			id="absenceUpdate">

			<label htmlFor="employee">Employé</label>
			<input type="text"
				id="employee"
				name="employee"
				onChange={(e) => setNewEmployee(e.target.value)}
				value={newEmployee}
			/>

			<label htmlFor="type">Type de congé
				<span id="interrogation"
					title="CONGE_MATERNITE  CONGE_PATERNITE  CONGE_PAYE  CONGE_SANS_SOLDE  REDUCTION_DU_TEMPS_DE_TRAVAIL">
					?
				</span>
			</label>
			<input type="text"
				id="type"
				name="type"
				onChange={(e) => setNewType(e.target.value)}
				value={newType}
			/>
			{showError && <p className="error">Veuillez entrer un type de congé valide</p>}

			<label htmlFor="dateDebut">Nouvelle date de début</label>
			<input type="date"
				id="dateDebut"
				name="dateDebut"
				onChange={(e) => setNewDateDebut(e.target.value)}
				value={newDateDebut}
			/>

			<label htmlFor="dateFin">Nouvelle date de fin</label>
			<input type="date"
				id="dateFin"
				name="dateFin"
				onChange={(e) => setNewDateFin(e.target.value)}
				value={newDateFin}
			/>

			<button onClick={handleModifyAbsence} >Valider modifications</button>

		</div>
			
	)
}

EditAbsenceModale.propTypes = {
	/**
	 * The name and surname of the employee
	 */
	employee: PropTypes.string.isRequired,
	/**
	 * The starting date of the absence
	 */
	dateDebut: PropTypes.string.isRequired,
	/**
	 * The end date of the absence
	 */
	dateFin: PropTypes.string.isRequired,
	/**
	 * The type of absence
	 */
	type: PropTypes.string.isRequired,
	/**
	 * The id of the absence
	 */
	id: PropTypes.number.isRequired,
	/**
	 * Boolean state to show or no the edit absence modale
	 */
	editAbsenceModale: PropTypes.bool.isRequired,
	/**
	 * Function to set the edit absence modale on true or false
	 */
	setEditAbsenceModale: PropTypes.func.isRequired
}

export default EditAbsenceModale