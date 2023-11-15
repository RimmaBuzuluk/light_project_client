import React from "react";
import "./Home.css"
import { IpBlock } from "../../component/IpBlock/IpBlock";
import { MainInform } from "../../component/MainInform.jsx/MainInform";

export const Home=()=>{
    return(
       <div>
            <MainInform/>
            <IpBlock/>
       </div>
    )
}