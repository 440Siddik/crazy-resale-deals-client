import React from "react";
import { Link } from "react-router-dom";
import { FaCheck } from "react-icons/fa";
const ProductSectionCard = ({ categorywiseProduct, setProducts }) => {
  const {
    productName,
    sellerName,
    used,
    posted,
    img,
    location,
    originalPrice,
    resalePrice,
    verified,
  } = categorywiseProduct;
  return (
    <div className="mx-auto px-6">
      <div className="w-full max-w-sm bg-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 h-full relative">
        <img
          className="p-8 rounded-t-lg h-[300px] w-full rounded-lg"
          src={img}
          alt="product image"
        />

        <div className="px-5 pb-5">
          <h5 className="text-xl font-bold tracking-tight text-amber-200">
            {productName}
          </h5>

          <div className="mt-2.5 mb-5">
            <p className="text-base font-semibold text-white my-1">
              Location : {location}
            </p>
            <p className="text-base font-semibold text-white my-1">
              Resale Price : {resalePrice}
            </p>
            <p className="text-base font-semibold text-white my-1">
              Original Price : {originalPrice}
            </p>
            <p className="text-base font-semibold text-white my-1">Used : {used}</p>
            <p className="text-base font-semibold text-white my-1">
              Posted : {posted}
            </p>
            <p className="text-base font-semibold text-white my-1">
              Seller Name : {sellerName}
            </p>
            <div className="text-base font-semibold text-white flex items-center">
              <span className="mr-3">
                {verified === true ? (
                  <p className="mb-10">Verified Seller</p>
                ) : (
                  <p className="mb-10"></p>
                )}
              </span>
              <span>
                {verified === true ? (
                  <FaCheck className="bg-green-400 mb-10 text-white rounded-xl font-bold text-2xl" />
                ) : (
                  ""
                )}
              </span>
            </div>
            <>
              <label
                onClick={() => setProducts(categorywiseProduct)}
                htmlFor="booking-modal"
                className="btn btn-secondary my-4 absolute bottom-0"
              >
                Book Now
              </label>
            </>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSectionCard;
