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
import Purecomponentdemo from './Purecomponentdemo';
import Uncontrolled from './Uncontrolled';
import Controlled from './Controlled';
import Hocdemo from './Hocdemo';
import Fetchapi from './Fetchapi';
import Axiosget from './Axiosget';
import Axiospost from './Axiospost';
import Axiosput from './Axiosput';
import Axiosdelete from './Axiosdelete';

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
            <Route path='/arraydestructure' element={<Arraydestructure />} />
            <Route path='/arraymap' element={<Arraymap />} />
            <Route path='/parent' element={<Parent />} />
            <Route path='/purecomponent' element={<Purecomponentdemo />} />
            <Route path='/uncontrolled' element={<Uncontrolled />} />
            <Route path='/controlled' element={<Controlled />} />
            <Route path='/hoc' element={<Hocdemo />} />
            <Route path='/fetchapi' element={<Fetchapi />} />
            <Route path='/axiosget' element={<Axiosget />} />
            <Route path='/axiospost' element={<Axiospost />} />
            <Route path='/axiosput' element={<Axiosput />} />
            <Route path='/axiosdelete' element={<Axiosdelete />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
