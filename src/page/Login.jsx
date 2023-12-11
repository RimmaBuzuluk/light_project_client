import React from 'react';
import "../style/Login.css"
import { Link, Navigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAuth, selectIsAuth } from '../redux/slice/authReduser';


function Login() {
    const isAuth=useSelector(selectIsAuth)
   
    const dispatch= useDispatch()
    const {register, handleSubmit, formState:{errors}} = useForm({
        defaultValues:{
            email:'tetiana@gmail.com',
            password:'1234567',

        },
        mode:'onChange'
    })

    const onSubmit=async(values)=>{
        const data=await dispatch(fetchAuth(values))
        if(!data.payload){
            return alert('не вдалось авторизуватись')
        }
        if('token' in data.payload){
            window.localStorage.setItem('token', data.payload.token)
        }
    }


    if(isAuth){
        return <Navigate to="/"/>
    }
  return (
    <div className='login'>
        <div>Авторизація</div>
        <form onSubmit={handleSubmit(onSubmit)}>
        <div className='emailBlock block'>
            <div className='emailText text'>Email</div>
            <div>
                <input
                type='text' 
                label="email"
                {...register('email', {required:'Не вказана пошта'})}/>
                {errors.email && <p style={{ color: "red", fontSize: '20px' }}>{errors.email.message}</p>}
            </div>
        </div>
        <div className='passwordBlock block'>
            <div className='passwordText text'>Password</div>
            <div>
                <input 
                label="Password"
                type="password"
                {...register('password', {required:'Не вказан пароль'})}/>
                {errors.password && <p style={{ color: "red", fontSize: '20px' }}>{errors.password.message}</p>}
                
            </div>
        </div>
        <div >
            <button className='button lastButton' >увійти</button>
            <button type='submit' className='button'><Link to="/registration">зареєструватись</Link></button>
        </div>
        </form>
    </div>
  );
}

export default Login;