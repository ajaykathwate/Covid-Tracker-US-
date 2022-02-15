import React, {useEffect, useState} from 'react'
import StatsCard from './StatsCard'
import './country.css'

const Country = (props) => {

    const [data, setData] = useState([]);

    const getCovidData = async ()=>{
        try {
            const res = await fetch('https://api.covidtracking.com/v1/us/current.json');
            const actualData = await res.json();
            console.log(actualData[0]);
            setData(actualData[0])
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() =>{
        getCovidData();
    },[])

    return (
        <div className="country-stats">
            <h1 className="c-stats-heading">Country Stats</h1>
            <div className="stats">
                {/* Card */}
                <StatsCard heading="Total" cases={data.totalTestResults} />
                <StatsCard heading="Active" cases={data.positive} />
                <StatsCard heading="Recovered" cases={data.totalTestResults - data.positive} />
                <StatsCard heading="Deaths" cases={data.death} />
            </div>
        </div>
    )
}

export default Country