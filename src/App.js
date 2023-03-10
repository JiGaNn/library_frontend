import logo from './logo.svg';
import './App.css';
import {Home} from './components/Home';
import {Readers} from './components/Readers';
import {Publishers} from './components/Publishers';
import { BrowserRouter, Route, Routes, NavLink } from 'react-router-dom';

function App() {
  return (
    <div  style={{ backgroundImage: "url(/img/background.jpg)" }}>
    <BrowserRouter>
    <div className="App container" style={{ backgroundColor: "white" }}>
      <h3 className='d-flex justify-content-center m-3'>
        Library
      </h3>
      <nav className='navbar navbar-expand-sm bg-light navbar-dark'>
        <ul className='navbar-nav'>
          <li className='nav-item m-1'>
            <NavLink className="btn btn-light btn-outline-primary" to="/home">
              Home
            </NavLink>
          </li>
          <li className='nav-item m-1'>
            <NavLink className="btn btn-light btn-outline-primary" to="/readers">
              Readers
            </NavLink>
          </li>
          <li className='nav-item m-1'>
            <NavLink className="btn btn-light btn-outline-primary" to="/publishers">
              Publishers
            </NavLink>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/readers' element={<Readers/>}/>
        <Route path='/publishers' element={<Publishers/>}/>
      </Routes>
    </div>
    </BrowserRouter>
    </div>
  );
}

export default App;
