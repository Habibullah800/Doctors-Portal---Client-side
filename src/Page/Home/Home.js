import React from 'react';
import Footer from '../Shared/Footer/Footer';
import Banner from './Banner';
import ContractUs from './ContractUs';
import ExceptCare from './ExceptCare';
import Info from './Info';
import MakeAppoinment from './MakeAppoinment';
import Services from './Services';
import Testimonials from './Testimonials';

const Home = () => {
    return (
        <div className='px-12'>

            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <ExceptCare></ExceptCare>
            <MakeAppoinment></MakeAppoinment>
            <Testimonials></Testimonials>
            <ContractUs></ContractUs>
            <Footer></Footer>


        </div>
    );
};

export default Home;