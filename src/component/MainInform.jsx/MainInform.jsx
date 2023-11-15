import React from "react";
import "./MainInform.css"
import { Avatar, Paper, Typography } from "@mui/material";

export const MainInform=()=>{
    return(
       <Paper className="mainInformContainer">
          <Avatar alt="User Avatar" src="URL_ДО_АВАТАРА" className="avatar" />
          <div className="userInfo">
        <Typography variant="h4" gutterBottom>
          Ім'я та фамілія
        </Typography>
        <Typography variant="h5" color="textSecondary">
          Місто
        </Typography>
      </div>
       </Paper>
    )
}