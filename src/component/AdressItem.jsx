// import React from 'react';
// import "../style/AdressItem.css"
// import { useDispatch } from 'react-redux';
// import { removeAressAction } from '../redux/slice/adressReduser';


// function AdressItem({adressInform}) {
 
//     // const dispatch=useDispatch()
//     // console.log(adressInform.adressInform.id_adress)//повертає всі адреси елементів які були створені, а не лише той шо творили зараз
//     const { id_adress, adress_place, status } = adressInform;

//     // console.log(id_adress)


//     const removeAdress=()=>{
//       // dispatch(removeAressAction(id_adress))
//     }

//   return (
//     <div className='adressItem__Block'>
//       <div className='AdressItem'>
//           <div>{adress_place}</div>
//           <div>{false!==false? 
//             <div className='lightBlock lightTrue'>есть</div>
//             :
//             <div className='lightBlock lightFalse'>нет</div>
//           }
//           </div>
//       </div>
//       <div className='blockButt__delete'><button onClick={removeAdress} className='beleteBut'><img src="data:image/png;base64,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" alt="" /></button></div>
//     </div>
//   );
// }

// export default AdressItem;