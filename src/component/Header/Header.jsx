import { Button, Container } from '@mui/material';
import React from 'react';
import "./Header.css"
import { Link } from 'react-router-dom';

export const Header = () => {
  const isAuth = false;

  const onClickLogout = () => {};

  return (
    <div className='root_header'>
      <Container maxWidth="lg">
        <div  className="inner">
            <Link to="/"><div className='light'>LIGHT</div></Link>
          <div className="buttons">
            {isAuth ? (
              <>
                <a className='logo' href="/posts/create">
                  <Button variant="contained">Написать статью</Button>
                </a>
                <Button onClick={onClickLogout} variant="contained" color="error">
                  Выйти
                </Button>
              </>
            ) : (
              <>
                <Link to="/login">
                  <Button variant="outlined">Войти</Button>
                </Link>
                <Link to="/register">
                  <Button className='butt' variant="contained">Создать аккаунт</Button>
                </Link>
              </>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
};