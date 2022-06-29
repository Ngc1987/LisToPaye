import React, { useState } from 'react';

import Absence from "./Absence";
import NewAbsenceModale from './NewAbsenceModale';
import Loader from "./Loader";
import { HiArrowSmDown } from 'react-icons/hi';

import { createAbsence, getAbsences } from '../redux/absences.actions';
import { useAppDispatch, useAppSelector } from "../redux/redux-hooks";
import { selectAllAbsences } from "../features/absenceSlice";

const AbsencesList = () => {

	const dispatch = useAppDispatch();

	const absencess = useAppSelector(selectAllAbsences);
	// const absences = absencess[0]
	const absences = [...absencess]

	console.log(absences)

	// State to set by what type the absences are filtered
	const [sortAbsences, setSortAbsences] = useState("name");

	// State to show or no the new absence modale
	const [showNewAbsence, setShowNewAbsence] = useState(false);

	// State to show or no an error if the absence type input value is wrong
	const [showError, setShowError] = useState(false);

	// States to store the new absence datas
	const [newEmployee, setNewEmployee] = useState(null);
	const [newDateDebut, setNewDateDebut] = useState(null);
	const [newDateFin, setNewDateFin] = useState(null);
	const [newType, setNewType] = useState(null);

	
	// Function to create a new absence on the database
	const handleRegisterAbsence = (e) => {
		// Convert the new dates to iso String format to store on the api
		const convertedNewDateDebut = new Date(newDateDebut).toISOString();
		const convertedNewDateFin = new Date(newDateFin).toISOString();

		e.preventDefault();

		const data = {
			dateDebut: convertedNewDateDebut,
			dateFin: convertedNewDateFin,
			absenceCode: newType,
			employeeName: newEmployee
		}

		
		if (newType !== "CONGE_MATERNITE" &&
			newType !== "CONGE_PATERNITE" &&
			newType !== "CONGE_PAYE" &&
			newType !== "CONGE_SANS_SOLDE" &&
			newType !== "REDUCTION_DU_TEMPS_DE_TRAVAIL") {
			setShowError(true);
		} else {
			setShowError(false);
			dispatch(createAbsence(data));
			setShowNewAbsence(false);
			dispatch(getAbsences());
		}
	}

	return (
		<>
			<h1>Liste des absences</h1>

			<section className="absences">

				<div className="absences-container">

					<div className="absences__title">

						<p>
							<span onClick={() => setSortAbsences("name")} >Employé
								<HiArrowSmDown className="arrow" />
							</span>
						</p>
						<p>
							<span onClick={() => setSortAbsences("type")} >Type
								<HiArrowSmDown className="arrow" />
							</span>
						</p>
						<p>
							<span onClick={() => setSortAbsences("startDate")} >Date début
								<HiArrowSmDown className="arrow" />
							</span>
						</p>
						<p>
							<span onClick={() => setSortAbsences("endDate")} >Date fin
								<HiArrowSmDown className="arrow" />
							</span>
						</p>
						<p id="addAbsence"
							onClick={() => setShowNewAbsence(true)}
						>
							<em id="addAbsenceButton">+</em>
						</p>

					</div>

					{
						absences.length > 0 ? absences.sort((a, b) => {
							if (sortAbsences === "name") {
								return a.employeeName.localeCompare(b.employeeName);
							} else if (sortAbsences === "type") {
								return a.absenceCode.localeCompare(b.absenceCode);
							} else if (sortAbsences === "startDate") {
								return a.dateDebut.localeCompare(b.dateDebut);
							} else if (sortAbsences === "endDate") {
								return a.dateFin.localeCompare(b.dateFin);
							}
							return null
						}).map((absence) => {
							return <Absence key={absence.id + 100}
								employee={absence.employeeName}
								dateDebut={absence.dateDebut}
								dateFin={absence.dateFin}
								type={absence.absenceCode}
								id={absence.id}
							/>
						})
							:
							<Loader />
					}
				</div>

				{showNewAbsence &&
					<NewAbsenceModale handleRegisterAbsence={handleRegisterAbsence}
						setNewEmployee={setNewEmployee}
						setNewDateDebut={setNewDateDebut}
						setNewDateFin={setNewDateFin}
						setNewType={setNewType}
						setShowNewAbsence={setShowNewAbsence}
						showError={showError}
					/>
				}

			</section>
		</>
	)
}

AbsencesList.propTypes = {

}

export default AbsencesList;