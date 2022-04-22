import React from 'react';
import './App.css';
import WebcamCapture from './WebcamCapture';
import Preview from './Preview';
import Chats from './Chats'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import View from './View';
import { useSelector } from 'react-redux';
import {selectUser} from './features/counter/appSlice'
import Login
 from './Login';
function App() {
  const user=useSelector(selectUser)
  return (
    <div className="app">
  <Router>

      {!user ? (<Login/> ):(
      <div className='app__body'>
        <div className='app_bodyBackGround'>
        <Routes>
      <Route path="/preview" element={<Preview/>}/>
      <Route path="/" element={<WebcamCapture/>}/>
      <Route path='/chats' element={<Chats/>}/>
      <Route path='/chats/view' element={<View/>}/>

      
      </Routes>
        </div>
 
      </div>

      )}

  </Router>,
     
    </div>
  );
}

export default App;
