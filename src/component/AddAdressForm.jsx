import React, { useEffect, useState } from 'react';
import "../style/AddAdressForm.css";
import { useDispatch, useSelector } from 'react-redux';
import { selectIsAuth } from '../redux/slice/authReduser';
import axios from '../axios';
import { InputLabel, MenuItem, Select } from '@mui/material';
import { fetchCity } from '../redux/slice/cityReduser';
import { FixedSizeList as List } from 'react-window';



function AddAdressForm({onSubmit}) {
    const dispatch=useDispatch()
    const isAuth=useSelector(selectIsAuth)
    const [address, setAddress] = useState(""); // Поміняв назву стейту на setContentAdress
    const [addressPlace, setAddressPlace] = useState("");
    const [isLoading, setIsLoading]=useState(false)
    const [selectedCity, setSelectedCity]=useState("")

    const {items:CityData, status:CityStatus} = useSelector(state => state.city);

    useEffect(()=>{
        dispatch(fetchCity())
      },[])

    const isCityLoading = CityStatus.status==='loading'

    // const city=CityData[0].name
    // console.log('CityData:', city);//чернигів



    const onSubmitAdd=async()=>{
        try{
            setIsLoading(true)
            const addressParam={
                address,
                addressPlace,
                city: selectedCity
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
                    <InputLabel className="title_input_adress_place title_adress">City</InputLabel>
                    <Select type="text" value={selectedCity} name="city" onChange={(e) => setSelectedCity(e.target.value)}>
                    {/* Відображення елементів списку міст */}
                    {isCityLoading
                        ? <div>Завантаження...</div>
                        : (
                            CityData
                       ?
                          <List
                            height={200}
                            itemCount={CityData.length}
                            itemSize={35}
                            width={300}
                          >
                            {({ index, style }) => (
                                        <MenuItem key={CityData[index]._id} value={CityData[index].name} style={style}>
                                            {CityData[index].name}
                                        </MenuItem>
                                    )}
                          </List>
                       :
                       <div>no</div>
                        )}
                    </Select>
                </div>
            </div>
            <button className='buttonAddAdress' onClick={onSubmitAdd}>Add New Address</button>
        </div>
    );
}

export default AddAdressForm;
