import React from 'react';
import InfoCard from '../InfoCard/InfoCard';
import { faClock,faMapMarker,faPhone } from '@fortawesome/free-solid-svg-icons'
const infoData=[
  {
    title: 'Opening hours',
    color:'primary',
    description:'We are open 7 days',
    icon:faClock
  },
  {
    title: 'Visit our location',
    color:'dark',
    description:'We are in your neighborhood',
    icon:faMapMarker
  },
  {
    title: 'Contact us now',
    color:'primary',
    description:'Call us in our number',
    icon:faPhone
  }
]

const BusinessInfo = () => {
  return (
    <section className='d-flex justify-content-center' >
     <div className='row w-75'>
     {
        infoData.map(info => <InfoCard info={info}></InfoCard>)
      }
     </div>
    </section>
  );
};

export default BusinessInfo;