import React, { useEffect } from 'react';
import { useDispatch } from "react-redux";

import { getAbsences, deleteAbsence } from "../redux/absences.actions";

import PropTypes from 'prop-types';

const DeleteAbsenceModale = ({ setDeleteAbsenceModale, id }) => {

	const dispatch = useDispatch();

	useEffect(() => {
		
		function closeEditModale(e) {
			// Close the edit modale when click outside of it
			if (e.target.parentElement.className !== "absence__delete modale" && e.target.className !== "absence__delete modale" && e.target.id !== "deleteImg" && e.target.id !== "interrogation") {
				setDeleteAbsenceModale(false);
			}
		}

		window.addEventListener("click", closeEditModale)
		return () => window.removeEventListener("click", closeEditModale)
	})

	// Function to delete the absence of the database
	const handleDeleteAbsence = () => {
		dispatch(deleteAbsence(id));
		setDeleteAbsenceModale(false);
		dispatch(getAbsences());
	}

	return (
		<div className="absence__delete modale" data-testid="deleteModale" >
			<p>Voulez-vous vraiment supprimer cette absence ?</p>
			<button onClick={handleDeleteAbsence} data-testid="deleteModaleButton" >Confirmer</button>
		</div>
	)
}

DeleteAbsenceModale.propTypes = {
	/**
	 * Function to show or no the delete absence modale
	 */
	setDeleteAbsenceModale: PropTypes.func.isRequired,
	/**
	 * Id of the absence to delete
	 */
	id: PropTypes.number.isRequired
}

export default DeleteAbsenceModale;