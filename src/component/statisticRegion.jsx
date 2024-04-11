import React, { useEffect, useState } from 'react';
import '../style/statisticRegion.css';
import axios from '../axios';
import { setSelectedRegion } from '../redux/slice/selectedRegion';
import { useDispatch } from 'react-redux';

function StatisticRegion({ region, isSelected, hendelRegion }) {
	const dispatch = useDispatch();
	const scheduleNumber = region.schedules[0];
	const [schedule, setSchedule] = useState(null); // Початковий стан null

	useEffect(() => {
		try {
			const apiUrl = `/schedule/${scheduleNumber}`;

			axios
				.get(apiUrl)
				.then(response => {
					setSchedule(response.data);
				})
				.catch(err => {
					console.log('error with fetching data', err);
				});
		} catch (err) {
			console.log('error fetching schedule data', err);
		}
	}, [scheduleNumber]);

	const handleClick = () => {
		dispatch(setSelectedRegion(schedule));
	};
	let persent;

	persent = Math.round(schedule.persent);

	return (
		<button
			onClick={handleClick}
			className={`regionPercent ${isSelected ? 'selected' : ''}`} // Додаємо клас "selected", якщо регіон виділений
		>
			<div>{region.name}</div>
			{schedule ? (
				<div>{persent}%</div>
			) : (
				<div>Loading...</div> // Відображаємо "Loading..." поки дані завантажуються
			)}
		</button>
	);
}

export default StatisticRegion;
