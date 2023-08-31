import React, { useState } from "react";
import { useAuthContext } from "../hooks/useAuthContext";

const NewSubjectPopup = ({ onClose }) => {
  const { user } = useAuthContext();
  const [username, setUserNmae ] = useState("");
  const [titelSubject, setTitelSubject] = useState("");
  const [passingGrade, setPassingGrade] = useState("");
  const [studentsGrade, setStudentsGrade] = useState("");
  const [error, setError] = useState(null);
  const [emptyFields, setEmptyFields] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user) {
      setError("you most be logged in");
      return;
    }

    const subject = { username, titelSubject, passingGrade, studentsGrade };

    const response = await fetch("/api/subjects", {
      method: "POST",
      body: JSON.stringify(subject),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
    });
    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
      setEmptyFields(json.emptyFields);
    }
    if (response.ok) {
      setUserNmae("");
      setTitelSubject("");
      setPassingGrade("");
      setStudentsGrade("");
      setError(null);
      setEmptyFields([]);
      console.log("new subject added ", json);
    }
  };

  return (
    <div className="edit-popup">
      <div className="popup-content">
        <label>User Name:</label>
        <input
          type="text"
          onChange={(e) => setUserNmae(e.target.value)}
          value={username}
          className={emptyFields.includes("username") ? "error" : ""}
        />
        <label>Subject :</label>
        <input
          type="text"
          onChange={(e) => setTitelSubject(e.target.value)}
          value={titelSubject}
          className={emptyFields.includes("titelSubject") ? "error" : ""}
        />

        <label>PassingGrade (%):</label>
        <input
          type="number"
          onChange={(e) => setPassingGrade(e.target.value)}
          value={passingGrade}
          className={emptyFields.includes("passingGrade") ? "error" : ""}
        />

        <label>StudentsGrade (%):</label>
        <input
          type="number"
          onChange={(e) => setStudentsGrade(e.target.value)}
          value={studentsGrade}
          className={emptyFields.includes("studentsGrade") ? "error" : ""}
        />
        <div style={{display:"flex" , gap:"79px"}}>
        <button className="button-student" onClick={handleSubmit}>
        New User
      </button>
          {error && <div className="error">{error}</div>}
          <button className="form_button_cancel" onClick={onClose}>
            Close
          </button>
        </div>
        {/* <div style={{display:"flex" , gap:"79px"}}>
          <button className='fbutton_CreateUser' form_button_cancel type="submit" disabled={isLoading}>
            {isLoading ? 'Creating...' : 'Create User'}
          </button>
          {error && <p className="error-message">{error}</p>}
          <button className="form_button_cancel" onClick={onClose}>Close</button>
          </div> */}
      </div>
    </div>
  );
};

export default NewSubjectPopup;
