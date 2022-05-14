import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import BookingModal from './BookingModal';
import ServiceAppoinment from './ServiceAppoinment';

const AvailableAppoinment = ({ date }) => {

    const [treatment, setTreatment] = useState([null])
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/service')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            <h4 className='text-xl text-secondary text-center font-bold	my-12'>Available Appoinment on {format(date, 'PP')}</h4>
            <div className='grid grid-cols-1 md:grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-12 p-4 lg:p-12 mb-24 lg:mb-30'>
                {
                    services.map(service => <ServiceAppoinment
                        key={service._id}
                        service={service}
                        setTreatment={setTreatment}
                    >
                    </ServiceAppoinment>)
                }
            </div>
            {
                treatment && <BookingModal
                    date={date}
                    treatment={treatment}
                    setTreatment={setTreatment}
                ></BookingModal>
            }
        </div>
    );


    // {
    //     services.map(service => <ServiceAppoinment
    //         key={service._id}
    //         service={service}
    //     ></ServiceAppoinment>)

    // }

};

export default AvailableAppoinment;