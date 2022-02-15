import React from 'react'
import './results.css'


const StateDetails = (props) => {
    return (
        <div className="statedetails">
            <div className="results">
                <h1 style={{ padding: '20px 0 10px 0' }}>{props.curState.state} State</h1>
                <div className="state-data">
                    <table>
                        {/* <thead>
            <tr>
              <th>Name</th>
              <th>ID</th>
              <th>Favorite Color</th>
            </tr>
          </thead> */}
                        <tbody>
                            <tr>
                                <td>Total</td>
                                <td>{props.curState.totalTestResults}</td>
                            </tr>
                            <tr>
                                <td>Active</td>
                                <td>{props.curState.positive}</td>
                            </tr>
                            <tr>
                                <td>Recovered</td>
                                <td>{props.curState.totalTestResults - props.curState.positive}</td>
                            </tr>
                            <tr>
                                <td>Hospitalized</td>
                                <td>{props.curState.hospitalized}</td>
                            </tr>
                            <tr>
                                <td>Deaths</td>
                                <td>{props.curState.death}</td>
                            </tr>
                        </tbody>
                    </table>

                </div>
            </div>
        </div>
    )
}

export default StateDetails