import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Routes,Route, BrowserRouter } from 'react-router-dom';
import { Academics, CatShowCase, Home } from 'Screens';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/CatShowCase' element={<CatShowCase/>}/>
        <Route path='/AcademicRecords' element={<Academics/>}/>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
