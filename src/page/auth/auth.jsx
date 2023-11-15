import React from "react";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";

import "./auth.css";

export const Login = () => {
  return (
    <Paper style={{ marginTop: '20%' }} classes="root">
      <Typography classes="title" variant="h5">
        Вход в аккаунт
      </Typography>
      <TextField
        className="field"
        label="E-Mail"
        error
        helperText="Неверно указана почта"
        fullWidth
      />
      <TextField className="field" label="Пароль" fullWidth />
      <Button size="large" variant="contained" fullWidth>
        Войти
      </Button>
    </Paper>
  );
};