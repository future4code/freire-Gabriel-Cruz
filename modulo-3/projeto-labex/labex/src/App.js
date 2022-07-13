import './App.css';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import React from 'react';
import Home from './components/home';
import ItemSelec from './components/ItemSelec';
import ListadeViagens from './components/ListadeViagens';
import Login from './components/Login';




const App = () => {
  return (
    <div> 
    <Router>
      <header className='header' >

      </header>
      <main>
        <Routes>
          <Route index element = {<Home/>}/>
          <Route path='/itemselec' element = {<ItemSelec/>}/>
          <Route path='/listadeviagens' element = {<ListadeViagens/>}/>
          <Route path='/login' element = {<Login/>}/>
        </Routes>
      </main>
    </Router>
    </div>
  );
}

export default App;
