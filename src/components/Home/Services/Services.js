import React from 'react';
import fluoride from '../../../images/001-dental.png';
import cavity from '../../../images/tooth (1).png';
import teeth from '../../../images/tooth.png';
import ServiceData from '../ServiceData/ServiceData';


const Services = () => {
  const serviceData=[
    {
      name:'Fluoride Treatment',
      img:fluoride
    },
    {
      name:'Cavity Filling',
      img:cavity
    },
    {
      name:'Teeth Whitening',
      img:teeth
    }
  ]
  return (
    <section>
      <div className='text-center mt-5'>
        <h5 style={{color:'#1CC7C1'}}>Our Services</h5>
        <h2 style={{color:'#3A4256'}}>Services We Provide</h2>
      </div>
      <div className='d-flex justify-content-center' >
     <div className='row w-75 mt-5 pt-5'>
     {
        serviceData.map(service => <ServiceData service={service}></ServiceData>)
      }
     </div>
    </div>
    </section>
  );
};

export default Services;