import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Schedule from './Schedule'
import FavoritePage from './FavoritePage'
import Home from './Home'

const Router = () => {
  return (
    <div>
        <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route path='/Schedule' element={<Schedule/>}/>
            <Route path='/Favorite' element={<FavoritePage/>}/>
        </Routes>
        </BrowserRouter>
    </div>
  )
}

export default Router