import { Avatar, Button, Paper, TextField, Typography } from "@mui/material";
import React from "react";
import "./registration.css"

export const Registration=()=>{
    return(
        <Paper className="root">
            <Typography className="title" variant="h5">
                Створення акаутна
            </Typography>
            <div className="avatar">
                <Avatar sx={{width:100, height:100}}/>
            </div>
            <TextField className="field" label="Полное имя" fullWidth />
            <TextField className="field" label="E-Mail" fullWidth />
            <TextField className="field" label="Пароль" fullWidth />
            <Button size="large" variant="contained" fullWidth>
                Зарегистрироваться
            </Button>
        </Paper>
    )
}