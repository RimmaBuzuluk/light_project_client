import React, { useEffect } from 'react';
import Header from './page/Header';
import './style/App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Container } from '@mui/material';
import Home from './page/Home';
import Registration from './page/Registration';
import Login from './page/Login';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAuthMe, selectIsAuth } from './redux/slice/authReduser';
import AddressItem from './page/AddressItemPage';
import AddressItemPage from './page/AddressItemPage';
import Statistics from './page/Statistics';
import Comments from './page/Comments';
import Map from './page/Map';
import MapComponent from './page/Map';
import axios from './axios';
import Vidjet from './page/Vidjet';
import background from './img/photo_2024-04-08_17-00-37.jpg';

function App() {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchAuthMe());
	}, []);

	useEffect(() => {
		let url = `chech-router-availability`;
		axios
			.get(url)
			.then(response => {
				// console.log(response.data);
			})
			.catch(error => {
				console.log('сталась помилка');
			});
	}, []);

	return (
		<div>
			<div className='backgroundIMG'>{/* <img src={background} /> */}</div>
			<div className='App'>
				<Router>
					{/* <Container> */}
					<Header />

					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/registration' element={<Registration />} />
						<Route path='/login' element={<Login />} />
						<Route path='/address/:id' element={<AddressItemPage />} />
						<Route path='/statistics' element={<Statistics />} />
						<Route path='/map' element={<MapComponent />} />
						<Route path='/comments' element={<Comments />} />
						<Route path='/vidjet' element={<Vidjet />} />
					</Routes>
					{/* </Container> */}
				</Router>
			</div>
		</div>
	);
}

export default App;
