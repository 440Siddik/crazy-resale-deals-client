import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider';

const MyOrders = () => {
  const {user} = useContext(AuthContext)
  const url = `http://localhost:5000/bookings?email=${user?.email}`
  const {data: bookings = []} = useQuery({
    queryKey:['bookings', user?.email],
    queryFn: async () => {
      const res = await fetch(url)
      const data = await res.json()
      return data
    }
  })
  return (
    <div className="overflow-x-auto">
      <table className="table w-full">
        <thead>
          <tr>
            <th></th>
            <th>Title</th>
            <th>Price</th>
            <th>Pay</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking, i) => (
            <tr className="hover">
              <th>{i+1}</th>
              <td>{booking.productName}</td>
              <td>{booking.price}</td>
              <td><button className='btn btn-secondary'>Pay</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyOrders;