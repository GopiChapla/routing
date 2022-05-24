import './App.css';
import Home from './Home';
//import About from './About';
//import Contact from './Contact';
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import About from './About';
import Contact from './Contact';

function App() {
  return (
    <div>   
      <Router>
        <Link to="">Home</Link><br></br>
        <Link to='/about'>About</Link><br></br>
        <Link to='/contact'>Contact</Link>
        
    <Routes>
    <Route path="/" element={<Home/>} /> 
    <Route path="/about" element={<About/>} /> 
    <Route path="/contact" element={<Contact/>} /> 
      </Routes>   

      </Router> 
      
    </div>

  );
}

export default App;
