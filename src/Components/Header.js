import { NavLink } from 'react-router-dom';
import './Home.css';

const Header = () => {
  return (
   
      <nav className="navbar navbar-expand-lg py-4">
        <div className="container-fluid">
          <a className="navbar-brand fs-2 mx-auto fw-bold" href="#">
            World Cup 2023
          </a>
          <button
            className="navbar-toggler bg-light text-light"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon text-light"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <ul className="navbar-nav ms-auto mx-auto mb-2 mb-lg-0">
              <li className="nav-item mx-auto px-4 fw-bold">
                <NavLink className="nav-link fs-5 active" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item mx-auto px-4 fw-bold">
                <NavLink className="nav-link fs-5" to="/Schedule">
                  DashBoard
                </NavLink>
              </li>
              <li className="nav-item mx-auto px-4 fw-bold">
                <NavLink className="nav-link fs-5" to="/Favorite">
                  Players
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    
  );
};

export default Header;
