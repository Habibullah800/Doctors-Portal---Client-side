import React from 'react';
import fluride from '../../assets/images/fluoride.png'
import cavity from '../../assets/images/cavity.png'
import whitening from '../../assets/images/whitening.png'
import Service from './Service';

const Services = () => {
    const services = [
        {
            _id: 1,
            name: 'Fluride Treatment',
            description: 'Fluoride treatments are typically professional treatments containing a high concentration of fluoride, We will apply to a persons teeth to improve health and reduce risk of cavities.',
            img: fluride,
        },
        {
            _id: 2,
            name: 'Cavity Filling',
            description: 'We applies a numbing gel to the gums. Once this has taken effect, they inject a local anesthetic into the gum. Using a drill we removes the decayed area of the tooth.',
            img: cavity,
        },
        {
            _id: 3,
            name: 'Teeth whitening',
            description: 'Whitening products contain one of two tooth bleaches. These bleaches break stains into smaller pieces, which makes the color less concentrated and your teeth brighter.',
            img: whitening,
        }
    ]


    return (
        <div className='mt-24 mb-8 mx-auto'>
            <div className='text-center text-xl '>
                <h3 className='text-primary font-bold uppercase'> Our services</h3>
                <h2 className='text-3xl'> Services we provide</h2>
            </div>
            <div className='grid sm:grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-10 pt-20'>
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                    >
                    </Service>)
                }
            </div>
        </div>
    );
};

export default Services;