import react from 'react';
import AboutUs from '../AboutUs/AboutUs';
import Tasks from './Tasks';
import Departments from './Departments';

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const AboutRoutes = () => {
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
      <AboutUs />
    <Tasks />
    <Departments />
    </>
  );
};

export default AboutRoutes;
