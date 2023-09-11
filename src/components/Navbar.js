import {Link } from 'react-router-dom'
import {Helmet} from 'react-helmet';
import {useState } from 'react'
export default function Navbar()
{
  const [isLogged,setLogged]=useState(localStorage.getItem('token')?true:false)


const handleLogout=()=>{
localStorage.removeItem('token');
setLogged(false)

}

const handleLogin=async()=>{
  const data={name:"jack",email:'www.google.com',password:'secret'}
const headers = {
  'Content-Type': 'application/json', // Specify the content type as JSON
  // Add any other headers as needed
};
var res=await fetch('http://127.0.0.1:5000/createUser', {
  method: 'POST',          // Specify the HTTP method
  headers: headers,        // Pass the headers object
  body: JSON.stringify(data) // Convert the data to JSON format
})
const token=await res.text();
localStorage.setItem('token',token)
setLogged(true)

  }
return (<><nav className="navbar navbar-expand-lg navbar-dark bg-dark z-3">
 <i className="bi bi-boxes text-light h1 mx-3"></i>
  <Link  className="navbar-brand  " to="#">ಇ-Karನಾಟಕ</Link>

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
        <Link  className="nav-link" to="/search">Search</Link>
      </li>

      <li className="nav-item">
        <Link  className="nav-link" to="/explore">Explore</Link>
      </li>
      <li className="nav-item">
        <Link  className="nav-link" to="/myLearning">My Learning</Link>
      </li>
     

     
    </ul>

  </div>
  
       <button className="btn btn-outline-warning my-2 my-sm-0 mx-2 " type="submit" onClick={isLogged?handleLogout:handleLogin}>{isLogged?'Logout':'Login'}</button>
     <div  id="google_translate_element"></div>
   
    
</nav></>);


}