import React, { useState } from "react";
import "./pool.css";
import a from "../assets/a.webp";
import LoadBar from "./LoadBar";
import { Console } from "console";

interface Props {
  Title: string;
  options: string[];
  votes: number[];
  multiChoice: boolean;
  Owner: string;
}

function Pool({ Title, options, votes, multiChoice, Owner }: Props) {
  const [voted, setVoted] = useState(0);
  const [selected, setSelected] = useState<boolean[]>([false, false, false]);

  const sum = votes.reduce((acc, curr) => acc + curr, 0);

  const canDelete = false;

  const changeSelect = (index: number) => {
    if (!multiChoice) {
      setSelected(selected.map((_, i) => i === index));
    } else {
      setSelected(selected.map((value, i) => (i === index ? !value : value)));
    }
    setVoted(voted + 1);
  };

  const handleClick = () => {
    // Handle click logic here
  };

  const handleDelete = () => {
    throw new Error("Function not implemented.");
  };

  return (
    <>
      <div className="poolBody">
        <h3>{Title}</h3>
        {options.map((option, index) => (
          <div key={index} onClick={() => changeSelect(index)}>
            <p style={{fontWeight: (selected[index])?'bolder':''}}>
              {option}
            </p>
            <LoadBar
              percentage={(sum != 0)?votes[index] / sum: 0}
              selected={selected[index]}
            />
          </div>
        ))}
        <div className="buttonTray">
          {canDelete && (
            <button className="voteButton" onClick={handleDelete}>
              Delete
            </button>
          )}
          <button className="voteButton" onClick={handleClick}>
            Vote
          </button>
        </div>
      </div>
    </>
  );
}

export default Pool;
