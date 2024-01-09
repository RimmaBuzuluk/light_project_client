import React, { useEffect, useState } from 'react';
import "../style/Home.css"
import { useDispatch, useSelector } from 'react-redux';
import { fetchAddress } from '../redux/slice/adressReduser';
import HomeSkeleton from '../skeleton/HomeSkeleton';
import { selectIsAuth } from '../redux/slice/authReduser';
import AdressItem from '../component/AdressItem';
import AdressItemSkeleton from '../skeleton/AdressItemSkeleton';


function Home() {
  const dispatch=useDispatch()
  const {data:userData, status:userStatus} = useSelector(state => state.auth);
  const addressData = useSelector(state => state.address);

  useEffect(()=>{
    dispatch(fetchAddress())
  },[])

  const isAuth=useSelector(selectIsAuth)
  const isUserLoading = userStatus==='loading'
  const isAdressLoading = addressData.status==='loading'

  if (isUserLoading || !isAuth){
    return(<HomeSkeleton/>)
  }

  return (
    <div className='home'>
      <div className='home__name'>{userData.fullName}</div>
        <div className='home__addBut'>
          <button className="buttonAdd button">Add address</button>
        </div>
        {/* {isAdressLoading? <div className='formAddAdress'><AddAdressForm/></div>:<div></div>} */}
        <div className='adressBlocks'>
          {isAdressLoading? <div><AdressItemSkeleton/></div>:
            <div>
              {addressData.items.length>0 ? <div>
                {addressData.items.map(address=><AdressItem key={address._id} address={address}/>)}
              </div>
              :
              <div>Ви не маєте жодної адреси</div>}
            </div>
          }
        </div> 
    </div>
  );
}

export default Home;