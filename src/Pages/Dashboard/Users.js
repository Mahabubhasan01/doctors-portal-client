import React from 'react';
import { useQuery } from 'react-query';
import UseRow from './UseRow';

const Users = () => {
    const {data:users,isLoading,refetch} = useQuery('user',()=>fetch('http://localhost:5000/user',{
      method:'GET',
      Headers:{
        authorization:`Bearer ${localStorage.getItem('accessToken')}`
      }
    }).then(res=>res.json()));
    if(isLoading){
        return 'loading.....'
    }
    return (
        <div>
            <h1>all users {users?.length} </h1>
            <div class="overflow-x-auto">
  <table class="table w-full">
    <thead>
      <tr>
        <th>1</th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th>1</th>
        <td>Cy Ganderton</td>
        <td>Quality Control Specialist</td>
        <td>Blue</td>
      </tr>
      <tr>
        <th>2</th>
        <td>Hart Hagerty</td>
        <td>Desktop Support Technician</td>
        <td>Purple</td>
      </tr>
      {
        users.map(user=><UseRow key={user._id} refetch={refetch} user={user}></UseRow>)
      }
    </tbody>
  </table>
</div>
        </div>
    );
};

export default Users;