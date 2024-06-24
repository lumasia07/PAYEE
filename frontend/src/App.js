import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Login';
import RegisterUser from './RegisterUser';
import Homepage from './Homepage';
import Dashboard from './Dashboard';
import Loading from './Loading';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<RegisterUser />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path='/loading' element={<Loading />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
