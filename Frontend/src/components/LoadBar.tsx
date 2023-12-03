import React from 'react';

interface Props {
	percentage: number;
	selected: boolean;
}


function LoadBar({ percentage, selected }: Props): JSX.Element {
  const barWidth = `${(percentage) * 100}%`;
  const barHeight = '20px';
  const barColor = selected ? '#000000' : '#999999';
  const BoxShadow = selected ? '10px 7cd px 10px 10px #AAAAAA' : '';
  const value = Math.trunc(percentage * 10000);

  return (
    <div>
      <div style={{ border: '1px solid #ccc', borderRadius: '100px' }}>
        <div style={{ width: barWidth, height: barHeight, backgroundColor: barColor ,borderRadius: '100px', boxShadow: BoxShadow, transition: 'width 0.3s ease-in-out'   }}></div>
      </div>
        <p style={{ fontWeight: selected ? 'bolder' : '', textAlign: 'center', marginTop: '5px' }}>
          {`${value / 100}%`}
        </p>
    </div>
  );
}

export default LoadBar;
