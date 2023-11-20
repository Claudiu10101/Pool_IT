import React, { useState } from 'react'
import './pool.css'
import a from '../assets/a.webp'
import LoadBar from './LoadBar'

interface Props {
	Title: string;
	options: string[];
	percentages: number[]
}

function Pool({ Title, options, percentages }: Props) {
	const [voted, setVoted] = useState(0);

	const [selected, setSelected] = useState([false, false, false]);

	const changeSelect = (arg0: number) => {
		selected[arg0] = !selected[arg0];
		setVoted(voted + 1);
		setSelected(selected);
	}

	return (
		<>
			<div className='poolBody'>
				<h3>{Title}</h3>
				<div onClick={() => changeSelect(0)}>
					<p style={{ fontWeight: `${(selected[0]) ? 'bolder' : ''}` }}>{options[0]}</p>
					<LoadBar percentage={percentages[0]} selected={selected[0]} />
				</div>
				<div onClick={() => changeSelect(1)}>
					<p style={{ fontWeight: `${(selected[1]) ? 'bolder' : ''}` }}>{options[1]}</p>
					<LoadBar percentage={percentages[1]} selected={selected[1]} />
				</div>
				<div onClick={() => changeSelect(2)}>
					<p style={{ fontWeight: `${(selected[2]) ? 'bolder' : ''}` }}> {options[2]}</p>
					<LoadBar percentage={percentages[2]} selected={selected[2]} />
				</div>

				<button className='voteButton'>Vote</button>
			</div>
		</>
	)
}

export default Pool