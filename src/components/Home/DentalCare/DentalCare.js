import React from 'react';
import child from '../../../images/Mask Group 3.png'
import './DentalCare.css'
const DentalCare = () => {
  return (
    <div className='d-flex justify-content-center mb-5'>
      <div className="row w-75 mt-5 pt-5 mb-5">
        <div className="col-md-5 mb-3">
          <img className='img-fluid'style={{height:'600px'}} src={child} alt=""/>
        </div>
        <div className="col-md-7 flex-class mb-3">
          <h3 className='mb-5'>Exceptional Dental Care <br/>On Your Terms!</h3>
          <p className='text-secondary mb-5'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam sint similique dignissimos. Dolores quibusdam odio molestias ad sequi, asperiores voluptates quo tenetur illum ullam recusandae culpa rem soluta doloribus eius illo neque quidem unde blanditiis ratione perspiciatis, eaque earum minima.</p>
          <button className="btn btn-info text-white">Learn More</button>
          </div>
         
         
         
        </div>
      </div>
  );
};

export default DentalCare;