import React, { useState } from 'react';
import Footer from '../../Shared/Footer/Footer';
import AppoinBanner from './AppoinBanner';
import AvailableAppoinment from './AvailableAppoinment';

const Appoinment = () => {
    const [date, setDate] = useState(new Date());
    return (
        <div>
            <AppoinBanner date={date} setDate={setDate}></AppoinBanner>
            <AvailableAppoinment date={date}></AvailableAppoinment>
            <Footer></Footer>
        </div>
    );
};

export default Appoinment;