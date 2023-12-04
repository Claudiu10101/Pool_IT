import { useState } from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import CreatePool from "./Pages/CreatePool";
import SignIn from "./Pages/Signin";

function App() {
  const [showPages,setShowPages] = useState([false,false,false])

  const user = localStorage.getItem('token') || 0;

  let PageNames : string[] = []

  if (user === 0){
     PageNames = ["Log In", "Sign In"];
  }
  else{
     PageNames = ["Create Pool", "Log Out"];
  }

  const handleCurrnetPage = (arg0: string) => {
    console.log("redirect to " + arg0);
    const newPage = [false,false,false];

    if(arg0 == "Log In") newPage[0] = true;
    else if(arg0 == "Sign In") newPage[1] = true;
    else if(arg0 == "Create Pool") newPage[2] = true;
    else if (arg0 == "Log Out") localStorage.removeItem('token');
    
    setShowPages(newPage);
  };

  return (
    <>
      <div className="NavbarClass">
        <Navbar names={PageNames} setPage={handleCurrnetPage} />
      </div>
      <div className="PageClass">
        <Home />
        <Login showModal={showPages[0]} handleClose={() => {handleCurrnetPage("Home")}}/>
        <SignIn showModal={showPages[1]} handleClose={() => {handleCurrnetPage("Home")}}/>
        <CreatePool showModal={showPages[2]} handleClose={() => {handleCurrnetPage("Home")}}/>
        </div>
    </>
  );
}

export default App;
