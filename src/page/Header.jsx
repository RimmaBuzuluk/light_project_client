import React from 'react';
import "../style/Header.css"
import { Link } from 'react-router-dom';


function Header() {
  return (
    <div className='header'>
        <Link to="/" className='main_item'>Light in your home</Link>
        <div className='header_menu'>
            <div className='header_menu__item'>Home</div>
            <div className='header_menu__item'>Home1</div>
            <div className='header_menu__item'>Home2</div>
            <div className='header_menu__item'>Home3</div>
        </div>
        <Link to="/registration">зарееструватися</Link>
        
    </div>
  );
}

export default Header;

