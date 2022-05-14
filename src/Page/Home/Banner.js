import React from 'react';
import chair from '../../assets/images/chair.png'
import backgroundpic from '../../assets/images/bg.png'
import PrimaryBtn from '../Shared/PrimaryBtn';

const Banner = () => {
    return (
        <div style={{
            background: `url(${backgroundpic})`,
            backgroundSize: 'cover',
        }}>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse p-0">
                    <img src={chair} alt=
                        'pic' className="sm:max-w-sm lg:max-w-lg rounded-lg shadow-2xl mt-5 " />
                    <div className="px-8">
                        <h1 className="text-4xl font-bold mt-10">Your New Smile Starts<br /> Here!</h1>
                        <p className="py-8">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <PrimaryBtn> Get started</PrimaryBtn>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Banner;