import React from 'react';
import "../style/Registration.css"
import { Link, Navigate } from 'react-router-dom';
import { useDispatch, useSelector} from 'react-redux';
import { useForm } from 'react-hook-form';
import { fetchRegister, selectIsAuth} from '../redux/slice/authReduser';


function Registration() {
   
   const isAuth = useSelector(selectIsAuth)
    const dispatch= useDispatch()
    const {register, handleSubmit, formState:{errors}} = useForm({
        defaultValues:{
            fullName:'Tetiana Grafova',
            email:'grafova@gmail.com',
            password:'12345',

        },
        mode:'onChange'
    })

    const onSubmit=async(values)=>{
        const data=await dispatch(fetchRegister(values))
        if(!data.payload){
            return alert('не вдалось авторизуватись')
        }
        if('token' in data.payload){
            window.localStorage.setItem('token', data.payload.token)
        }
    }

    console.log(isAuth)
   
    if(isAuth){
        return <Navigate to="/"/>
    }

  return (
    <div className='registration'>
        <div>Реєстрація</div>
        <form onSubmit={handleSubmit(onSubmit)}>
        
        <div className='emailBlock block'>
            <div className='emailText text'>Name</div>
            <div>
                <input
                type='text' 
                label="name"
                {...register('fullName', {required:'Не вказане ім я'})}/>
                {errors.fullName && <p style={{ color: "red", fontSize: '20px' }}>{errors.fullName.message}</p>}
            </div>
        </div>  
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
            <button type='submit' className='button ' >зареєструватись</button>
            <button  className='button lastButton'><Link to="/login">увійти</Link></button>
        </div>
        </form>
        
    </div>
  );
}

export default Registration;