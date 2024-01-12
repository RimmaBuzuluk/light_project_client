
import React, { useEffect, useState } from 'react';
import "../style/AddAdressForm.css";
import { useDispatch, useSelector } from 'react-redux';
import { selectIsAuth } from '../redux/slice/authReduser';
import axios from '../axios';
import SerchCity from './SerchCity';
import { useNavigate } from 'react-router-dom';

function AddAdressForm({onSubmit}) {
    const dispatch = useDispatch();
    const navigate=useNavigate()
    const isAuth = useSelector(selectIsAuth);
    const [address, setAddress] = useState("");
    const [addressPlace, setAddressPlace] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [selectedCity, setSelectedCity] = useState("");

    const handleSelectCity = (cityName) => {
        setSelectedCity(cityName);
    };

    const onSubmitAdd = async () => {
        try {
            setIsLoading(true);
            const addressParam = {
                address,
                addressPlace,
                city: selectedCity,
            };

            const { data } = await axios.post(`/address`, addressParam);
            onSubmit();
            navigate(`/address/${data._id}`)
        } catch (err) {
            console.warn(err);
            alert('Помилка при створенні адреси');
        }
    };

    console.log("sele",selectedCity)

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
                <SerchCity onSelectCity={handleSelectCity} setSelectedCity={setSelectedCity} />
            </div>
            <button className='buttonAddAdress' onClick={onSubmitAdd}>Add New Address</button>
        </div>
    );
}

export default AddAdressForm;
