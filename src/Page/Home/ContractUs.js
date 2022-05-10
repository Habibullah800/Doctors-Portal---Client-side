import React from 'react';
import PrimaryBtn from '../Shared/PrimaryBtn';
import appoinment from '../../assets/images/appointment.png'

const ContractUs = () => {
    const myStyle = {
        backgroundImage: `url(${appoinment})`,
        height: '490px'
    }
    return (
        <div className='d-flex text-center mb-6 '
            style={myStyle}
        >
            <div className='text-secondary font-bold uppercase pt-12 pb-3' ><h2 >Contract Us</h2></div>
            <div className='text-2xl text-white pb-2'> <h3>Stay Connected With Us</h3></div>

            <div>
                <input type="text" placeholder="Email Address" className="input input-bordered input-md w-full max-w-xs my-3 " />
            </div>

            <div>
                <input type="text" placeholder="Subjects" className="input input-bordered input-md w-full max-w-xs my-3" />
            </div>

            <div><textarea type="text" placeholder="Your Message" className="input input-bordered input-lg w-full max-w-xs my-3 h-24" />
            </div>
            <div>
                <PrimaryBtn> Submit </PrimaryBtn>
            </div>
        </div>
    );
};

export default ContractUs;