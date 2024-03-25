import React from 'react';
import '../style/Home.css';

function HomeSkeleton() {
	return (
		<div className='home'>
			<div className='home__name'></div>
			<div className='home__addBut'>
				<button className='buttonAdd button'>Add adress</button>
			</div>
		</div>
	);
}

export default HomeSkeleton;
