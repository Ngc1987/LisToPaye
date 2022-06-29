import React, { useState } from 'react';

import EditAbsenceButton from "./EditAbsenceButton";
import DeleteAbsenceButton from "./DeleteAbsenceButton";
import EditAbsenceModale from "./EditAbsenceModale";
import DeleteAbsenceModale from './DeleteAbsenceModale';

import { dateParser } from './../utils/dateParser';

import PropTypes from 'prop-types';

const Absence = ({ employee, dateDebut, dateFin, type, id }) => {

	// States to show or no the edit and delete absence modales
	const [editAbsenceModale, setEditAbsenceModale] = useState(false);
	const [deleteAbsenceModale, setDeleteAbsenceModale] = useState(false);

	console.log(employee)
	return (
		<article className="absence" data-testid="absence" >

			<div className="absence__items">
				<div className="absence__employee">{employee}</div>
				<div className="absence__type">{type}</div>
				<div className="absence__startDate">{dateParser(dateDebut).slice(0, -10)}</div>
				<div className="absence__endDate">{dateParser(dateFin).slice(0, -10)}</div>
			</div>

			<div className="absence__actions">
				<EditAbsenceButton setEditAbsenceModale={setEditAbsenceModale} />
				<DeleteAbsenceButton setDeleteAbsenceModale={setDeleteAbsenceModale} />
			</div>

			{editAbsenceModale &&
				<EditAbsenceModale setEditAbsenceModale={setEditAbsenceModale}
									employee={employee}
									dateDebut={dateDebut}
									dateFin={dateFin}
									type={type}
									id={id}
								   />
			}

			{deleteAbsenceModale &&
				<DeleteAbsenceModale setDeleteAbsenceModale={setDeleteAbsenceModale}
									id={id}
				/>
			}

		</article>
	)
}

Absence.propTypes = {
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
	id: PropTypes.number
}

export default Absence;