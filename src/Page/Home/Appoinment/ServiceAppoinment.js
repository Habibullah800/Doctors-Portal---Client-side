import React from 'react';

const ServiceAppoinment = ({ service, setTreatment }) => {
    const { name, slots } = service;
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            < div className="card-body text-center" >
                <h2 className="text-xl font-bold text-secondary " > {name}</h2 >
                <p>
                    {
                        slots.length > 0
                            ? <span>{slots[0]}</span>
                            : <span className='text-red-500'>No slot have. Try another day.</span>
                    }
                </p>
                <p>{slots.length} {slots.length > 1 ? 'spaces' : 'space'}</p>
                <div className="card-actions justify-center" >

                    <label
                        htmlFor="booking-modal-6"
                        onClick={() => setTreatment(service)}
                        disabled={slots.length === 0}
                        className="btn btn-sm bg-gradient-to-r from-secondary  to-primary modal-button btn btn-secondary text-white uppercase">Book appoinment</label>
                </div >
            </div >
        </div >
    );
};

export default ServiceAppoinment;