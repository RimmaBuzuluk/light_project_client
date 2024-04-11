import React, { useEffect, useState } from 'react';
import '../style/SerchCity.css';
import { FixedSizeList as List } from 'react-window';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCity } from '../redux/slice/cityReduser';

function SerchCity({ onSelectCity }) {
	const dispatch = useDispatch();
	const [filterText, setFilterText] = useState('');
	const { items: CityData, status: CityStatus } = useSelector(state => state.city);

	useEffect(() => {
		dispatch(fetchCity());
	}, []);

	const isCityLoading = CityStatus.status === 'loading';

	const filteredCities = CityData.filter(city => city.name && city.name.toLowerCase().includes(filterText.toLowerCase()));

	const handleSelectCity = cityName => {
		console.log(cityName);
		setFilterText(cityName);
		onSelectCity(cityName);
	};

	return (
		<div className='SerchCity'>
			<div className='title_input_adress_place title_adress'>City</div>
			<div>
				<input type='text' value={filterText} name='addressPlace' onChange={e => setFilterText(e.target.value)} />
				{isCityLoading ? (
					<div>Завантаження...</div>
				) : CityData ? (
					filteredCities.length > 0 ? (
						<List height={200} itemCount={filteredCities.length} itemSize={35} width={150} className='listCity'>
							{({ index, style }) => (
								<button className='buttonCity' onClick={() => handleSelectCity(filteredCities[index].name)} key={filteredCities[index]._id} value={filteredCities[index].name}>
									{filteredCities[index].name}
								</button>
							)}
						</List>
					) : (
						<div>No matching cities</div>
					)
				) : (
					<div>Завантаження...</div>
				)}
			</div>
		</div>
	);
}

export default SerchCity;
