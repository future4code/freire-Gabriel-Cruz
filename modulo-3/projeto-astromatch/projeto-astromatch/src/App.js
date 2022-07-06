import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import './App.css';
import Perfil from './Components/Perfil';
import PagMatch from './Components/PagMatch';

function App() {
  return (
    <Router>
      <header className='nav-perfil'>
        <h1 className='nameTittle'>AstroMatch</h1>
        <a className='link-perf'>
          <Link to='/'>Perfil</Link>
        </a>
        <a className='link-match'>
          <Link to='/pagmatch'>Match</Link>
          </a>
      </header>
      <Routes>
        <Route path='/' element={<Perfil />} />
        <Route path='/pagmatch' element={<PagMatch />} />
      </Routes>  
    </Router>
  );
}

export default App;
