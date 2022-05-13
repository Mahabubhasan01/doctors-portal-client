import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import BookingModel from './BookingModel';
import Services from './Services';

const AvailableAppointment = ({date}) => {
    const [services,setServices] = useState([]);
    const [treatment,setTreatment] = useState(null)
    useEffect(() => {
        const url = 'http://localhost:5000/service'
        fetch(url).then(res=>res.json()).then(data=>setServices(data))
    }, []);
    console.log(services)
    return (
        <div>
            <p className='text-center text-xl text-primary'>Available appointment {format(date, 'PP')}.</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-10 lg:my-10'>
                {
                    services.map(service=><Services
                    key={service._id}
                    service={service}
                    setTreatment={setTreatment}
                    ></Services>)
                }
                
            </div>
            {treatment&&<BookingModel 
            date={date} 
            setTreatment={setTreatment}
            treatment={treatment}/>}
        </div>
    );
};

export default AvailableAppointment;