import React, {useState, useEffect} from 'react'
import StateNamePlate from './StateNamePlate'
import './states.css'

const States = () => {

  const [data, setData] = useState([])


  const getCovidStateData = async () => {
    const res = await fetch("https://api.covidtracking.com/v1/states/daily.json")
    const actualData = await res.json();
    console.log("New");
    console.log(actualData);
    setData(actualData)
  }

  useEffect(() => {
    getCovidStateData();
  }, [])

  return (
    <div className="states">
      <h1>States</h1>
      {/* StateNames */}
      {
        data.map((curEle, ind) => {
          return (
            <StateNamePlate statename={curEle.state} />
          )
        })
      }
    </div>
  )
}

export default States