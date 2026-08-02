import { createContext } from "react";
import reactLogo from'./assets/react.svg'
import viteLogo from'./assets/vite.svg'
import heroImg from'./assets/hero.png'
import'./App.css'
import Home from'./components/Home'

exportconstUserContext=createContext();
functionApp() {
    return (
    <>
    <div>
     <UserContext.Provider value="Raj Mehta">
      <Home/>
     </UserContext.Provider>
    </div>
   </>
  )
}

export default App;