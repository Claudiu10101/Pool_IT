import React from 'react';

interface Props {
	percentage: number;
	selected: boolean;
}

function LoadBar({ percentage, selected }: Props) {
	const barStyle: React.CSSProperties = {
		width: `${percentage * 100}%`,
		height: '20px',
		backgroundColor: `${(selected) ? '#000000' : '#888888'}`
	};

	

	return (
		<div>
			<div style={{ border: '1px solid #ccc', borderRadius: '5px', overflow: 'hidden' }}>
				<div style={barStyle}></div>
			</div>
			{(percentage) ? (
				<p style={{ fontWeight: `${(selected)?'bolder':''}`, textAlign: 'center', marginTop: '5px' }}>{`${percentage * 100}%`}</p>) : <></>
			}
		</div>
	);
};

export default LoadBar;
