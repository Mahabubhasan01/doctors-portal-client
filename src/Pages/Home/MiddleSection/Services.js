import React from 'react';
import Service from './Service';
import flowrite from '../../../assets/images/fluoride.png'
import cavity from '../../../assets/images/cavity.png'
import teeth from '../../../assets/images/whitening.png'

const Services = () => {
    return (
        <div className='my-10'>
            <h1 className='text-center text-xl text-primary uppercase font-bold'>OUR SERVICES</h1>
            <h1 className='text-center  text-4xl'>Services we provided</h1>
        <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-12'>
            <Service img={flowrite} title='Fluoride treatment'/>
            <Service img={cavity} title='Cavity filling'/>
            <Service img={teeth} title='Teeth whitening'/>
        </div>
        </div>
    );
};

export default Services;