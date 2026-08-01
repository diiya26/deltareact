import { createContext } from "react";
import profile from "./assets/profile.png";
import College from "./College";
export const FacultyContext=createContext();

function App() {

   constfacultyInfo= {
    "name":"Raj Mehta",
    "email":"raj@gmail.com",
    "contactno":"+91-123456789",
    "image":profile
  }
  return (
    <>
    <FacultyContext.Provider value={facultyInfo}>
    <College/>
    </FacultyContext.Provider>
    </>
  )
}

export default App;