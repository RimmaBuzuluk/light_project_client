import React from 'react';
import "../style/AddAdressForm.css"
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { addNewAdress } from '../redux/slice/adressReduser';
import axios from '../axios';

function AddAdressForm() {
   

    return (
        <div className='addAdressForm'>

        </div>
    );
}

export default AddAdressForm;
