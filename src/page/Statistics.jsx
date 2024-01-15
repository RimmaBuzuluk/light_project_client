import React from 'react';
import "../style/Header.css"
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectIsAuth } from '../redux/slice/authReduser';


function Statistics() {

  return (
    <div className='statistics'>
        статистика
    </div>
  );
}

export default Statistics;