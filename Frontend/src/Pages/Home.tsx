import React from 'react'
import Pool from '../components/Pool'
import Footer from '../components/Footer'
import Dude from '../assets/a.webp'
import './CSS/home.css'
import insta from '../assets/insta.png'
import youtube from '../assets/youtube.png'

function Home() {
  return (
    <>
      <div className='home-body'>
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
          <div style={{width:"100vw"}}>
            <Footer />
          </div>
        </div>
      </div>
    </>
  )
}

export default Home