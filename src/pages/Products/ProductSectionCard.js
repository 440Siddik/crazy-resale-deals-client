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
      <div class="w-full max-w-sm bg-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 h-full relative">
        <img
          class="p-8 rounded-t-lg h-[300px] w-full rounded-lg"
          src={img}
          alt="product image"
        />

        <div class="px-5 pb-5">
          <h5 class="text-xl font-bold tracking-tight text-amber-200">
            {productName}
          </h5>

          <div class="mt-2.5 mb-5">
            <p class="text-base font-semibold text-white my-1">
              Location : {location}
            </p>
            <p class="text-base font-semibold text-white my-1">
              Resale Price : {resalePrice}
            </p>
            <p class="text-base font-semibold text-white my-1">
              Original Price : {originalPrice}
            </p>
            <p class="text-base font-semibold text-white my-1">Used : {used}</p>
            <p class="text-base font-semibold text-white my-1">
              Posted : {posted}
            </p>
            <p class="text-base font-semibold text-white my-1">
              Seller Name : {sellerName}
            </p>
            <div class="text-base font-semibold text-white flex items-center">
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
