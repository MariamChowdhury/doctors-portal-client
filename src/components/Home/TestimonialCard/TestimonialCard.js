import React from 'react';

const TestimonialCard = ({data}) => {
  return (
    <div className='col text-start mx-3 p-3' style={{border:'1px solid lightGray'}}>
<p className='text-secondary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus quas autem neque doloribus dignissimos adipisci nam. Accusamus officia, aliquam sit, perferendis labore a, repellat praesentium modi eveniet totam quam ullam?</p>
<div className='d-flex justify-content-start mt-5'>
  <img src={data.img} style={{height:'50px'}} alt=""/>
  <div className='mx-3'>
    <h5 className='text-info'>{data.name}</h5>
    <p className='text-secondary'>{data.place}</p>
  </div>
  </div>      
    </div>
  );
};

export default TestimonialCard;