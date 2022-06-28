import React from 'react';

import PropTypes from 'prop-types';

const DeleteAbsenceButton = ({ setDeleteAbsenceModale }) => {

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