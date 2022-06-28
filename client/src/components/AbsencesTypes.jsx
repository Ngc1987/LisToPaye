import React from 'react';

import { useAppSelector } from './../redux/redux-hooks';

import PropTypes from 'prop-types';

const AbsencesTypes = ({className}) => {

	const absencesTypes = useAppSelector(state => state.absencesTypes);

	return (
		<div className={`absencesTypes ${className}`}
			data-testid="absencesTypes" >
			{absencesTypes && absencesTypes.map((absenceType, i) => {
				return (
					<p key={i} >{absenceType.code}</p>
				)
			})}
		</div>
	)
}

AbsencesTypes.propTypes = {
	/**
	 * The second className of the component to be applied (showAbsences or hideAbsences)
	 */
	className: PropTypes.string.isRequired
}

export default AbsencesTypes;