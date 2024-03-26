import React, { useEffect } from 'react';
import '../style/statisticRegion.css';
import KharkivRegion from '../img/unnamed.jpg';
import StatisticRegion from './statisticRegion';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSchedult } from '../redux/slice/schedultReduser';
import { fetchRegion } from '../redux/slice/kharkivRegion';
import SchdultTable from './SchedultTable';

function RegionStatistic() {
	const dispatch = useDispatch();
	// const { items, status } = useSelector(state => state.schedult);
	const kharkivRegion = useSelector(state => state.region);
	console.log(kharkivRegion.item);

	useEffect(() => {
		dispatch(fetchSchedult());
		dispatch(fetchRegion());
	}, []);

	const weekDay = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];

	return (
		<div className='statistic'>
			<div className='regionStatistics'>
				<div className='regionsPercent'>
					{kharkivRegion.item.map((city, index) => (
						<StatisticRegion key={index} region={city} />
					))}
				</div>
				<div className='statistic_img'>
					<img src={KharkivRegion} alt='Kharkiv Region' />
				</div>
			</div>
			<div className='light__grafic'>
				<SchdultTable />
			</div>
		</div>
	);
}

export default RegionStatistic;
