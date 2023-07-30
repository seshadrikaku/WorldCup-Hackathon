import React from 'react'
import './Home.css'
import CountdownTimer from './CountTime'
const Home = () => {
  return (
    <div>
      <div className='container-fluid'>
        <div className="row">
          <div className="col-12">
            <div className='py-2'>
              <img src='https://resources.pulse.icc-cricket.com/photo-resources/2023/06/27/6c263507-13b0-49a5-a93d-61c70489f91a/3NxwSOsk.jpg?width=860&height=420' className='img-fluid w-100 ' style={{borderRadius:"10px"}}/>
            </div>
          </div>
          </div>
          <div className='row shadow'>
          <div className='col-12 col-sm-12 col-md-12 col-lg-12 col-xl-6 col-xxl-6'>
            <div className=' my-1 py-4  ' >
              <h2 className='text-center fw-bold'>Countdown to World Cup 2023..!</h2><br/>
              <h2 className='text-center fw-bold  '> <CountdownTimer /></h2><br/>
              <p className='px-3 py-1 fw-bold'>Only a few days to go until the excitement begins.
                Get ready to witness the world's most thrilling cricket tournament as teams from across the globe battle
                it out for glory in the World Cup 2023!</p>
              <p className='px-3 py-1 fw-bold'>Mark your calendars and be a part of this epic cricketing spectacle.
                World Cup 2023, get ready for the ultimate showdown!
                <br /><br />
                Let the countdown begin! 🏏⏳</p>
              <p className='px-3 py-1 fw-bold'>Stay tuned for jaw-dropping matches, incredible moments,
                and unforgettable memories. The stage is set, the players are geared up,
                and the world is waiting in anticipation.</p>
            </div>
          </div>
          <div className='col-12 col-sm-12 col-md-12 col-lg-12 col-xl-6 col-xxl-6 text-center'>
            <div>
              <img src='https://resources.pulse.icc-cricket.com/photo-resources/2022/07/01/d3c7dcd0-9b3d-441e-a66e-ec37baddbe5a/GettyImages-1348518130-1-.png?width=660&height=469' style={{borderRadius:"10px"}} className='img-fluid' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home