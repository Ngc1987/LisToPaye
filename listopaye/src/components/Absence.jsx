import React, {useEffect} from 'react'
import { useState } from "react";
import { dateParser } from './../utils/dateParser';
import { getAbsences, deleteAbsence, modifyAbsence } from "../actions/absences.actions";
import { useDispatch } from "react-redux";
import EditAbsence from "./EditAbsence";
import DeleteAbsence from "./DeleteAbsence";

const Absence = ({ employee, dateDebut, dateFin, type, id }) => {

	const dispatch = useDispatch();

	const [editAbsenceModale, setEditAbsenceModale] = useState(false);
	const [deleteAbsenceModale, setDeleteAbsenceModale] = useState(false);

	const [newEmployee, setNewEmployee] = useState(employee);
	const [newDateDebut, setNewDateDebut] = useState(dateDebut);
	const [newDateFin, setNewDateFin] = useState(dateFin);
	const [newType, setNewType] = useState(type);


	const convertedNewDateDebut = new Date(newDateDebut).toISOString();
	const convertedNewDateFin = new Date(newDateFin).toISOString();

	

	const handleModifyAbsence = () => {

		const data = {
			dateDebut: convertedNewDateDebut,
			dateFin: convertedNewDateFin,
			absenceCode: newType,
			employeeName: newEmployee
		}

		dispatch(modifyAbsence(id, data))
		setEditAbsenceModale(false);
		dispatch(getAbsences());
	}

	const handleDeleteAbsence = () => {
		dispatch(deleteAbsence(id));
		setDeleteAbsenceModale(false);
		dispatch(getAbsences());
	}

	return (
		<article className="absence" >
			<div className="absence__items">
				<div className="absence__employee"><p>{employee}</p></div>
				<div className="absence__type"><p>{type}</p></div>
				<div className="absence__startDate"><p>{dateParser(dateDebut).slice(0, -10)}</p></div>
				<div className="absence__endDate"><p>{dateParser(dateFin).slice(0, -10)}</p></div>
			</div>

			<div className="absence__actions">
				<EditAbsence setEditAbsenceModale={setEditAbsenceModale} />
				<DeleteAbsence setDeleteAbsenceModale={setDeleteAbsenceModale} />
			</div>

			{editAbsenceModale &&
				<div className={`absence__update ${editAbsenceModale ? "visible" : "hidden"}`} id="absenceUpdate">
					<label htmlFor="employee">Employé</label>
					<input type="text"
						id="employee"
						name="employee"
						onChange={(e) => setNewEmployee(e.target.value)}
						value={newEmployee}
					/>

					<label htmlFor="type">Type</label>
					<input type="text"
						id="type"
						name="type"
						onChange={(e) => setNewType(e.target.value)}
						value={newType}
					/>

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
			}

			{deleteAbsenceModale && 
				<div className="absence__delete">
					<p>Voulez-vous vraiment supprimer cette absence ?</p>
					<button onClick={handleDeleteAbsence} >Confirmer</button>
				</div>
			}

		</article>
	)
}

export default Absence;