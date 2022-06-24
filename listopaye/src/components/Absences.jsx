import React from 'react'
import { useSelector } from "react-redux";
import Absence from "./Absence";
import { isEmpty } from './../utils/isEmpty';

const Absences = () => {

	const absences = useSelector(state => state);

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
					</div>

					{!isEmpty(absences[0]) && absences.map((absence) => {
						return <Absence key={absence.id} 
										employee={absence.employeeName}
										dateDebut={absence.dateDebut}
										dateFin={absence.dateFin}
										type={absence.type.libelle}
										id={absence.id}
										 />
					})}
				</div>
			</section>
		</>

	)
}

export default Absences;