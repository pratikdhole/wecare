import './App.css';
import Login from './Pages/Login';
import Navbar from './Pages/Navbar';
import Home from './Pages/Home.jsx';
import { Route, Routes } from 'react-router-dom';
import Register from './Pages/Register';
import About from './Pages/About';
import { UserContext } from './Pages/UserContext';
import {useState} from 'react';
import PatientHome from './Pages/PatientHome';
import DoctorHome from './Pages/DoctorHome';
import ConsultationForm from './Pages/ConsultationForm';
import Header from './Pages/Header';
import Blogs from './Pages/Blogs';
import HospitalList from './Pages/HospitalList';

function App() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));

  return (
    <div className="App">
      <Header/>
      <Routes>
          <Route  path="/" element={<Home/>}/>
          <Route  path="/patient" element={<PatientHome/>} />
          <Route  path="/doctor" element={<DoctorHome/>} />
          <Route  path="/consult" element={<ConsultationForm/>} />
          <Route  path="/about" element={<About/>} />
          <Route path="/blogs" element={<Blogs/>} />
          <Route  path="/login" element={<Login/>} />
          <Route path="/hospitals" element={<HospitalList/>} />
          <Route  path="/register" element={<Register/>} />
      </Routes>
      
    </div>
  );
}

export default App;
