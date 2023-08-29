import React, { useState } from "react";
import { useSubjectContext } from "../hooks/useSubjectContext";
import { useAuthContext } from "../hooks/useAuthContext";
import EditPopup from "./EditPopup"; // Import the EditPopup component

const SubjectDetails = ({ subject }) => {
  const { dispatch } = useSubjectContext();
  const { user } = useAuthContext();

  const [editing, setEditing] = useState(false);
  const [editPopupOpen, setEditPopupOpen] = useState(false); // State for edit pop-up
  const [editedSubject, setEditedSubject] = useState({
    titelSubject: subject.titelSubject,
    passingGrade: subject.passingGrade,
    studentsGrade: subject.studentsGrade,
  });

  const handleDeleteClick = async () => {
    if (!user) {
      return;
    }

    const response = await fetch("/api/subjects/" + subject._id, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    });
    const json = await response.json();

    if (response.ok) {
      dispatch({ type: "DELETE_SUBJECTS", payload: { _id: subject._id } });
    }
  };

  const handleEditClick = () => {
    setEditing(true);
    setEditPopupOpen(true); // Open the edit pop-up
  };

  const handleSaveClick = async () => {
    setEditing(false);
    setEditPopupOpen(false); // Close the edit pop-up
    // You can perform save actions here
  };

  const handleCancelClick = () => {
    setEditing(false);
    setEditPopupOpen(false); // Close the edit pop-up
    // You can handle cancellation here
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEditedSubject((prevEditedSubject) => ({
      ...prevEditedSubject,
      [name]: value,
    }));
  };

  return (
    <div className="subject-details">
      <table>
        <thead>
          <tr>
            <th>Student Name</th>
            <th>Subject</th>
            <th>Passing Grade</th>
            <th>Students Grade</th>
            <th>
              <button className="form_button_delete" onClick={handleDeleteClick}>
                Delete
              </button>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{subject.username}</td>
            {editing ? (
              <>
                <td>
                  <input
                    type="text"
                    name="titelSubject"
                    value={editedSubject.titelSubject}
                    onChange={handleInputChange}
                  />
                </td>
                <td>
                  <input
                    type="number"
                    name="passingGrade"
                    value={editedSubject.passingGrade}
                    onChange={handleInputChange}
                  />
                </td>
                <td>
                  <input
                    type="number"
                    name="studentsGrade"
                    value={editedSubject.studentsGrade}
                    onChange={handleInputChange}
                  />
                </td>
              </>
            ) : (
              <>
                <td>{subject.titelSubject}</td>
                <td>{subject.passingGrade} %</td>
                <td>{subject.studentsGrade} %</td>
                <td>
                  <button className="form_button_edit" onClick={handleEditClick}>
                    Edit
                  </button>
                </td>
              </>
            )}
          </tr>
        </tbody>
      </table>
      {editPopupOpen && ( // Render EditPopup when editPopupOpen is true
        <EditPopup
          editedSubject={editedSubject}
          handleInputChange={handleInputChange}
          handleSaveClick={handleSaveClick}
          handleCancelClick={handleCancelClick}
        />
      )}
    </div>
  );
};

export default SubjectDetails;
