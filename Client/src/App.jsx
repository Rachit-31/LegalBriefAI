import styles from  './App.module.css'
import "bootstrap/dist/css/bootstrap.min.css"

import Navbar from './Components/Navbar/Navbar'
import Home from './Pages/Homepage/Home'
import Signup from './Pages/Registerpage/Signup'
import Logedin from './Pages/Loginpage/Logedin'
import UserContextProvider from '../context/UserContextProvider'
import Services from './Pages/Servicespage/Services'
import AiPage from './Pages/AIdashboard/AiPage'
import Footer from './Components/Footer/Footer'

import axios from 'axios';
import {Toaster} from 'react-hot-toast';
import {Routes,Route} from 'react-router-dom';
import 'aos/dist/aos.css'; // Import AOS CSS file
import AOS from 'aos';
import  { useEffect } from 'react';

axios.defaults.baseURL='http://localhost:8000';
axios.defaults.withCredentials=true;
function App() {
  useEffect(() => {
    AOS.init({ once:true });  
  }, []);
  return (
<UserContextProvider>
<div className={styles.app}>
      <div className={styles.gradientbg}>
        <Navbar/>
        <Toaster position='top-center' toastOptions={{duration:2000}} />
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Logedin/>}/>
          <Route path='/register' element={<Signup/>}/>
          <Route path='/services' element={<Services/>}/>
          <Route path='/aipage' element={<AiPage/>}/>
        </Routes>
        <Footer/>
      </div>
    </div>
</UserContextProvider>
  )
}

export default App; 