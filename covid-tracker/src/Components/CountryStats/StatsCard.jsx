import React from 'react'
import './statscard.css'

const StatsCard = (props) => {
  return (
      <div className="card-stats">
          <div className="card-inner">
              <h3 id="head">{props.heading}</h3>
              <h5 id="cases">{props.cases}</h5>
          </div>
          
      </div>
  )
}

export default StatsCard