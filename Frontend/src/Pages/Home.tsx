import React from 'react'
import Pool from '../components/Pool'
import Footer from '../components/Footer'
import Dude from '../assets/a.webp'
import './CSS/home.css'
import insta from '../assets/insta.png'
import youtube from '../assets/youtube.png'
import testoasa from '../assets/testoasa.png'

function Home() {
  return (
    <>
      <div className='home-body'>
      <div className='pre_list'>
          <img className='testoasa' src={testoasa} />
          <div className='text'>
          Opiniile sunt mai importante ca niciodată. Platformele de sondaje permit organizatorilor să culeagă feedback direct de la audiența lor și să înțeleagă mai bine nevoile și dorințele acesteia.
          </div>
          </div>
        <div className='pool-list'>
          <div className='item element'>
            <Pool Title='Sadaunt smecher?' options={["da", "normal", "100%"]} percentages={[0.2, 0.5, 1]} />
          </div>
          <div className='item element'>
            <Pool Title='Sunt smecher?' options={["da", "normal", "100%"]} percentages={[0.2, 0.5, 1]} />
          </div>
          <div className='item element'>
            <Pool Title='Sunt smecher?' options={["da", "normal", "100%"]} percentages={[0.2, 0.5, 1]} />
          </div>
          <div className='item element'>
            <Pool Title='Sadaunt smecher?' options={["da", "normal", "100%"]} percentages={[0.2, 0.5, 1]} />
          </div>
          <div className='item element'>
            <Pool Title='Sunt smecher?' options={["da", "normal", "100%"]} percentages={[0.2, 0.5, 1]} />
          </div>
          <div className='item element'>
            <Pool Title='Sunt smecher?' options={["da", "normal", "100%"]} percentages={[0.2, 0.5, 1]} />
          </div>
          <div style={{ width: "100vw" }}>
            <Footer />
          </div>
        </div>
      </div>
    </>
  )
}

export default Home