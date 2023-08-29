import React from 'react';

const EditPopup = ({
  editedSubject,
  handleInputChange,
  handleSaveClick,
  handleCancelClick,
}) => {
  return (
    <div className="edit-popup">
    <label>Subject:</label>
      <input
        type="text"
        name="titelSubject"
        value={editedSubject.titelSubject}
        onChange={handleInputChange}
      />
          <label>Passing Grade:</label>
      <input
        type="number"
        name="passingGrade"
        value={editedSubject.passingGrade}
        onChange={handleInputChange}
      />
    <label>Students Grade:</label>
      <input
        type="number"
        name="studentsGrade"
        value={editedSubject.studentsGrade}
        onChange={handleInputChange}
      />
      <button className="form_button_save" onClick={handleSaveClick}>
        Save
      </button>
      <button className="form_button_cancel" onClick={handleCancelClick}>
        Cancel
      </button>
    </div>
  );
};

export default EditPopup;
