import React from 'react';
import "../style/Registration.css"
import { Link } from 'react-router-dom';


function Registration() {
  return (
    <div className='registration'>
        <div>Реєстрація</div>
        <div className='nameBlock block'>
            <div className='passwordText text'>Name</div>
            <div>
                <input type="text" />
            </div>
        </div>
        <div className='emailBlock block'>
            <div className='emailText text'>Email</div>
            <div>
                <input type="text" />
            </div>
        </div>
        <div className='passwordBlock block'>
            <div className='passwordText text'>Password</div>
            <div>
                <input type="password" />
            </div>
        </div>
        <div >
            <button className='button'>зареєструватись</button>
            <button className='button lastButton'><Link to="/login">увійти</Link></button>
        </div>
        
    </div>
  );
}

export default Registration;