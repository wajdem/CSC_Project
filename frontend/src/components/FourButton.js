import React, { useState } from "react";
import UserRegistrationPopup from "./UserRegistrationPopup";

const FourButton = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <div className="four_buttons">
      <button className="button-student" onClick={openPopup}>
        New User
      </button>
      {isPopupOpen && <UserRegistrationPopup onClose={closePopup} />}
      {/* <button className="button-student">New Subject</button> */}
      {/* <button className="button-student">Subject Student</button> */}
      {/* <button className="button-student">Set Mark</button> */}
    </div>
  );
};

export default FourButton;
