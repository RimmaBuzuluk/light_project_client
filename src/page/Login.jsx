import React from 'react';
import "../style/Login.css"
import { Link } from 'react-router-dom';


function Login() {
  return (
    <div className='login'>
        <div>Авторизація</div>
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
            <button className='button lastButton'>увійти</button>
            <button className='button'><Link to="/registration">зареєструватись</Link></button>
        </div>
    </div>
  );
}

export default Login;