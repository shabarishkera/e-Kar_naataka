import React from 'react'

export default function ConfirmBox({modalvisible,title,message,handlerfunction,setmodelvisible}) {
    console.log("modal is "+modalvisible)
    const handlecancel=()=>{
        // hide the model 
        setmodelvisible(false)

    }
  return (
    <div style={{'display':modalvisible?'block':'none'}}className='container container_confirm bg-light rounded-4 p-3 
    '>
        <h2 className='text-danger'>{title}</h2>
        <p className='text-dark'>{message}</p>
        <button className='btn btn-success mx-3' onClick={handlerfunction} >ok</button>
        <buttton className='btn btn-primary' onClick={handlecancel}>cancel</buttton>
    </div>
  )
}
