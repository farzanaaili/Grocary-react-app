import React from 'react'



const Footer = ({length}) => {

    const style={
      
        fontSize:'25px',
        background:'navy',
        color:'#ffff',
        padding:'15px'

    }
  return (
    <div style={style}>
    <h4>{length} List {length===1 ? "item" : "items"} </h4>
    </div>
  )
}

export default Footer