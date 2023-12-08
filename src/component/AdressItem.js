import React from 'react';
import "../style/AdressItem.css"


function AdressItem(adressInform) {

    console.log(adressInform.adressInform.status)
    const adress_content=adressInform.adressInform.content_adress
    const adress_place=adressInform.adressInform.adress_place
    const adress_status=adressInform.adressInform.status

  return (
    <div className='AdressItem'>
        <div>{adress_place}</div>
        <div>{adress_status!==false? 
          <div className='lightBlock lightTrue'>есть</div>
          :
          <div className='lightBlock lightFalse'>нет</div>
        }
        </div>
    </div>
  );
}

export default AdressItem;