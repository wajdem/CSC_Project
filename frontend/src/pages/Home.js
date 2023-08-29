import { useEffect } from "react";
import { useSubjectContext  } from "../hooks/useSubjectContext";
import { useAuthContext } from "../hooks/useAuthContext";

//compoents
import SubjectDetails from "../components/SubjectDetails";
import SubjectForm from "../components/SubjectForm";

const Home = () => {
  const { subjects, dispatch } = useSubjectContext();
  const { user } = useAuthContext();

  useEffect(() => {
    const fetchSubjects = async () => {
      const response = await fetch("/api/subjects", {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      const json = await response.json();
      console.log(json);

      if (response.ok) {
        dispatch({ type: "SET_SUBJECTS", payload: json });
      }
    };

    if (user) {
      fetchSubjects();
    }
  }, [dispatch]);

  return (
    <div className="home">
      <div className="workouts">
        {subjects &&
          subjects.map((subject) => (
            <SubjectDetails key={subject.id} subject={subject} />
          ))}
      </div>
      <SubjectForm />
    </div>
  );
};

export default Home;
