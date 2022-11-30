import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../Context/AuthProvider';

const BookingModal = ({ products, setProducts }) => {
  const { productName, resalePrice } = products;
  const { user } = useContext(AuthContext);
  const handleBooking = (event) => {
    event.preventDefault();
    const form = event.target;
    const phone = form.phone.value;
    const location = form.location.value;

    const booking = {
      email: user.email,
      productName,
      price: resalePrice,
      phone,
      location,
    };
    fetch("http://localhost:5000/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        if(data.acknowledged){
          setProducts(null)
          toast.success("Booking Confirmed");
        }
      });
  };
  return (
    <>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold my-3">{productName}</h3>
          <form
            onSubmit={handleBooking}
            className="py-4 grid grid-cols-1 gap-3"
          >
            <input
              name="email"
              type="text"
              value={user?.email}
              disabled
              className="input input-bordered w-full"
            />
            <p className="font-medium">Product Name</p>
            <input
              type="text"
              value={productName}
              disabled
              className="input input-bordered w-full"
            />
            <p className="font-medium">Price</p>
            <input
              type="text"
              value={resalePrice}
              disabled
              className="input input-bordered w-full"
            />
            <input
              type="text"
              name="phone"
              placeholder="Your Phone"
              className="input input-bordered w-full"
            />
            <input
              type="text"
              name="location"
              placeholder="Meeting Location"
              className="input input-bordered w-full"
            />
            <br />
            <input
              className="w-full btn btn-accent"
              type="submit"
              value="Submit"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default BookingModal;
