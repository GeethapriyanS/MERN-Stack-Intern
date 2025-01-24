import { createContext } from "react";
import Navbar from "../Navbar";
import Invigilator from "../ContextComponents/Invigilator";
export const ThemeProvider = createContext();
const Student = () => {
  return (
    <div>
      <Navbar />
      <ThemeProvider.Provider value={{sgpa:9.5, cgpa:6.5}}>
      <h2>
        This is a example of useContext Hook which is the alternative for Props
        Drilling
      </h2>
      <h3>Students are writing their exams.</h3>
      <Invigilator/>
      </ThemeProvider.Provider>
    </div>
  );
};
export default Student;