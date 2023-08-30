import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import History from './components/History';
import Explore from './components/Explore'
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Home from './components/Home'

function App() {
  return (
    <div className="App">
     <Router>
     <Navbar/>
       <Routes>
       
     <Route  exact  path='/' element={<Home/>} />
         <Route  exact  path='history' element={<History/>} />
           <Route  exact  path='explore' element={<Explore/>} />
    
       </Routes>
       </Router>
    </div>
  );
}

export default App;
