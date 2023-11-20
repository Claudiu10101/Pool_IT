import { useState } from "react";
import Navbar from "./components/Navbar";
import Page from "./Pages/Page";
import './App.css'

function App() {
  const [logged, setLogged] = useState(false);
  const [currentPage, setCurrentPage] = useState("Home");

  let PageNames = ["", ""];

  const handleCurrnetPage = (arg0: string) => {
    setCurrentPage(arg0);
    if (arg0 == "Log In" || arg0 == "Sign In")
      setLogged(true);
    else if (arg0 == "Sign Out")
      setLogged(false);
    console.log("redirect to " + arg0);
  }

  if (logged) {
    PageNames = ["Create Pool", "Sign Out"];
  }
  else {
    PageNames = ["Log In", "Sign In"];
  }


  return (
    <>
      <div className="NavbarClass">
        <Navbar names={PageNames} setPage={handleCurrnetPage} />

      </div>
      <div className="PageClass">
        <Page pageName={currentPage} />
      </div>

    </>
  )
}



export default App;