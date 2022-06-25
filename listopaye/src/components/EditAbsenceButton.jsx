import React, { useEffect } from 'react';

import PropTypes from 'prop-types';

const EditAbsenceButton = ({ setEditAbsenceModale }) => {

	useEffect(() => {
		function closeEditModale(e) {
			// Close the edit modale when click outside of it
			if (e.target.parentElement.className !== "absence__update visible" && e.target.className !== "absence__update visible" && e.target.id !== "editImg") {
				setEditAbsenceModale(false);
			}

		}
		window.addEventListener("click", closeEditModale)

		return () => window.removeEventListener("click", closeEditModale)
	})

	return (
		<div className="edit" id="edit" onClick={() => setEditAbsenceModale(true)} >
			<img id="editImg" src={process.env.PUBLIC_URL + "/assets/edit.svg"} alt="" title="Modifier absence" />
		</div>
	)
}

EditAbsenceButton.propTypes = {
	/**
	 * Function to change if show or no the edit absence modale
	 */
	setEditAbsenceModale: PropTypes.func.isRequired
}


export default EditAbsenceButton;