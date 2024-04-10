import React from 'react';
import '../style/Login.css';
import { Link, Navigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAuth, selectIsAuth } from '../redux/slice/authReduser';

function Login() {
	const isAuth = useSelector(selectIsAuth);
	const dispatch = useDispatch();

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		defaultValues: {
			email: 'buzuluk@gmail.com',
			password: '12345',
		},
		mode: 'onChange',
	});

	const onSubmit = async values => {
		const data = await dispatch(fetchAuth(values));
		console.log(data);
		if (!data.payload) {
			return alert('не вдалось авторизуватись');
		} else if ('token' in data.payload) {
			window.localStorage.setItem('token', data.payload.token);
		}
	};

	console.log(isAuth);

	if (isAuth) {
		return <Navigate to='/' />;
	}
	return (
		<div className='login'>
			<div className='registrationTitle'>Авторизація</div>
			<form onSubmit={handleSubmit(onSubmit)}>
				<div className='emailBlock block'>
					<div className='emailText text'>Email</div>
					<div>
						<input type='text' label='email' {...register('email', { required: 'Не вказана пошта' })} />
						{errors.email && <p style={{ color: 'red', fontSize: '20px' }}>{errors.email.message}</p>}
					</div>
				</div>
				<div className='passwordBlock block'>
					<div className='passwordText text'>Password</div>
					<div>
						<input label='Password' type='password' {...register('password', { required: 'Не вказан пароль' })} />
						{errors.password && <p style={{ color: 'red', fontSize: '20px' }}>{errors.password.message}</p>}
					</div>
				</div>
				<div className='registration_buttons'>
					<button type='submit' className='regiter_btn'>
						увійти
					</button>
					<button className='button enter_btn'>
						<Link to='/registration'>зареєструватись</Link>
					</button>
				</div>
			</form>
		</div>
	);
}

export default Login;
