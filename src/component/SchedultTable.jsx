import React, { useEffect } from 'react';
import '../style/statisticRegion.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSchedult } from '../redux/slice/schedultReduser';

function SchdultTable() {
	// const dispatch = useDispatch();
	const { items, status } = useSelector(state => state.schedult);
	const { selectedRegion } = useSelector(state => state.selectedRegion);
	console.log(selectedRegion);

	// useEffect(() => {
	// 	dispatch(fetchSchedult());
	// }, []);

	const weekDay = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];

	// console.log('regionSchedult', regionSchedult);

	// console.log('item ', items[2].group);
	return (
		<>
			{selectedRegion === null ? (
				<></>
			) : (
				<>
					<div className='schedultInformItem'>
						<div className='schedultGroup'>group</div>
						<div className='schedultPersent'>regionSchedult.persent</div>
					</div>
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
							{/* {[...Array(7)].map((_, i) =>
						items.map((day, dayIndex) => (
							<tr key={dayIndex}>
								<td className='main_td'>{day.weeks[0][weekDay[i]][0].day}</td>
								{day.weeks[0][weekDay[i]][0].timeStatus.map((hour, hourIndex) => (
									<td key={hourIndex} className='td'>
										{hour.status ? '+' : '-'}
									</td>
								))}
							</tr>
						))
					)} */}
						</tbody>
					</table>
				</>
			)}
		</>
	);
}

export default SchdultTable;
