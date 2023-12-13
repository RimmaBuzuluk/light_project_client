import React from 'react';
import "../style/Registration.css"
import { Link } from 'react-router-dom';
import { useDispatch} from 'react-redux';
import { useForm } from 'react-hook-form';
import { fetchRegister} from '../redux/slice/authReduser';


function Registration() {
   
   
    const dispatch= useDispatch()
    const {register, handleSubmit, formState:{errors}} = useForm({
        defaultValues:{
            surname:'Pupkin',
            name:'Vasya',
            city:'Kramatorsk',
            email:'vasya@gmail.com',
            password:'1234567',

        },
        mode:'onChange'
    })

    const onSubmit=async(values)=>{
        const data=await dispatch(fetchRegister(values))
        if(!data.payload){
            return alert('не вдалось зареєструватись')
        }
        if('token' in data.payload){
            window.localStorage.setItem('token', data.payload.token)
        }
    }

  return (
    <div className='registration'>
        <div>Реєстрація</div>
        <form onSubmit={handleSubmit(onSubmit)}>
        <div className='emailBlock block'>
            <div className='emailText text'>Surmane</div>
            <div>
                <input
                type='text' 
                label="surname"
                {...register('surname', {required:'Не вказане призвище'})}/>
                {errors.surname && <p style={{ color: "red", fontSize: '20px' }}>{errors.surname.message}</p>}
            </div>
        </div>
        <div className='emailBlock block'>
            <div className='emailText text'>Name</div>
            <div>
                <input
                type='text' 
                label="name"
                {...register('name', {required:'Не вказане ім я'})}/>
                {errors.name && <p style={{ color: "red", fontSize: '20px' }}>{errors.name.message}</p>}
            </div>
        </div>
        <div className='emailBlock block'>
            <div className='emailText text'>City</div>
            <div>
                <input
                type='text' 
                label="city"
                {...register('city', {required:'Не вказана пошта'})}/>
                {errors.city && <p style={{ color: "red", fontSize: '20px' }}>{errors.city.message}</p>}
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