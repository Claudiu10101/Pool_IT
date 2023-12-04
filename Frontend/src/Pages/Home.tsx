import React, { useEffect, useState } from "react";
import Pool from "../components/Pool";
import Footer from "../components/Footer";
import Dude from "../assets/a.webp";
import "./CSS/home.css";
import insta from "../assets/insta.png";
import youtube from "../assets/youtube.png";
import testoasa from "../assets/testoasa.png";
import axios from "axios";


const api = axios.create({
  baseURL: "http://localhost:3000/Pools",
  headers: {
    'Authorization': `Bearer ${localStorage.getItem('token')}`
  }
})

function handlePoolDelete(id: string) {
  api.delete('/' + id).then(res => { 
    window.location.reload();
  })
}

function jsonToPool(json: any) {
  let choices = []
  let votes = []
  for(let i = 0; i < json.Options.length; i++) {
    choices.push(json.Options[i].Name)
    votes.push(json.Options[i].votes)
  }

  return (
      <Pool
        Id={json.Id}
        Title={json.Title}
        options={choices}
        votes={votes}
        multiChoice={json.MultipleChoice}
        canVote={localStorage.getItem('token') != null}
        canDelete={json.canDelete}
        onDelete={handlePoolDelete}
      />
  );
}

function Home() {
  const [Pools, setPools] = useState([]);

  useEffect(() => {
    api.get('/')
      .then(res => {
        const result = res.data.map((item: any) => jsonToPool(item));
        setPools(result);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <div className="home-body">
        <div className="pre_list">
          <img className="testoasa" src={testoasa} />
          <div className="text">
            Opiniile sunt mai importante ca niciodată. Platformele de sondaje
            permit organizatorilor să culeagă feedback direct de la audiența lor
            și să înțeleagă mai bine nevoile și dorințele acesteia.
          </div>
        </div>
        <div className="pool-list">
          {Pools.map((pool) => (
            <div className="item element">{pool}</div>
          ))}
          <div style={{ width: "100vw", marginTop: "20px"}}>
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
