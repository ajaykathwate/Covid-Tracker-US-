import React, { useState, useEffect } from 'react'
import './results.css'
import './states.css'
import StateNamePlate from './StateNamePlate'
import StateDetails from './StateDetails'

const Results = () => {

  const [curState, setCurState] = useState([])

  const [data, setData] = useState([])


    const getCovidStateData = async () => {
    const res = await fetch(" https://api.covidtracking.com/v1/states/current.json")
    const actualData = await res.json();
    console.log("New");
    console.log(actualData);
    setData(actualData)
  }


  useEffect(() => {
    getCovidStateData();
  }, [])

  const handleOnClick = (ind)=>{
    console.log(ind);
    console.log(data[ind]);
    setCurState(data[ind]);
    setStateData(stateData[ind]);
    console.log("111111 ",stateData[0]);
  }

  return (
    <div className="StateResults">
      {/* States */}
      <div className="states">
        <h1>States</h1>
        {/* StateNames */}
        {
          data.map((curEle, ind) => {
            return (
              <StateNamePlate ind={ind} handleOnClick={handleOnClick} statename={curEle.state} />
            )
          })
        }
      </div>
      {/* Results */}
      <StateDetails  curState={curState}/>
      
    </div>

  )
}

export default Results