import React from 'react';
import "../style/Home.css"
import { useDispatch, useSelector } from 'react-redux';
import {addAressAction} from "../store/adressReduser"
import AdressItem from '../component/AdressItem';


function Home() {

  const dispatch=useDispatch()
  const adress=useSelector(state=>state.adress.adress)
  // console.log(adress.length)

  const addAdress=()=>{
    const newAdress={
      id_adress:Date.now(),
      content_adress:"101.448.08.22",
      adress_place:"Kramatorsk",
      status:true,
      user_id:123
    }
    dispatch(addAressAction(newAdress))
  }

  return (
    <div className='home'>
        <div className='home__name'>имя и фамилия</div>
        <div className='home__addBut'>
          <button className="buttonAdd button" onClick={()=>addAdress() }> add adress</button>
        </div>
        <div className='adressBlocks'>
          {adress.length>0 ? 
          <div>
            {adress.map(adress=><AdressItem key={adress.id} adressInform={adress}/>)}
          </div>
          :
          <div>Ви не маєте жодної адреси</div>}
        </div>
    </div>
  );
}

export default Home;