import React, { useState } from "react";
import UserRegistrationPopup from "./UserRegistrationPopup";
import NewSubjectPopup from './NewSubjectPopup'; // Import the new pop-up component
// import AssignSubjectPopup from './AssignSubjectPopup'; // Import the new pop-up component


const FourButton = () => {
  const [showUserPopup, setShowUserPopup] = useState(false);
  const [showSubjectPopup, setShowSubjectPopup] = useState(false);
  const [showAssignPopup, setShowAssignPopup] = useState(false); // Add state for the AssignSubjectPopup


  const handleNewUserClick = () => {
    setShowUserPopup(true);
  };

  const handleNewSubjectClick = () => {
    setShowSubjectPopup(true);
  };

  // const handleAssignSubjectClick = () => {
  //   setShowAssignPopup(true);
  // };

  const handleClosePopup = () => {
    setShowUserPopup(false);
    setShowSubjectPopup(false);
  };

  return (
    <div className="four_buttons">
      <button className="button-student" onClick={handleNewUserClick}>
        New User
      </button>
      <button className="button-student" onClick={handleNewSubjectClick}>
        New Subject
      </button>
      {/* <button className="button-student" onClick={handleAssignSubjectClick}>
        Assign Subject to Student
      </button> */}

      {showUserPopup && <UserRegistrationPopup onClose={handleClosePopup} />}
      {showSubjectPopup && <NewSubjectPopup onClose={handleClosePopup} />}
      {/* {showAssignPopup && <AssignSubjectPopup onClose={handleClosePopup} />} */}

    </div>
  );
};

export default FourButton;
