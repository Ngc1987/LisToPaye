import React from 'react';
import { useDispatch } from "react-redux";

import PropTypes from 'prop-types';

import { getAbsences, deleteAbsence } from "../redux/absences.actions";

const DeleteAbsenceModale = ({ setDeleteAbsenceModale, id }) => {

	const dispatch = useDispatch();

	// Function to delete the absence of the database
	const handleDeleteAbsence = () => {
		dispatch(deleteAbsence(id));
		setDeleteAbsenceModale(false);
		dispatch(getAbsences());
	}

	return (
		<div className="absence__delete modale">
			<p>Voulez-vous vraiment supprimer cette absence ?</p>
			<button onClick={handleDeleteAbsence} >Confirmer</button>
		</div>
	)
}

DeleteAbsenceModale.propTypes = {
	/**
	 * Function to show or no the delete absence modale
	 */
	setDeleteAbsenceModale: PropTypes.func.isRequired
}

export default DeleteAbsenceModale;