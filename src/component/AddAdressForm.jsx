import React from 'react';
import "../style/AddAdressForm.css"
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { addNewAdress } from '../redux/slice/adressReduser';
import axios from '../axios';

function AddAdressForm() {
    const dispatch = useDispatch();

    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        defaultValues:{
            contentAdress:'000.000.00.00',
            contentAdressPlace:'office' // Corrected typo in 'office'
        },
        mode:'onChange'
    }); 

    const onSubmit = async(data) => {
        try{
            const token =localStorage.getItem('token')
            if(!token){
                console.error("токен авторизації відсутній")
                return;
            }
            const config={
                headers:{
                    'Authorization':`Bearer ${token}`
                }
            }
            console.log(token)//поверає справжній токен
            console.log(config)

            // const response=await axios.post('/adress', data, config)
            // console.log('Успішно створено нову адресу:', response.data);
            // dispatch(addNewAdress(data))
            // reset()
        } catch (error) {
            console.error('Помилка під час створення адреси:', error);
        }
    }

    return (
        <div className='addAdressForm'>
            <form onSubmit={handleSubmit(onSubmit)} className='addAdressForm'>
                <div className="adressFormName">Нова адреса</div>
                <div className='addLabels'>
                    <label>
                        <div className='adress_label'>Content Address:</div>
                        <input {...register('contentAdress', { required: 'Не вказана адреса' })}/>
                        {errors.contentAdress && <p style={{ color: "red", fontSize: '20px' }}>{errors.contentAdress.message}</p>}
                    </label>
                    <label>
                        <div className='adress_label'>Address Place:</div>
                        <input {...register('contentAdressPlace', { required: 'Не вказане місце' })}/>
                        {errors.contentAdressPlace && <p style={{ color: "red", fontSize: '20px' }}>{errors.contentAdressPlace.message}</p>}
                    </label>
                    <button type='submit'>Add address</button>
                </div>
            </form>
        </div>
    );
}

export default AddAdressForm;
