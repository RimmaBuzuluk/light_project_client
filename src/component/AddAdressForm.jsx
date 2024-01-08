// import React, { useEffect, useState } from 'react';
// import "../style/AddAdressForm.css";
// import { useSelector } from 'react-redux';
// import { selectIsAuth } from '../redux/slice/authReduser';
// import axios from '../axios';
// import { useNavigate } from 'react-router-dom';

// function AddAdressForm() {
//     const isAuth=useSelector(selectIsAuth)
//     const navigate = useNavigate();
//     const [content_adress, setContentAdress] = useState(""); // Поміняв назву стейту на setContentAdress
//     const [adress_place, setAdressPlace] = useState("");
//     const [token, setToken]=useState("")

//     useEffect(()=>{
//         const userToken=localStorage.getItem('token')
//         if(userToken){
//             setToken(userToken)
//         }
//     },[])

//     const onSubmit = async (e) => {
//         try{
//             if(!token){
//                 console.log("користувач не авторизований")
//                 return;
//             }

//             console.log(token)

//             const response = await axios.post('/adress', {
//                 content_adress: content_adress,
//                 adress_place: adress_place,
//               }, {
//                 headers: {
//                   Authorization: `Bearer ${token}`,
//                   'Content-Type': 'application/json',
//                 },

//               });
//               //Обробка успішної відповіді від сервера (якщо потрібно)
//                 console.log('Address created:', response.data);

//                 // Скидання форми після успішного створення адреси
//                 setContentAdress('');
//                 setAdressPlace('');

//         }catch(err){
//             console.error("error",err)
//         }
//     };
   
//     return (
//         <div className='addAdressForm'>
//             <div className="addAdressFormTitle">Add new address</div>
//             <div className="input_block">
//                 <div className="input_adress">
//                     <div className="title_input_adress title_adress">Address</div>
//                     <input type="text" value={content_adress} name="content_adress" onChange={(e) => setContentAdress(e.target.value)} />
//                 </div>
//                 <div className="input_adress" >
//                     <div className="title_input_adress_place title_adress">Address place</div>
//                     <input type="text" value={adress_place} name="adress_place" onChange={(e) => setAdressPlace(e.target.value)} />
//                 </div>
//             </div>
//             <button className='buttonAddAdress' onClick={onSubmit}>Add New Address</button>
//         </div>
//     );
// }

// export default AddAdressForm;
