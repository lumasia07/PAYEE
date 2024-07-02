import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Login';
import RegisterUser from './RegisterUser';
import Homepage from './Homepage';
import Dashboard from './Dashboard';
import Loading from './Loading';
import ChosePlan from './ChosePlan';
import LoadingAfterReg from './LoadingAfterRegister';
import CreatewalletHome from './CreatewalletHome';
import Chatbot from './Chatbot';
import About from './About';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<RegisterUser />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path='/loading' element={<Loading />} />
        <Route path='/choseplan' element={<ChosePlan />} />
        <Route path='/registering_user' element={<LoadingAfterReg />} />
        <Route path='/create_home_wallet' element={<CreatewalletHome />} />
        <Route path='/chatbot' element={<Chatbot />} />
        <Route path='/about' element={<About />} />

        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
