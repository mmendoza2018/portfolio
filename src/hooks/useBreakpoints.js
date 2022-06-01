import React from 'react';
import { useState } from "react";

export default function useResponsive (){
  const [breackpointH, setBreackpointH] = useState(true)
  const responsive = (e) =>{
          if (e.matches) {
              //console.log("pc"); 
              setBreackpointH(true)
            }else{
              //return {breackpoint:false}
              setBreackpointH(false)
              //console.log("movil");
          }
        }
        
        let breakpoint = window.matchMedia("(min-width: 500px)")
        breakpoint.addListener(responsive)
        responsive(breakpoint)
        return breackpointH;
  //console.log("innerWidht"+ window.innerWidth);
}