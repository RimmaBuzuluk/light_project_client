import React, { useEffect } from 'react';
import '../style/statisticRegion.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSchedult } from '../redux/slice/schedultReduser';
import lightHappyIcon from '.././img/1669891870_4-indasil-club-p-lampochka-risunok-dlya-detei-vkontakte-5-removebg-preview.png';
import lightSadIcon from '.././img/depositphotos_64629805-stock-illustration-cartoon-sad-light-buld-removebg-preview.png';
function SchdultTable() {
	const dispatch = useDispatch();
	// const { items, status } = useSelector(state => state.schedult);
	const { selectedRegion } = useSelector(state => state.selectedRegion);
	let week;
	console.log('selectedRegion', selectedRegion);

	if (selectedRegion) {
		week = selectedRegion.weeks[0];
	}

	console.log('week', week);
	// useEffect(() => {
	// 	dispatch(fetchSchedult());
	// }, []);

	const weekDay = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];

	// console.log('regionSchedult', regionSchedult);

	return (
		<>
			{selectedRegion === null ? (
				<></>
			) : (
				<>
					<div className='schedultInformItem'>
						<div className='schedultGroup'>GROUP {selectedRegion.group}</div>
						<div className='schedultPersent'>PERSENT {Math.round(selectedRegion.persent)}</div>
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
							{weekDay.map((day, index) => (
								<tr key={index}>
									<td>{day}</td>
									{week[day.toLowerCase()][0].timeStatus.map((time, timeIndex) => (
										<td key={timeIndex}>{time.status ? <img src={lightHappyIcon} /> : <img src={lightSadIcon} />}</td>
									))}
								</tr>
							))}
						</tbody>
					</table>
				</>
			)}
		</>
	);
}

export default SchdultTable;
