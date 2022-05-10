import React from 'react';
import doctor from '../../assets/images/doctor.png'
import appoinment from '../../assets/images/appointment.png'
import PrimaryBtn from '../Shared/PrimaryBtn';

const MakeAppoinment = () => {
    return (
        <section
            style={{
                background: `url(${appoinment})`
            }}
            className='flex justify-center items-center mb-20 '>
            <div className='flex-1 hidden lg:block'>
                <img className='mt-[-170px]' src={doctor} alt='doctor' />
            </div>

            <div className='flex-1'>
                <h3 className='text-2xl text-primary font-bold my-4 pt-8  pl-6
                lg:text-center'> Appoinment </h3>
                <h2 className='text-3xl text-white my-3 pl-6 pr-3'> Make an Appoinment Today</h2>
                <p className='text-white mb-8 my-3 pr-8 pl-6'>
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page.
                </p>
                <div className='pb-12 pl-6'>
                    <PrimaryBtn> Get started </PrimaryBtn>
                </div>
            </div>

        </section>
    );
};

export default MakeAppoinment;