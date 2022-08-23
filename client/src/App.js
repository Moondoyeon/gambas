import React, { useEffect, useState } from 'react';
import './App.css';
import {Route, Routes} from 'react-router-dom';
import axios from 'axios';
import Home from './pages/Home';
import New from './pages/New';
import Edit from './pages/Edit';
import Diary from './pages/Diary';
import List from  './pages/List';
import Navbar from './components/Navbar';

function App() {
  const [lists, setLists] =useState([]);
  useEffect(() => {
    axios.get('http://gambas-emotion-basket.herokuapp.com/api/lists')
    .then((res) => {
      setLists(res.data);
    })
    .catch((err) => {
      console.log(err);
    })
  }, [])
  

  return (
        <div className="App">
        <Navbar/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/list' element={<List lists={lists} />}/>
            <Route path='/new' element={<New/>}/>
            <Route path='/edit/:id' element={<Edit lists={lists}/>}/>
            <Route path='/diary/:id' element={<Diary/>}/>
          </Routes>
        </div>
  );
}

export default App;
