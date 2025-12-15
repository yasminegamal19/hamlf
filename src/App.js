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



function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
         <Route path='/' element={<Layouts />} /> 
      <Route path='/about-routes' element={<AboutRoutes />}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

