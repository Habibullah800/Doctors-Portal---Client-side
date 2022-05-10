import React from 'react';
import treatment from '../../assets/images/treatment.png'
import PrimaryBtn from '../Shared/PrimaryBtn';



const ExceptCare = () => {


    return (
        <div>
            <div className="hero min-h-screen mb-36">
                <div className="hero-content flex-col lg:flex-row-reverse p-0">

                    <div className="px-8">
                        <h1 className="text-4xl font-bold mt-10">Exceptional Dental Care, on Your Terms</h1>
                        <p className="py-8 lg:pr-24">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page.</p>
                        <PrimaryBtn> Get Starts</PrimaryBtn>
                    </div>
                    <img src={treatment} alt='pic' className="sm:max-w-sm sm:max-w-md lg:max-w-lg h-96 lg:ml-40 lg:mr-12 rounded-lg shadow-2xl mt-5 " />
                </div>
            </div>
        </div>
    );
};

export default ExceptCare;