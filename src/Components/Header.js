import React, { useEffect, useState } from 'react'
import './Home.css'

const Header = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg  py-4 " >
                <div className="container-fluid">
                    <a className="navbar-brand fs-2 mx-auto fw-bold" href="/Schedule">World Cup 2023</a>
                    <button className="navbar-toggler bg-light text-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon text-light"></span>
                    </button>
                    <div className="collapse navbar-collapse " id="navbarNavAltMarkup">
                        <div className="navbar-nav mx-auto ">
                            <a className="nav-link active mx-auto text-light  fw-bold" aria-current="page" href="/">Home</a>
                            <a className="nav-link text-light mx-auto fw-bold" href="/Schedule">Dashboard</a>
                            <a className="nav-link text-light mx-auto fw-bold" href="/Favorite">Players</a>
                        </div>
                    </div>
                </div>
            </nav>
            
        </>


    )
}

export default Header