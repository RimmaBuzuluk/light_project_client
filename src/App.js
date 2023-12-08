import React from 'react';
import Header from './page/Header';
import "./style/App.css"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Container } from '@mui/material';
import Home from './page/Home';
import Registration from './page/Registration';
import Login from './page/Login';


function App() {
  
  return (
    
    <div className='App'>
      <Router>
        <Container>
          <Header/>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/registration' element={<Registration />} />
            <Route path='/login' element={<Login />} />
          </Routes>
        </Container>
      </Router>
    </div>
  );
}

export default App;