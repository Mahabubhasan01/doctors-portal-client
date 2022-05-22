import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import BookingModel from './BookingModel';
import Services from './Services';

const AvailableAppointment = ({date}) => {
/*     const [services,setServices] = useState([]);
 */    const [treatment,setTreatment] = useState(null);
    const formattedDate = format(date,'PP');
    const url = `http://localhost:5000/available?date=${formattedDate}`
    /* useEffect(() => {
        const url = `http://localhost:5000/available?date=${formattedDate}`
        fetch(url).then(res=>res.json()).then(data=>setServices(data))
    }, [formattedDate]);
    console.log(services) */

    const { data:services,isLoading,refetch } = useQuery(['available',formattedDate], () =>
     fetch(url).then(res =>res.json()
     )
   );
   if(isLoading){
       return <button className="btn loading flex h-screen w-screen justify-center items-center">Loading</button>
   }
    return (
        <div>
            <p className='text-center text-xl text-primary'>Available appointment {format(date, 'PP')}.</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-10 lg:my-10'>
                {
                    services?.map(service=><Services
                    key={service._id}
                    service={service}
                    setTreatment={setTreatment}
                    ></Services>)
                }
                
            </div>
            {treatment&&<BookingModel 
            date={date} 
            refetch={refetch}
            setTreatment={setTreatment}
            treatment={treatment}/>}
        </div>
    );
};

export default AvailableAppointment;