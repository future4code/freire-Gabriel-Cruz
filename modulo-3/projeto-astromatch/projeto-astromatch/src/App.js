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
        <button className='link-perf'>
          <Link to='/'>Perfil</Link>
        </button>
        <button className='link-match'>
          <Link to='/pagmatch'>Match</Link>
          </button>
      </header>
      <Routes>
        <Route path='/' element={<Perfil />} />
        <Route path='/pagmatch' element={<PagMatch />} />
      </Routes>  
    </Router>
  );
}

export default App;
