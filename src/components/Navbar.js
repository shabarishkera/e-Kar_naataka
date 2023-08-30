import {Link } from 'react-router-dom'
export default function Navbar()
{
return (<><nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <Link  className="navbar-brand mx-5" to="#">ಇ-Karನಾಟಕ</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavDropdown">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <Link  className="nav-link" to="/">Home</Link>
      </li>
      <li className="nav-item">
        <Link  className="nav-link" to="/history">History</Link>
      </li>
      <li className="nav-item">
        <Link  className="nav-link" to="/">Search</Link>
      </li>

      <li className="nav-item">
        <Link  className="nav-link" to="/explore">Explore</Link>
      </li>
      <li className="nav-item">
        <Link  className="nav-link" to="/">My Learning</Link>
      </li>
  
    </ul>
  </div>
</nav></>);


}