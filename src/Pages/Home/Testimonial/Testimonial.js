import React from 'react';
import SingleTestimonil from './SingleTestimonil';
import img from '../../../assets/images/people1.png'
import img1 from '../../../assets/images/people2.png'
import img2 from '../../../assets/images/people3.png'

const Testimonial = () => {
    return (
        <div className='px-10 my-5'>
            <h1 className='text-primary text-xl'>Testimonial</h1>
            <h1 className='text-3xl'>What your patience says</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-5'>
            <SingleTestimonil img={img}/>
            <SingleTestimonil img={img1}/>
            <SingleTestimonil img={img2}/>
        </div>
        </div>
    );
};

export default Testimonial;