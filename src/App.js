import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import History from './components/History';
import Search from './components/Search'
import Explore from './components/Explore'
import Error from './components/Error'
import NetworkError from './components/NetworkError'
import Footer from './components/Footer'
import MyLearning from './components/MyLearning'
import DolluKunitha from './artforms/DolluKunitha'
import Learn from './components/Learn'
import Veeragase from './artforms/Veeragase'
import GanapadaGeethe from './artforms/GanapadaGeethe'
import Kamsale from './artforms/Kamsale'
import TigerDance from './artforms/TigerDance';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Home from './components/Home'
import BharathNatyam from './artforms/BharathNatyam'
import Veena from './artforms/Veena'

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
           <Route  exact  path='networkError' element={<NetworkError/>} />
           <Route  exact  path='history/dolluKunitha' element={<DolluKunitha/>} />
            <Route  exact  path='history/veeragase' element={<Veeragase/>} />
             <Route  exact  path='history/kamsale' element={<Kamsale/>} />
                <Route  exact  path='history/tigerDance' element={<TigerDance/>} />
                 <Route  exact  path='history/bharathnatyam' element={<BharathNatyam/>} />

                  <Route  exact  path='history/veena' element={<Veena/>} />
            <Route  exact  path='history/ganapadaGeethe' element={<GanapadaGeethe/>} />
            <Route  exact  path='explore/learn' element={<Learn/>} />
             <Route  exact  path='myLearning' element={<MyLearning/>} />
      <Route path='*' element={<Error />} />
    
       </Routes>
       <Footer/>
       </Router>
    </div>
  );
}

export default App;
