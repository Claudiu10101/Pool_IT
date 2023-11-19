import React from "react";
import "./navbar.css";
import voteaza from "../assets/FREEDOM.jpg";

interface Props {
  names: string[];
  setPage: (arg0: string) => void;
}

function Navbar({ names, setPage }: Props) {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <a className="navbar-brand" onClick={() => setPage(" ")}>
            <img width="40vw" height="40vh" src={voteaza} />
          </a>

          <div className={"buttons"}>
            <button onClick={() => setPage(names[0])}>
              <span>{names[0]}</span>
            </button>
            <button onClick={() => setPage(names[1])}>
              <span>{names[1]}</span>
            </button>
          </div>
      </nav>
    </>
  );
}

export default Navbar;
