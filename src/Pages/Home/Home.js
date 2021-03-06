import React from 'react';
import CustomForm from '../Login/CustomForm';
import Footer from '../Shared/Footer/Footer';
import Appointment from './Appointment/Appointment';
import Banner from './Banner';
import Info from './Info/Info';
import Services from './MiddleSection/Services';
import Treatment from './MiddleSection/Treatment/Treatment';
import Testimonial from './Testimonial/Testimonial';

const Home = () => {
    return (
        <>
            <Banner/>
            <Info/>
            <Services/>
            <Treatment/>
            <Appointment/>
            <Testimonial/>
            <CustomForm/>
            <Footer/>
        </>
    );
};

export default Home;