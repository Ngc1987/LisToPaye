import React, { useEffect } from 'react'

const DeleteAbsence = ({ setDeleteAbsenceModale }) => {

	useEffect(() => {
		function closeEditModale(e) {
			// Close the edit modale when click outside of it
			if (e.target.parentElement.className !== "absence__update visible" && e.target.className !== "absence__update visible" && e.target.id !== "deleteImg") {
				setDeleteAbsenceModale(false);
			}

		}
		window.addEventListener("click", closeEditModale)

		return () => window.removeEventListener("click", closeEditModale)
	})

	return (
		<div className="delete" onClick={() => setDeleteAbsenceModale(true)} >
			<img id="deleteImg" src={process.env.PUBLIC_URL + "/assets/trash.svg"} alt="" title="Supprimer absence" />
		</div>
	)
}

export default DeleteAbsence;