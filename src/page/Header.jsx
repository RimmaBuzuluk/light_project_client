import React from 'react';
import "../style/Header.css"
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectIsAuth } from '../redux/slice/authReduser';


function Header() {
  const dispatch=useDispatch()
  const isAuth=useSelector(selectIsAuth)
  

  const onClickLogout=()=>{
    if(window.confirm('Ви впевнені що хочете вийти?')){
      dispatch(logout())
      window.localStorage.removeItem('token')
    }
  }
  return (
    <div className='header'>
        <Link to="/" className='main_item'>Light in your home</Link>
        <div className='header_menu'>
            <div className='header_menu__item'>Home</div>
            <div className='header_menu__item'>Home1</div>
            <div className='header_menu__item'>Home2</div>
            <div className='header_menu__item'>Home3</div>
        </div>
        {isAuth? 
        <div>
          <button className='buttExit' onClick={()=>onClickLogout()}>Вийти</button>
        </div>
        :
        <Link to="/registration">зарееструватися</Link>
        }
    </div>
  );
}

export default Header;

