import React from 'react';
import '../style/Header.css';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectIsAuth } from '../redux/slice/authReduser';

function Header() {
	const dispatch = useDispatch();
	const isAuth = useSelector(selectIsAuth);

	const onClickLogout = () => {
		if (window.confirm('Ви впевнені що хочете вийти?')) {
			dispatch(logout());
			window.localStorage.removeItem('token');
		}
	};

	const shouGumburger = () => {
		console.log('lflfl');
	};
	return (
		<div className='header'>
			<Link to='/' className='main_item'>
				Light in your home
			</Link>
			<div className='header_menu'>
				<Link to='/vidjet' className='header_menu__item'>
					Віджет
				</Link>
				<Link to='/comments' className='header_menu__item'>
					Відгуки
				</Link>
				<Link to='/statistics' className='header_menu__item'>
					Статистіка
				</Link>
				<Link to='/map' className='header_menu__item'>
					Пункти незламності
				</Link>
				{isAuth ? (
					<div className='header_menu__item'>
						<button className='buttExit' onClick={() => onClickLogout()}>
							Вийти
						</button>
					</div>
				) : (
					<Link to='/registration'>зарееструватися</Link>
				)}
				<div className='gumburgerMenu' onClick={shouGumburger}>
					<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKMz8CPZPvGcp5TA6AMphHc5EDwF_Gj2-72Q&usqp=CAU' />
				</div>
			</div>
		</div>
	);
}

export default Header;
