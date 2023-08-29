import React, { useState } from "react"; // Import the React library and the useState hook
import { useSubjectContext } from "../hooks/useSubjectContext"; // Import the useSubjectContext custom hook
import { useAuthContext } from "../hooks/useAuthContext"; // Import the useAuthContext custom hook
import EditPopup from "./EditPopup"; // Import the EditPopup component

// Component for displaying subject details
const SubjectDetails = ({ subject }) => {
  const { dispatch } = useSubjectContext(); // Use the useSubjectContext custom hook to get the dispatch function
  const { user } = useAuthContext(); // Use the useAuthContext custom hook to get the user data

  // State for tracking editing mode and edit pop-up visibility
  const [editing, setEditing] = useState(false);
  const [editPopupOpen, setEditPopupOpen] = useState(false);

  // State for tracking edited subject data
  const [editedSubject, setEditedSubject] = useState({
    titelSubject: subject.titelSubject,
    passingGrade: subject.passingGrade,
    studentsGrade: subject.studentsGrade,
  });

  // Handle click event for deleting a subject
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

  // Handle click event for entering editing mode
  const handleEditClick = () => {
    setEditing(true);
    setEditPopupOpen(true); // Open the edit pop-up
  };

  // Handle click event for saving edits
  const handleSaveClick = async () => {
    setEditing(false);
    setEditPopupOpen(false); // Close the edit pop-up
    // You can perform save actions here
  };

  // Handle click event for cancelling edits
  const handleCancelClick = () => {
    setEditing(false);
    setEditPopupOpen(false); // Close the edit pop-up
    // You can handle cancellation here
  };

  // Handle input change event for editing fields
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
        {/* Table header */}
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
        {/* Table body */}
        <tbody>
          <tr>
            <td>{subject.username}</td>
            {editing ? ( // Render input fields if in editing mode
              <>
                <td>
                  <input
                    type="text"
                    name="titelSubject"
                    value={editedSubject.titelSubject}
                    onChange={handleInputChange}
                  />
                </td>
                {/* ... similar input fields for passingGrade and studentsGrade */}
              </>
            ) : ( // Render subject details and Edit button if not in editing mode
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
      {/* Render EditPopup when editPopupOpen is true */}
      {editPopupOpen && (
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

export default SubjectDetails; // Export the SubjectDetails component to be used elsewhere
