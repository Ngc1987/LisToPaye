import React from 'react';

import PropTypes from 'prop-types';

const EditAbsenceButton = ({ setEditAbsenceModale }) => {

	return (

		<div className="edit" 
			id="edit" 
			onClick={() => setEditAbsenceModale(true)}
			data-testid="editButton" >

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