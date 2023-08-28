import { useSubjectContext } from "../hooks/useSubjectContext"
import { useAuthContext } from "../hooks/useAuthContext"



const SubjectDetails = ({ subject}) =>{
    const { dispatch } = useSubjectContext()
    const { user } = useAuthContext()

    const handleClick = async () => {
        if (!user) {
            return
        }
        const response = await fetch("/api/subject" + subject._id,{
        method: "DELETE",
        headers: {
            'Authorization': `Bearer ${user.token}`
        }
        })
        const json = await response.json()

        if (response.ok) {
            dispatch({type: 'DELETE_SUBJECT', payload: json})
        }
    }

    return (
        <div className="subject-details">
            <h4>{subject.titelSubject}</h4>
            <p><strong>PassingGrade (%):</strong>{subject.passingGrade}</p>
            <p><strong>StudentsGrade (%):</strong>{subject.studentsGrade}</p>
            <span className="material-symbols-outlined" onClick={handleClick}>Delete</span>
            {/* <span className="material-symbols-outlined" onClick={handleClick}>Edit</span> */}
        </div>
    )
}

export default  SubjectDetails