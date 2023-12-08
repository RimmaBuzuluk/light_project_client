import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {addAressAction} from "../store/adressReduser"


function Home() {

  const dispatch=useDispatch()
  const adress=useSelector(state=>state.adress.adress)
  console.log(adress.length)

  const addAdress=()=>{
    const newAdress={
      id_adress:Date.now(),
      content_adress:"Kramatorsk",
      status:false,
      user_id:123
    }
    dispatch(addAressAction(newAdress))
  }

  return (
    <div className='home'>
        <div>имя и фамилия</div>
        <div>
          <button onClick={()=>addAdress()}> add adress</button>
        </div>
        <div className='adressBlocks'>
          {adress.length>0 ? 
          <div>
            {adress.map(adress=><div key={adress.id}>{adress.content_adress}</div>)}
          </div>
          :
          <div>Ви не маєте жодної адреси</div>}
        </div>
    </div>
  );
}

export default Home;