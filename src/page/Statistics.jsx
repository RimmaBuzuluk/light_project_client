import React from 'react';
import '../style/Header.css';
import RigenStatistic from '../component/regionStatistic';

function Statistics() {
	return (
		<div className='statistics'>
			<RigenStatistic />
			<div>статистика</div>
		</div>
	);
}

export default Statistics;
