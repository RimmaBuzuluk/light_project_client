import React, { useEffect, useState } from 'react';
import '../style/statisticRegion.css';
import KharkivRegion from '../img/unnamed-removebg-preview.png';
import StatisticRegion from './statisticRegion';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSchedult } from '../redux/slice/schedultReduser';
import { fetchRegion } from '../redux/slice/kharkivRegion';
import SchdultTable from './SchedultTable';

function RegionStatistic() {
	const dispatch = useDispatch();
	const kharkivRegion = useSelector(state => state.region);
	const [selectedRegion, setSelectedRegion] = useState(null);
	// const [regionSchedult, setRegionSchedult] = useState([]);
	// const [region, setRegion] = useState([]);

	useEffect(() => {
		dispatch(fetchRegion());
	}, []);

	const handleRegionClick = regionName => {
		setSelectedRegion(regionName); // Встановлюємо обраний регіон
	};

	const hendelRegion = (region, schedule) => {
		// setRegion(region);
		// console.log('schedule', schedule);
		// setRegionSchedult(schedule);
	};

	// console.log('regionSchedult', regionSchedult);

	return (
		<div className='statistic'>
			<div className='regionStatistics'>
				<div className='regionsPercent'>
					{kharkivRegion.item.map((city, index) => (
						<StatisticRegion
							key={index}
							region={city}
							isSelected={city.name === selectedRegion} // Передача стану виділеного регіону
							hendelRegion={handleRegionClick}
						/>
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
