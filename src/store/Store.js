import { createContext, useContext,useState } from "react";

import React from 'react'
export const context=createContext();


export default function Store(props) {
    const [navbarColor,setNavbarColor]=useState('light')
    const[navtextColor,setNavtextColor]=useState('dark')
  return (
    <div>
        <context.Provider value={{navbarColor,setNavbarColor,navtextColor,setNavtextColor}}>
      {props.children}
      </context.Provider>
    </div>
  )
}
