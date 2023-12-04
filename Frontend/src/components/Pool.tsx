import React, { useState } from "react";
import "./pool.css";
import a from "../assets/a.webp";
import LoadBar from "./LoadBar";
import { Console } from "console";
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000/Pools/",
  headers: {
    'Authorization': `Bearer ${localStorage.getItem('token')}`
  },
})

interface Props {
  Id: string;
  Title: string;
  options: string[];
  votes: number[];
  multiChoice: boolean;
  canDelete: boolean;
  canVote: boolean;
  onDelete: (id:string) => void;
}

function Pool({Id ,Title, options, votes, multiChoice, canDelete, canVote ,onDelete }: Props) {
  const [voted, setVoted] = useState(0);
  const [selected, setSelected] = useState<boolean[]>([false, false, false]);

  const sum = votes.reduce((acc, curr) => acc + curr, 0);

  const changeSelect = (index: number) => {
    if (!multiChoice) {
      setSelected(selected.map((_, i) => i === index));
    } else {
      setSelected(selected.map((value, i) => (i === index ? !value : value)));
    }
    setVoted(voted + 1);
  };

  const handleClick = () => {
    if (canVote) {
      let increases = [0, 0, 0]
      let chose = false;
      for(let i = 0; i < selected.length; i++){
        if (selected[i]) {
          selected[i] = false;
          increases[i] = 1
          chose = true;
        }
      }
      let body =
      {
        "votes" : increases,
      }
      if(chose)
      try {
        api.patch('/' + Id, body).then(res => {
          for(let i = 0; i < increases.length; i++)
            votes[i] += increases[i]

          setVoted(voted + 1);
        })
      }
      catch (err) {
        console.log(err)
      }
    }
  };

  const handleDelete = () => {
    onDelete(Id)
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
