import React, {useEffect} from 'react'
import { useState } from "react";
import { dateParser } from './../utils/dateParser';

const Absence = ({employee, dateDebut, dateFin, type, id}) => {

	

	const [editAbsence, setEditAbsence] = useState(false);

	const [newEmployee, setNewEmployee] = useState(employee);
	const [newDateDebut, setNewDateDebut] = useState(dateDebut);
	const [newDateFin, setNewDateFin] = useState(dateFin);
	const [newType, setNewType] = useState(type);

	
	const convertedNewDateDebut = new Date(newDateDebut).toISOString();
	const convertedNewDateFin = new Date(newDateFin).toISOString();
	console.log(editAbsence)

	useEffect(() => {
		function closeInput(e) {
			console.log(e.target.className)
			if (e.target.parentElement.className !== "absence__update visible" && e.target.className !== "absence__update visible" && e.target.id !== "editImg") {
				setEditAbsence(false);
			}

		}

		window.addEventListener("click", closeInput)

		return () => window.removeEventListener("click", closeInput)
	})

	return (
		<article className="absence" >
			<div className="absence__items">
				<div className="absence__employee"><p>{employee}</p></div>
				<div className="absence__type"><p>{type}</p></div>
				<div className="absence__startDate"><p>{dateParser(dateDebut).slice(0, -10)}</p></div>
				<div className="absence__endDate"><p>{dateParser(dateFin).slice(0, -10)}</p></div>
			</div>
			<div className="absence__actions">
				<div className="edit" id="edit" onClick={() => setEditAbsence(true)} >
					<img id="editImg" src={process.env.PUBLIC_URL + "/assets/edit.svg"} alt="" title="Modifier absence" />
				</div>
				<div className="delete" >
					<img src={process.env.PUBLIC_URL + "/assets/trash.svg"} alt="" title="Supprimer absence" />
				</div>
			</div>
			{editAbsence &&
				<div className={`absence__update ${editAbsence ? "visible" : "hidden"}`} id="absenceUpdate">
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
				</div>
			}
			
		</article>
	)
}

export default Absence