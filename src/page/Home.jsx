import React, { useEffect, useState } from 'react';
import "../style/Home.css"
import { useDispatch, useSelector } from 'react-redux';
import { fetchAdress } from '../redux/slice/adressReduser';
import AdressItem from '../component/AdressItem';
import AdressItemSkeleton from '../skeleton/AdressItemSkeleton';
import { fetchAuthMe, selectIsAuth } from '../redux/slice/authReduser';
import HomeSkeleton from '../skeleton/HomeSkeleton';
import AddAdressForm from '../component/AddAdressForm';
import Registration from './Registration';


function Home() {
  const dispatch=useDispatch()
  const [formAdd, setFormAdd] = React.useState(true);
  const {adress}=useSelector(state=>state.adress)
  const {data:userData, status:userStatus} = useSelector(state => state.auth);

  React.useEffect(()=>{
    dispatch(fetchAdress())
    dispatch(fetchAuthMe())
  },[])

  const isAuth=useSelector(selectIsAuth)
  console.log(isAuth)
  if(!isAuth){
    return(<Registration/>)
  }


  const isAdressLoading = adress.status==='loading'
  const isUserLoading = userStatus==='loading'

  if (isUserLoading){
    return(<HomeSkeleton/>)
  }

  const adressItem=adress.items
 
  const userAdresses= adressItem.filter(
    (adressItem)=>adressItem.userId ===userData.id
  )

  const handeleAddAdress = () => {
    
    setFormAdd(!formAdd); 
  };


  return (
    <div className='home'>
      <div className='home__name'>{userData.name} {userData.surname}</div>
        <div className='home__addBut'>
          <button className="buttonAdd button" onClick={handeleAddAdress}> 
          Add adress
          </button>
        </div>
        {formAdd? <div className='formAddAdress'><AddAdressForm/></div>:<div></div>}
        <div className='adressBlocks'>
          {isAdressLoading? <div><AdressItemSkeleton/></div>:
            <div>
              {userAdresses.length>0 ? <div>
              {userAdresses.map(adressSingle=><AdressItem key={adressSingle.id_adress} adressInform={adressSingle}/>)}
            </div>:<div>Ви не маєте жодної адреси</div>}
            </div>
          }
        </div> 
    </div>
  );
}

export default Home;