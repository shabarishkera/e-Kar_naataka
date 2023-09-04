import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import History from './components/History';
import Search from './components/Search'
import Explore from './components/Explore'
import Error from './components/Error'
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
           <Route  exact  path='e-Kar_naataka' element={<Home/>} />
           <Route  exact  path='search' element={<Search/>} />
      <Route path='*' element={<Error />} />
    
       </Routes>
       </Router>
    </div>
  );
}

export default App;
