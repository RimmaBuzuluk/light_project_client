import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Container from '@mui/material/Container';
import { Header } from './component/Header/Header';
import { Registration } from './page/registartion/registration';
import { Login } from './page/auth/auth';
import { Home } from './page/Home/Home';

function App() {
  return (
    <Router>
      <Container>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/register' element={<Registration />} />
          <Route path='/login' element={<Login/>} />
        </Routes>
        
      </Container>
    </Router>
  );
}

export default App;

