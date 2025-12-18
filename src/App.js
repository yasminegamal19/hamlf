import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import 'bootstrap-icons/font/bootstrap-icons.css';
import Navbar from './Shared/Components/Navbar/Navbar';
import Home from './Shared/Components/Home/Home';
import AboutUs from './Shared/Components/AboutUs/AboutUs';
import Services from './Shared/Components/Services/Services';
import Pleadings from './Shared/Components/Pleadings/Pleadings';
import Questions from './Shared/Components/Questions/Questions';
import ContactUs from './Shared/Components/ContactUs/ContactUs';
import Footer from './Shared/Components/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import Layouts from './Shared/Components/Layouts/Layouts';
import AboutRoutes from './Shared/Components/AboutRoutes/AboutRoutes';
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AllPleadings from './Shared/Components/AllPleadings/AllPleadings';
import Scroll from './Shared/Components/Scroll/Scroll';


function App() {


const {t, i18n } = useTranslation();

  useEffect(() => {
  document.documentElement.dir = i18n.language === "ar" ? "rtl" : "ltr";
  document.body.className = i18n.language === "ar" ? "lang-ar" : "lang-en";
}, [i18n.language]);

  return (
    <div className="App">
      <Navbar />
      <Routes>
         <Route path='/' element={<Layouts />} /> 
      <Route path='/about-routes' element={<AboutRoutes />}/>
      <Route path="/pleadings" element={<AllPleadings />} />
      </Routes>
      <Footer />
      <ToastContainer  position='top-right' autoClose={1000}/>
      <Scroll />
    </div>
  );
}

export default App;

