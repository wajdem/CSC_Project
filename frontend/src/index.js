import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { SubjectsContextProvider } from "./context/SubjectContext";
import { AuthContextProvider } from "./context/AuthContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
   <React.StrictMode>
      <AuthContextProvider>
         <SubjectsContextProvider>
            <App />
         </SubjectsContextProvider>
      </AuthContextProvider>
   </React.StrictMode>
);
