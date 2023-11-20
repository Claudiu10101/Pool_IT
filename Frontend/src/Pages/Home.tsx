import React from 'react'
import Pool from '../components/Pool'
import Dude from '../assets/a.webp'
import './CSS/home.css'
import insta from '../assets/insta.png'
import youtube from '../assets/youtube.png'

function Home() {
  return (
    <>
      <div className='home-body'>
        <div className='container-fluid'>
          <div className='row row-cols-2'>
            <div className='col'>
              <Pool Title='Sadaunt smecher?' options={["da", "normal", "100%"]} percentages={[0.2, 0.5, 1]} />
            </div>
            <div className='col'>
              <Pool Title='Sunt smecher?' options={["da", "normal", "100%"]} percentages={[0.2, 0.5, 1]} />
            </div>
            <div className='col'>
              <Pool Title='Sunt smecher?' options={["da", "normal", "100%"]} percentages={[0.2, 0.5, 1]} />
            </div>
          </div>
        </div>
        <div className='Footer'>
          <a href="https://www.instagram.com/claudiu.alexe198/" target="_blank"><img className="socialIcon" src={insta} /></a>
          <p>©2069 Eu.INC, All right reserved</p>
          <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank"><img className="socialIcon" src={youtube} /></a>
        </div>
      </div>


    </>
  )
}

export default Home