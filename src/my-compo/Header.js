import React from 'react'

    const style={
        marginTop:'0',
        fontSize:'35px',
        background:'navy',
        color:'#ffff',
        padding:'15px',
        textTransform:'uppercase',

    }

const Header = ({title}) => {
  return (
    <header>
        <h1 style={style}>
        {title} </h1>
    </header>
  )
}

export default Header