import React from 'react';
import { toast } from 'react-toastify';

const UseRow = ({user,refetch}) => {
    const {email,role} = user;
    const makeAdmin =()=>{
        fetch(`http://localhost:5000/user/admin/${email}`,{
            method:'PUT',
            headers:{
                authorization:`Bearer ${localStorage.getItem('accessToken')}`
            }
        }).then(res=>{
            if(res.status===403){
                toast.error('fuck you can not make an admin')
            }
            return res.json();
        }).then(data=>{
            if(data.modifiedCount>0){
                toast.success('awesome');
                refetch();
            }
        });
       
    }
    return (
        <tr>
        <th>1</th>
        <td>{email}</td>
        <td>{role !=='admin' && <button className='btn btn-xs' onClick={makeAdmin}>Make admin</button>}</td>
        <td><button className=" btn btn-xs">Remove user</button></td>
        <td>Blue</td>
      </tr>
    );
};

export default UseRow;