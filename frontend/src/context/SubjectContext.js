import { createContext, useReducer } from "react";

export const SubjectContext = createContext();

export const SebjectsReducer = (state, action) => {
  switch (action.type) {
    case "SET_SUBJECTS":
      return {
        subjects: action.payload,
      };
    case "CREATE_SUBJECT":
      return {
        subjects: [action.payload, ...state.subjects],
      };
    case "DELETE_SUBJECTS":
      return {
        subjects: state.subjects.filter((w) => w._id !== action.payload._id),
      };
    default:
      return state;
  }
};

export const SubjectsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(SebjectsReducer, {
    subjects: null,
  });
  console.log("SubjectContext state", state);

  return (
    <SubjectContext.Provider value={{ ...state, dispatch }}>
      {children}
    </SubjectContext.Provider>
  );
};

export default SubjectContext;

