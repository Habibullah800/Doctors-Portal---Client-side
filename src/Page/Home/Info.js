import React from 'react';
import Infocard from './Infocard';
import clock from '../../assets/icons/clock.svg'
import marker from '../../assets/icons/marker.svg'
import phone from '../../assets/icons/phone.svg'

const Info = () => {
    return (
        <div className='grid sm:grid-col-1 lg:grid-cols-3 gap-5 mt-16 lg:mt-32 '>
            <Infocard bgClass="bg-gradient-to-r from-secondary  to-primary " cardTitle="Opening hours" img={clock}></Infocard>
            <Infocard bgClass="bg-accent" cardTitle="Our Locations" img={marker}></Infocard>
            <Infocard bgClass="bg-gradient-to-r from-secondary  to-primary " cardTitle="Contract Us" img={phone}></Infocard>
        </div>
    );
};

export default Info;