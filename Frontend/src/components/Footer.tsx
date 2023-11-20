import React from 'react'
import bootstrap from 'bootstrap'
import insta from '../assets/insta.png'
import youtube from '../assets/youtube.png'
import './footer.css'

function CreatePool() {

	return (
		<div>
			<div className='Footer'>
				<a href="https://www.instagram.com/claudiu.alexe198/" target="_blank"><img className="socialIcon" src={insta} /></a>
				<p>©2069 Eu.INC, All right reserved</p>
				<a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank"><img className="socialIcon" src={youtube} /></a>
			</div>
		</div >
	)
}

export default CreatePool