import React from 'react';
import DentalCare from '../DentalCare/DentalCare';
import Header from '../Header/Header';
import MakeAppointment from '../MakeAppointment/MakeAppointment';
import Services from '../Services/Services';
import Testimonials from '../Testimonials/Testimonials';



const Home = () => {
  return (
    <div >
     <Header></Header>
     <Services></Services>
     <DentalCare></DentalCare>
     <MakeAppointment></MakeAppointment>
     <Testimonials></Testimonials>
      
    </div>
  );
};

export default Home;