import React from 'react';
import '../style/statisticRegion.css';

function StatisticRegion({ region }) {
	console.log(region);
	return (
		<button className='regionPercent'>
			<div>{region.name}</div>
			<div>50%</div>
		</button>
	);
}

export default StatisticRegion;
