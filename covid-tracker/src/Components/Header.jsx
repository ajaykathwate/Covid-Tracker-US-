import React from 'react'


const Header = () => {
    return (
        <div style={{
            display: 'flex',
            width: '100%',
            height: '10vh',
            alignItems: 'center',
            justifyContent:'center',
            fontFamily: 'Kalam, cursive',
            backgroundColor: 'cyan'}} className="header">
            <h1 syle={{ fontSize: '40px' }}>Covid-19 Tracker <sup style={{ verticalAlign: 'super', fontSize: '12px' }}>US</sup></h1>
        </div>
    )
}

export default Header