import React from 'react'; // Import the React library

// Functional component to display an edit popup for a subject
const EditPopup = ({
  editedSubject,         // The subject being edited, passed as a prop
  handleInputChange,    // Function to handle input changes, passed as a prop
  handleSaveClick,      // Function to handle save button click, passed as a prop
  handleCancelClick,    // Function to handle cancel button click, passed as a prop
}) => {
  return (
    <div className="edit-popup">
      <label>Subject:</label>
      {/* Input field for editing the subject's title */}
      <input
        type="text"
        name="titelSubject"
        value={editedSubject.titelSubject} // Bind the value to the edited subject's title
        onChange={handleInputChange}      // Call the provided function on input change
      />
      <label>Passing Grade:</label>
      {/* Input field for editing the passing grade */}
      <input
        type="number"
        name="passingGrade"
        value={editedSubject.passingGrade} // Bind the value to the edited subject's passing grade
        onChange={handleInputChange}      // Call the provided function on input change
      />
      <label>Students Grade:</label>
      {/* Input field for editing the students' grade */}
      <input
        type="number"
        name="studentsGrade"
        value={editedSubject.studentsGrade} // Bind the value to the edited subject's students' grade
        onChange={handleInputChange}       // Call the provided function on input change
      />
      {/* Button to save changes */}
      <button className="form_button_save" onClick={handleSaveClick}>
        Save
      </button>
      {/* Button to cancel and discard changes */}
      <button className="form_button_cancel" onClick={handleCancelClick}>
        Cancel
      </button>
    </div>
  );
};

export default EditPopup; // Export the EditPopup component to be used elsewhere
