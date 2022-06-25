import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import Absence from "./Absence";
import { isEmpty } from './../utils/isEmpty';
import { createAbsence, getAbsences } from './../actions/absences.actions';

const Absences = () => {

	const dispatch = useDispatch();
	const absences = useSelector(state => state.absences);

	// const [absences, setAbsences] = useState([]);

	const [showNewAbsence, setShowNewAbsence] = useState(false);

	const [newEmployee, setNewEmployee] = useState(null);
	const [newDateDebut, setNewDateDebut] = useState(null);
	const [newDateFin, setNewDateFin] = useState(null);
	const [newType, setNewType] = useState(null);

	const convertedNewDateDebut = new Date(newDateDebut).toISOString();
	const convertedNewDateFin = new Date(newDateFin).toISOString();

	useEffect(() => {
		function closeInput(e) {
			// Close the edit modale when click outside of it
			if (e.target.parentElement.className !== "absences__add-modale" && e.target.className !== "absences__add-modale" && e.target.id !== "addAbsenceButton") {
				setShowNewAbsence(false);
			}

		}

		// setAbsences(absencesArray)
		window.addEventListener("click", closeInput)

		return () => window.removeEventListener("click", closeInput)
	})

	const handleRegisterAbsence = (e) => {

		e.preventDefault()
		const data = {
			dateDebut: convertedNewDateDebut,
			dateFin: convertedNewDateFin,
			absenceCode: newType,
			employeeName: newEmployee
		}
		dispatch(createAbsence(data));
		setShowNewAbsence(false);
		dispatch(getAbsences());
	}

	console.log(absences)

	return (
		<>
			<h1>Absences</h1>
			<section className="absences">
				<div className="absences-container">
					<div className="absences__title">
						<p>Employé</p>
						<p>Type</p>
						<p>Date début</p>
						<p>Date fin</p>
						<p id="addAbsence" onClick={() => setShowNewAbsence(true)} ><span id="addAbsenceButton">+</span></p>
					</div>

					{absences.length > 0 && absences.map((absence) => {
						return <Absence key={absence.id + 10}
							employee={absence.employeeName}
							dateDebut={absence.dateDebut}
							dateFin={absence.dateFin}
							type={absence.absenceCode}
							id={absence.id}
						/>
					})
					}
				</div>
				{showNewAbsence &&
					<form className="absences__add-modale"
						onSubmit={(e) => handleRegisterAbsence(e)}
					>

						<label htmlFor="employee">Employé</label>
						<input type="text"
							id="employee"
							name="employee"
							onChange={(e) => setNewEmployee(e.target.value)} />

						<label htmlFor="type"
							title="CONGE_MATERNITE, CONGE_PATERNITE, CONGE_PAYE, CONGE_SANS_SOLDE, REDUCTION_DU_TEMPS_DE_TRAVAIL" >Type de congé</label>

						<input type="text"
							id="type"
							name="type"
							title="CONGE_MATERNITE, CONGE_PATERNITE, CONGE_PAYE, CONGE_SANS_SOLDE, REDUCTION_DU_TEMPS_DE_TRAVAIL"
							onChange={(e) => setNewType(e.target.value)}
						/>

						<label htmlFor="dateDebut">Employé</label>
						<input type="date"
							id="dateDebut"
							name="dateDebut"
							onChange={(e) => setNewDateDebut(e.target.value)}
						/>

						<label htmlFor="DateFin">Employé</label>
						<input type="date"
							id="DateFin"
							name="DateFin"
							onChange={(e) => setNewDateFin(e.target.value)}
						/>

						<button type="submit" >Enregistrer absence</button>
					</form>
				}
			</section>
		</>

	)
}

export default Absences;