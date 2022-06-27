import React, { useEffect } from 'react';

import PropTypes from 'prop-types';

const DeleteAbsenceButton = ({ setDeleteAbsenceModale }) => {

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

	return (
		<div className="delete" 
			onClick={() => setDeleteAbsenceModale(true)}
			data-testid="deleteButton" >
			<img id="deleteImg" src={process.env.PUBLIC_URL + "/assets/trash.svg"} alt="" title="Supprimer absence" />
		</div>
	)
}

DeleteAbsenceButton.propTypes = {
	/**
	 * Function to change if show or no the delete absence modale
	 */
	setDeleteAbsenceModale: PropTypes.func.isRequired
}

export default DeleteAbsenceButton;