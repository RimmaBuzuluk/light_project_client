import React from 'react';
import "../style/AddAdressForm.css"
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { addNewAdress } from '../redux/slice/adressReduser';
import axios from '../axios';

function AddAdressForm() {
   

    return (
        <div className='addAdressForm'>
            <div className="addAdressFormTitle">Add new adress</div>
            <div className="input_block">
                <div className="input_adress">
                    <div className="title_input_adress title_adress">adress</div>
                    <input type="text" />
                </div>
                <div className="input_adress" >
                    <div className="title_input_adress_place title_adress">adress place</div>
                    <input type="text" />
                </div>
            </div>
        </div>
    );
}

export default AddAdressForm;
