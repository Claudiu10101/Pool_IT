import React from "react";
import Pool from "../components/Pool";
import Footer from "../components/Footer";
import Dude from "../assets/a.webp";
import "./CSS/home.css";
import insta from "../assets/insta.png";
import youtube from "../assets/youtube.png";
import testoasa from "../assets/testoasa.png";

const Pools = [
  <div className="item element">
    <Pool
      Title="Este cu alegere multipla?"
      options={["da", "normal", "evident"]}
      votes={[2, 0, 1]}
      multiChoice={true}
      Owner={"sadasd"}
    />
  </div>,
    <div className="item element">
    <Pool
      Title="Este cu alegere multipla?"
      options={["da", "normal", "evident"]}
      votes={[0,0,0]}
      multiChoice={true}
      Owner={"sadasd"}
    />
  </div>,
  <div className="item element">
  <Pool
    Title="E cu o singura alegere?"
    options={["da", "normal", "100%"]}
    votes={[1, 1, 1]}
    multiChoice={false}
    Owner={"sadasd"}
  />
</div>,
  <div className="item element">
  <Pool
    Title="Este cu alegere multipla?"
    options={["da", "normal", "evident"]}
    votes={[2, 5, 2]}
    multiChoice={true}
    Owner={"sadasd"}
  />
</div>,
  <div className="item element">
    <Pool
      Title="E cu o singura alegere?"
      options={["da", "normal", "100%"]}
      votes={[2, 500, 1]}
      multiChoice={false}
      Owner={"sadasd"}
    />
  </div>,

];

function Home() {
  return (
    <>
      <div className="home-body">
        <div className="pre_list">
          <img className="testoasa" src={testoasa} />
          <div className="text">
            Opiniile sunt mai importante ca niciodată. Platformele de sondaje
            permit organizatorilor să culeagă feedback direct de la audiența lor
            și să înțeleagă mai bine nevoile și dorințele acesteia.
          </div>
        </div>
        <div className="pool-list">
          {Pools}
          <div style={{ width: "100vw", marginTop: "20px" }}>
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
