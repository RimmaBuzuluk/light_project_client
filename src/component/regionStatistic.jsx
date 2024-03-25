import React, { useEffect } from 'react';
import '../style/statisticRegion.css';
import KharkivRegion from '../img/unnamed.jpg';
import StatisticRegion from './statisticRegion';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSchedult } from '../redux/slice/schedultReduser';

function RegionStatistic() {
	const dispatch = useDispatch();
	const { items, status } = useSelector(state => state.schedult);

	// console.log('status', items[0].weeks[0].friday[0].timeStatus);

	useEffect(() => {
		dispatch(fetchSchedult());
	}, []);

	const cityStatistic = [
		{ region: 'lflflf', percent: '50%' },
		{ region: 'lflflf', percent: '70%' },
		{ region: 'lflflf', percent: '20%' },
		{ region: 'lflflf', percent: '10%' },
		{ region: 'lflflf', percent: '99%' },
		{ region: 'lflflf', percent: '20%' },
		{ region: 'lflflf', percent: '10%' },
		{ region: 'lflflf', percent: '99%' },
	];

	const weekDay = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];

	console.log(weekDay[1]);

	return (
		<div className='statistic'>
			<div className='regionStatistics'>
				<div className='regionsPercent'>
					{cityStatistic.map((city, index) => (
						<StatisticRegion key={index} region={city.region} percent={city.percent} />
					))}
				</div>
				<div className='statistic_img'>
					<img src={KharkivRegion} alt='Kharkiv Region' />
				</div>
			</div>
			<div className='light__grafic'>
				<table className='timetable'>
					<thead>
						<tr>
							<th className='main_th'>День тижня</th>
							{[...Array(24)].map((_, index) => (
								<th key={index} className='th'>
									{index.toString().padStart(2, '0') + ':00'}
								</th>
							))}
						</tr>
					</thead>
					<tbody>
						{/* Перебираємо дані для кожного дня тижня */}
						{[...Array(7)].map((_, i) =>
							items.map((day, dayIndex) => (
								<tr key={dayIndex}>
									{console.log(day.weeks[0][weekDay[i]][0].day)}
									<td className='main_td'>{day.weeks[0][weekDay[i]][0].day}</td>
									{/* Перебираємо статуси на кожну годину для поточного дня тижня */}
									{day.weeks[0][weekDay[i]][0].timeStatus.map((hour, hourIndex) => (
										<td key={hourIndex} className='td'>
											{hour.status ? '+' : '-'}
										</td>
									))}
								</tr>
							))
						)}
					</tbody>
				</table>
			</div>
		</div>
	);
}

export default RegionStatistic;
