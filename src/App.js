import './App.css';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Pages from './Pages';
import Conditional from './Conditional';
import Odd from './Odd';
import Getinput from './Getinput';
import Objectmap from './Objectmap';
import Arraydestructure from './Arraydestructure';
import Arraymap from './Arraymap';
import Parent from './Parent';

function App() {
  return (
    <>
      <Router>
        <Navbar></Navbar>
        <div className='pages'>
          <Pages></Pages>
        </div>
        <div className='content'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path='/conditionalRendering' element={<Conditional />} />
            <Route path='/odd' element={<Odd />} />
            <Route path='/getinput' element={<Getinput />} />
            <Route path='/objectmapshow' element={<Objectmap />} />
            <Route path='/arraydestructure' element={<Arraydestructure/>}/>
            <Route path='/arraymap' element={<Arraymap/>}/>
            <Route path='/parent' element={<Parent/>}/>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
