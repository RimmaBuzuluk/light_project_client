import React, { useEffect } from 'react';
import Header from './page/Header';
import "./style/App.css"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Container } from '@mui/material';
import Home from './page/Home';
import Registration from './page/Registration';
import Login from './page/Login';
import { useDispatch, useSelector } from 'react-redux';
import {  fetchAuthMe, selectIsAuth } from './redux/slice/authReduser';
import AddressItem from './page/AddressItemPage';
import AddressItemPage from './page/AddressItemPage';
import Statistics from './page/Statistics';


function App() {
  const dispatch=useDispatch()
  const isAuth=useSelector(selectIsAuth)

  useEffect(()=>{
    dispatch(fetchAuthMe())
  },[])


  return (
  
    
    <div className='App'>
      <Router>
        <Container>
          <Header/>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/registration' element={<Registration />} />
            <Route path='/login' element={<Login />} />
            <Route path='/address/:id' element={<AddressItemPage />} />
            <Route path='/statistics' element={<Statistics/>} />
          </Routes>
        </Container>
      </Router>
    </div>
  );
}

export default App;