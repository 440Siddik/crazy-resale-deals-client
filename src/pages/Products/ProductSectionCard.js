import React from 'react';
import { Link } from 'react-router-dom';
import { FaCheck } from "react-icons/fa";
const ProductSectionCard = ({categorywiseProduct}) => {
  const {categoryName, productName, sellerName, used, posted, img, location, originalPrice, resalePrice, verified} = categorywiseProduct;
  return (
    <div className='mx-auto px-8'>
      <div class="w-full max-w-sm bg-slate-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 h-full">
        <img
          class="p-8 rounded-t-lg h-[300px] w-full rounded-lg"
          src={img}
          alt="product image"
        />

        <div class="px-5 pb-5">
          <h5 class="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
            {productName}
          </h5>

          <div class="mt-2.5 mb-5">
            <p class="text-base font-semibold text-gray-900 my-1">
              Location : {location}
            </p>
            <p class="text-base font-semibold text-gray-900 my-1">
              Resale Price : {resalePrice}
            </p>
            <p class="text-base font-semibold text-gray-900 my-1">
              Original Price : {originalPrice}
            </p>
            <p class="text-base font-semibold text-gray-900 my-1">
              Used : {used}
            </p>
            <p class="text-base font-semibold text-gray-900 my-1">
              Posted : {posted}
            </p>
            <p class="text-base font-semibold text-gray-900 my-1">
              Seller Name : {sellerName}
            </p>
            <div class="text-base font-semibold text-gray-900 flex items-center">
              <span className="mr-2">
                {verified === true ? "Verified Seller" : ""}
              </span>
              <span>
                {verified === true ? (
                  <FaCheck className="text-green-400 font-bold text-2xl" />
                ) : (
                  ""
                )}
              </span>
            </div>

            {/* <Link
                to='/'
                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Add to cart
              </Link> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSectionCard;