import { SubjectContext } from "../context/SubjectContext";
import { useContext } from 'react';

export const useSubjectContext = () => {
    const context = useContext(SubjectContext);

    if (!context) {
        throw Error("SubjectContext must be used inside a SubjectsContextProvider");
    }

    return context;
};