import React from 'react';

const BookingModal = ({products}) => {
  const {productName, resalePrice} = products
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
          <form className="py-4 grid grid-cols-1 gap-3">
            <input type="text" className="input input-bordered w-full" />
            <input type="text" className="input input-bordered w-full" />
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
              placeholder="Your Phone"
              className="input input-bordered w-full"
            />
            <input
              type="text"
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
