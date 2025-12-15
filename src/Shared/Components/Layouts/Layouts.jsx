import { memo } from 'react';
import Home from '../Home/Home';
import AboutUs from '../AboutUs/AboutUs';
import Services from '../Services/Services';
import Pleadings from '../Pleadings/Pleadings';
import Questions from '../Questions/Questions';
import ContactUs from '../ContactUs/ContactUs';

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Layouts = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <>
    <Home />
    <AboutUs />
    <Services />
    <Pleadings />
    <Questions />
    <ContactUs />
    </>
  );
};

export default memo(Layouts);