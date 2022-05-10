import React from 'react';

const Service = ({ service }) => {
    return (
        <div>
            <div className="card lg:max-w-lg bg-base-100 shadow-xl ">
                <figure  >
                    <img className='pt-12 rounded-xl' src={service.img} alt="Shoes" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{service.name}</h2>
                    <p>{service.description}</p>

                </div>
            </div>
        </div>
    );
};

export default Service;