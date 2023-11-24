import {Link ,useNavigate} from 'react-router-dom'
import {Helmet} from 'react-helmet';
import {useState } from 'react'
import ConfirmBox from './ConfirmBox'
export default function Navbar()
{
  const [isLogged,setLogged]=useState(localStorage.getItem('token')?true:false)
const [modalvisible,setmodalvisible]=useState(false);
const nav=useNavigate();
const handleLogout=()=>{
localStorage.removeItem('token');
setLogged(false)
setmodalvisible(false)
window.location.reload();

}

const handleLogin=async()=>{
 nav("/login");

  }
return (<><nav className="navbar navbar-expand-lg navbar-dark bg-dark z-3">
 <i className="bi bi-boxes text-light h1 mx-3"></i>
  <Link  className="navbar-brand  " to="#">ಇ-Karನಾಟಕ</Link>

{/* use an comformation box that gets a state and a function  */}
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
 <ConfirmBox modalvisible={modalvisible}title={'Logout'} message={'Are you sure to logout ?'} setmodelvisible={setmodalvisible} handlerfunction={handleLogout}/>
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
     <li className="nav-item">
     <button className="btn btn-outline-warning my-2 my-sm-0 mx-2 log-in-out-btn " type="submit" onClick={localStorage.getItem('token')?()=>{setmodalvisible(true)}:handleLogin}>{localStorage.getItem('token')?'Logout':'Login'}</button>
     </li>

     
    </ul>

  </div>
  
       
     <div  id="google_translate_element"></div>
   
    
</nav></>);


}