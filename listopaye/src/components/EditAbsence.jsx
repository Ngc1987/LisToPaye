import React, { useEffect } from 'react'

const EditAbsence = ({ setEditAbsenceModale }) => {

	useEffect(() => {
		function closeEditModale(e) {
			// Close the edit modale when click outside of it
			if (e.target.parentElement.className !== "absence__update visible" && e.target.className !== "absence__update visible" && e.target.id !== "editImg") {
				setEditAbsenceModale(false);
			}

		}
		window.addEventListener("click", closeEditModale)

		return () => window.removeEventListener("click", closeEditModale)
	})

	return (
		<div className="edit" id="edit" onClick={() => setEditAbsenceModale(true)} >
			<img id="editImg" src={process.env.PUBLIC_URL + "/assets/edit.svg"} alt="" title="Modifier absence" />
		</div>
	)
}

export default EditAbsence