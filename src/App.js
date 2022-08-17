import React, { useEffect, useState } from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import axios from 'axios';
import Home from './pages/Home';
import New from './pages/New';
import Edit from './pages/Edit';
import Diary from './pages/Diary';
import List from  './pages/List';

function App() {
  const [lists, setLists] =useState([]);
  useEffect(() => {
    axios.get('http://localhost:3001/lists')
    .then((res) => {
      setLists(res.data);
    })
    .catch((err) => {
      console.log(err);
    })
  }, [])
  

  return (
    <BrowserRouter>
        <h3>감정을 담으세요, 감바스</h3>
        <div className="App">
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/list' element={<List lists={lists} />}/>
            <Route path='/new' element={<New/>}/>
            <Route path='/edit/:id' element={<Edit lists={lists}/>}/>
            <Route path='/diary/:id' element={<Diary/>}/>
          </Routes>
        </div>
      </BrowserRouter>
  );
}

export default App;
