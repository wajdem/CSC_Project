import React, { useState } from "react";
import { useSubjectContext } from "../hooks/useSubjectContext";
import { useAuthContext } from "../hooks/useAuthContext";

const SubjectDetails = ({ subject }) => {
  const { dispatch } = useSubjectContext();
  const { user } = useAuthContext();

  const [editing, setEditing] = useState(false);
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
  };

  const handleSaveClick = async () => {
    setEditing(false);
  };

  const handleCancelClick = () => {
    setEditing(false);
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
            <th>User Name</th>
            <th>Subject</th>
            <th>Passing Grade</th>
            <th>Students Grade</th>
            <th>
              <button
                className="form_button_delete"
                onClick={handleDeleteClick}
              >
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
                <td>
                  <button
                    className="form_button_save"
                    onClick={handleSaveClick}
                  >
                    Save
                  </button>
                  <button
                    className="form_button_cancel"
                    onClick={handleCancelClick}
                  >
                    Cancel
                  </button>
                </td>
              </>
            ) : (
              <>
                <td>{subject.titelSubject}</td>
                <td>{subject.passingGrade} %</td>
                <td>{subject.studentsGrade} %</td>
                <td>
                  <button
                    className="form_button_edit"
                    onClick={handleEditClick}
                  >
                    Edit
                  </button>
                </td>
              </>
            )}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default SubjectDetails;

// import React from "react";
// import { useSubjectContext } from "../hooks/useSubjectContext";
// import { useAuthContext } from "../hooks/useAuthContext";

// const SubjectDetails = ({ subject }) => {
//   const { dispatch } = useSubjectContext();
//   const { user } = useAuthContext();

//   const handleDeleteClick = async () => {
//     if (!user) {
//       return;
//     }

//     const response = await fetch("/api/subjects/" + subject._id, {
//       method: "DELETE",
//       headers: {
//         Authorization: `Bearer ${user.token}`,
//       },
//     });
//     const json = await response.json();

//     if (response.ok) {
//       dispatch({ type: "DELETE_SUBJECTS", payload: { _id: subject._id } });
//     }
//   };

//   return (
//     <div className="subject-details">
//       <table>
//         <thead>
//           <tr>
//             <th>User Name</th>
//             <th>Subject</th>
//             <th>Passing Grade</th>
//             <th>Students Grade</th>
//             <th>Delete</th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <td>{subject.username}</td>
//             <td>{subject.titelSubject}</td>
//             <td>{subject.passingGrade} %</td>
//             <td>{subject.studentsGrade} %</td>
//             <td>
//               <button className="form_button_delete" onClick={handleDeleteClick}>
//                 Delete
//               </button>
//             </td>
//           </tr>
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default SubjectDetails;
