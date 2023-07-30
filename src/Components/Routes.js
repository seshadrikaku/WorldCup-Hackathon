import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Schedule from './Schedule'
import FavoritePage from './FavoritePage'
import Home from './Home'

const Router = () => {
  return (
    <div>
        
        <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route path='/Schedule' element={<Schedule/>}/>
            <Route path='/Favorite' element={<FavoritePage/>}/>
        </Routes>
       
    </div>
  )
}

export default Router