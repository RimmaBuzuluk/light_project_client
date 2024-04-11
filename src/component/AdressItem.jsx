import React, { useEffect, useState } from 'react';
import '../style/AdressItem.css';
import { useDispatch } from 'react-redux';
import { fetchRebootAddress, fetchRemoveAddress } from '../redux/slice/adressReduser';
import { Link } from 'react-router-dom';
import axios from '../axios';
import lightImg from '.././img/2f02d7c0836c5261ae9b00cf956a1e59.png';
import deleteImg from '.././img/Icon.png';
import refreshItem from '.././img/Group 6.png';

function AdressItem({ address }) {
	const dispatch = useDispatch();
	const { _id, addressPlace, status } = address;
	const [lightStatus, setLightStatus] = useState(false);

	const removeAdress = () => {
		if (window.confirm('Ви дійсно хочете видалити цю адресу?')) {
			console.log(_id);
			dispatch(fetchRemoveAddress(_id));
		}
	};

	const rebootAddress = () => {
		axios.put(`addresSatus/${_id}`);
		if (status === true) {
			setLightStatus(true);
		} else {
			setLightStatus(false);
		}
	};

	useEffect(() => {
		const intervalId = setInterval(() => {
			rebootAddress();
			if (status === true) {
				setLightStatus(true);
			} else {
				setLightStatus(false);
			}
		}, 60000);
		return () => clearInterval(intervalId);
	}, []);

	return (
		<div className='adressItem__Block'>
			<Link to={`address/${_id}`} className='AdressItem'>
				<div>{addressPlace}</div>
				<div className='lightStatus'>
					{lightStatus === true ? (
						<div className='lightBlock lightTrue'>
							<div className='lightBlockText'>світло є</div>
							<img src={lightImg} />
						</div>
					) : (
						<div className='lightBlock lightFalse'>світла немає</div>
					)}
				</div>
			</Link>
			<div className='blockButt__delete'>
				<button onClick={removeAdress} className='deleteBut'>
					<img src={deleteImg} />
				</button>
			</div>
			<div className='blockButt__delete'>
				<button className='deleteBut' onClick={rebootAddress}>
					<img src={refreshItem} />
				</button>
			</div>
		</div>
	);
}

export default AdressItem;
