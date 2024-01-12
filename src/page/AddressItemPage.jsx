import axios from '../axios.js';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import "../style/AddressItemPage.css"
import AddressItemPageSkeleton from '../skeleton/AddressItemPage.jsx';

function AddressItemPage() {
    const [data, setData] = useState()
    const [isLoading, setIsLoading] = useState(true)
    const {id}=useParams()

    useEffect(()=>{
        axios.get(`address/${id}`)
        .then((res)=>{
            setData(res.data)
            setIsLoading(false)
        }).catch((err)=>{
            console.log(err)
            alert('помилка при отриманні адреси')
        })
    },[])

    console.log(data)//чому данні рндеряться безкнечно довго ?

    if(isLoading){
        return <AddressItemPageSkeleton/>
    }

    return (
        <div className='AddressItemPage'>
            <div className="AddressItemPage_addressInform">
                <div className="AddressItemPage__addressPlace">Place - {data.addressPlace}</div>
                <div className="AddressItemPage__address">Year address - {data.address}</div>
                <div className="AddressItemPage__city">Year address`s city - {data.city}</div>
                <div className="AddressItemPage__statistics">
                    <div className="statistics__title">Statistics</div>
                </div>
            </div>
            <div className="AddressItemPage_cityInform">про ваше місто</div>
        </div>
    );
}

export default AddressItemPage;