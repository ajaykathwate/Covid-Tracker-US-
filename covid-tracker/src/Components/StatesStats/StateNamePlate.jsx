import React, {useState} from 'react'
import './statename.css'
// import {data} from './States'

const StateNamePlate = (props) => {

  return (
    <button onClick={() => props.handleOnClick(props.ind) }  className="statename-plate">
        <p>{props.statename}</p>
    </button>
  )
}

export default StateNamePlate