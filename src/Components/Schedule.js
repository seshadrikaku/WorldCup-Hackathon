import React, { useEffect, useState } from 'react';
import Data from './data.json'; // Make sure data.json is in the same folder as Schedule.js
import './Home.css'


const Schedule = () => {
  const [jsondata, setJsonData] = useState([]);
  const [filterTeam, setFilterTeam] = useState('');
  const [filterLocation, setFilterLocation] = useState('');
  const [filterDate,setFilterDate]=useState('')
  const [teamNames, setTeamNames] = useState([]);
  const [locationNames, setLocationNames] = useState([]);
  const [date,setDate]=useState([])


  useEffect(() => {
    setJsonData(Data);

    const TeamNames = [...new Set(Data.map(item => item['home-team']))];
    setTeamNames(TeamNames);

    const LocationNames = [...new Set(Data.map(item => item.location))];
    setLocationNames(LocationNames);

    const Dates = [...new Set(Data.map(item=>item.date.split(' ')[0]))]
    setDate(Dates)
  }, []);

  const TeamChange = (event) => {
    setFilterTeam(event.target.value);
  };

  const LocationChange = (event) => {
    setFilterLocation(event.target.value);
  };

  const DateChange = (event) => {
    setFilterDate(event.target.value);
  };


  const ClearFilters = () => {
    setFilterTeam('');
    setFilterLocation('');
    setFilterDate('');

  };

  const filteredData = jsondata.filter(
    (item) =>
      (!filterTeam || item['home-team'] === filterTeam || item['away-team'] === filterTeam) &&
      (!filterLocation || item.location === filterLocation) &&
      (!filterDate || item.date.split(' ')[0] === filterDate)
  );

  return (
    <>

      <div className='container-fluid time-schedule'>
        <div className='row py-3  shadow'>

        <div className='col-12 py-2'>
          <img src='https://pbs.twimg.com/profile_banners/177547780/1689117590/1500x500' className='img-fluid ' style={{borderRadius:"10px"}}/>
        </div>

          <div className='col-12 col-sm-12 col-md-12 col-lg-12 col-xl-6 col-xxl-6'>
            <p className='px-2 py-4 fw-bold'>
              The World Cup, one of the most highly anticipated sporting events in the world,
              captures the hearts of millions and brings nations together in the spirit of competition and camaraderie. Every four years, cricketing nations unite to witness the
              pinnacle of cricketing excellence and witness the battle for supremacy on the grandest stage.
            </p>
            <p className='px-2 py-4 fw-bold'>
            The World Cup is not just a cricket tournament; 
            it's a celebration of the sport, its history, and the passion of the players and fans. It represents the culmination of years of hard work, dedication, 
            and perseverance of teams and players from diverse backgrounds, all striving to lift the coveted trophy.
            </p>
          </div>
          <div className='col-12 col-sm-12 col-md-12 col-lg-12 col-xl-6 col-xxl-6 mb-0'>
            <img src='https://resources.pulse.icc-cricket.com/photo-resources/2023/06/07/d7e3ac6d-cdd2-4548-a89b-0a8c004b0227/ICCFam_PromoBannerwLogo_1920x1080.png?width=860&height=420' className='img-fluid' style={{borderRadius:"20px"}} />
          </div>
        </div>


       
      </div>

      <div className='container-fluid time-schedule' >
        <div className='row py-3' >
          <div className='col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3 col-xxl-3 py-2 text-center'>
            <select className='fw-bold' style={{ height: "40px", width: "80%", borderRadius: "10px", border: "none" }} value={filterTeam} onChange={TeamChange}>
              <option className='fw-bold'  >Teams</option>
              {teamNames.map((teamName) => (
                <option className='fw-bold' key={teamName} value={teamName}>
                  {teamName}
                </option>
              ))}
            </select>
          </div>

          <div className='col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3 col-xxl-3 py-2 text-center'>
            <select
              className='fw-bold'
              style={{ height: "40px", width: "80%", borderRadius: "10px", border: "none" }}
              value={filterDate}
              onChange={DateChange}
            >
              <option className='fw-bold'>Dates</option>
              {date.map((date) => (
                <option className='fw-bold' key={date} value={date}>
                  {date}
                </option>
              ))}
            </select>
          </div>

          <div className='col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3 col-xxl-3 py-2 text-center'>
            <select className='fw-bold' style={{ height: "40px", width: "80%", borderRadius: "10px", border: "none" }} value={filterLocation} onChange={LocationChange}>
              <option className='fw-bold'>Venues</option>
              {locationNames.map((location) => (
                <option className='fw-bold' key={location} value={location}>
                  {location}
                </option>
              ))}
            </select>
          </div>

          <div className='col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3 col-xxl-3 py-2 text-center'>
            <button className='btn  btn btn-light text-dark mb-5 fw-bold' style={{ width: "80%" }} onClick={ClearFilters}>Clear Filters</button>
          </div>

        </div>


        <div className='row'>
          <div className='col-12 ' >
            <table className='table table-hover '>
              <thead>
                <tr style={{height:"50px"}} >
                  <th >Date</th>
                  <th>Match Details</th>
                  <th>Time</th>
                </tr>
              </thead>
              <tbody>
                {filteredData.map((item) => (
                  <tr key={item['match-no']}>
                    <td className='fw-bold'>{item.date.split(' ')[0]}</td>
                    <td className='fw-bold'>
                      {`${item['match-no']}`} Match  
                      <br />
                      {`${item['home-team']}`} <br /><span style={{ fontWeight: "normal" }}> Vs </span><br /> {`${item['away-team']}`}
                      <br />
                      <span style={{ fontWeight: "500" }}>{item.location}</span>
                    </td>
                    <td className='fw-bold'>{item.date.split(' ')[1]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Schedule;
