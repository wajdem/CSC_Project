import { useState } from "react";
import { useSubjectContext } from "../hooks/useSubjectContext";
import { useAuthContext } from "../hooks/useAuthContext";

const SubjectFrom = () => {
  const { dispatch } = useSubjectContext;
  const { user } = useAuthContext();

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

    const subject = { titelSubject, passingGrade, studentsGrade };

    const response = await fetch("/api/subject", {
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
      setTitelSubject("");
      setPassingGrade("");
      setStudentsGrade("");
      setError(null);
      setEmptyFields([]);
      console.log("new subject added ", json);
      dispatch({ type: "CREATE_SUBJECT", payload: json });
    }
  };

  return (
    <from className="create" onSubmit={handleSubmit}>
      <label>Subject Name:</label>
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

      <button className="form_button">Add New Subject</button>
      {error && <div className="error">{error}</div>}
    </from>
  );
};
export default SubjectFrom;
