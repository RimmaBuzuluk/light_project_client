import React from "react";
import "./IpBlock.css"
import { Avatar, Button, Paper, Typography } from "@mui/material";
import { AdressItem } from "../AdressItem/AdressItem";

export const IpBlock=()=>{
    return(
       <Paper className="IpBlockContainer" sx={{display:"flex", justifyContent:"space-between", padding:'10px', margin:'10px 0 10px 0'}}> 
            <div className="adressItems">
                <AdressItem/>
                <AdressItem/>
            </div>
            <Button className="button">add new adress</Button>
            
       </Paper>
    )
}