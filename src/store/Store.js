import { createContext, useContext,useState } from "react";

import React from 'react'
export const context=createContext();


export default function Store(props) {
    const [navbarColor,setNavbarColor]=useState('light')
    const[navtextColor,setNavtextColor]=useState('dark')
    const [footerColor,setFooterColor]=useState('light');
    const [footerTextColor,setFooterTextColor]=useState('dark')
  return (
    <div>
        <context.Provider value={{navbarColor,setNavbarColor,navtextColor,setNavtextColor,footerColor,setFooterTextColor,setFooterColor,footerTextColor}}>
      {props.children}
      </context.Provider>
    </div>
  )
}
