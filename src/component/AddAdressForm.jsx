import React, { useEffect, useState } from 'react';
import "../style/AddAdressForm.css";
import { useSelector } from 'react-redux';
import { selectIsAuth } from '../redux/slice/authReduser';
import axios from '../axios';



function AddAdressForm({onSubmit}) {
    const isAuth=useSelector(selectIsAuth)
    const [address, setAddress] = useState(""); // Поміняв назву стейту на setContentAdress
    const [addressPlace, setAddressPlace] = useState("");
    const [isLoading, setIsLoading]=useState(false)
    const [city, setCity]=useState("")


    const onSubmitAdd=async()=>{
        try{
            setIsLoading(true)
            const addressParam={
                address,
                addressPlace,
                city
            }

            const {data}=await axios.post(`/address`,addressParam)
            onSubmit()
        }catch(err){
            console.warn(err)
            alert('Помилка при створенні адреси')
        }
    }

    return (
        <div className='addAdressForm'>
            <div className="addAdressFormTitle">Add new address</div>
            <div className="input_block">
                <div className="input_adress">
                    <div className="title_input_adress title_adress">Address</div>
                    <input type="text" value={address} name="address" onChange={(e) => setAddress(e.target.value)} />
                </div>
                <div className="input_adress" >
                    <div className="title_input_adress_place title_adress">Address place</div>
                    <input type="text" value={addressPlace} name="addressPlace" onChange={(e) => setAddressPlace(e.target.value)} />
                </div>
                <div className="input_adress" >
                    <div className="title_input_adress_place title_adress">City</div>
                    <input type="text" value={city} name="city" onChange={(e) => setCity(e.target.value)} />
                </div>
            </div>
            <button className='buttonAddAdress' onClick={onSubmitAdd}>Add New Address</button>
        </div>
    );
}

export default AddAdressForm;
