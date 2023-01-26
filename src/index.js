import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './global.css';
import Details from './Pages/Details';
import Home from './Pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/details/:id' element={<Details/>}/>
    </Routes>
    </BrowserRouter>
    

  </React.StrictMode>
);

