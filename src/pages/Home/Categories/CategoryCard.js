import React from "react";
import { Link } from "react-router-dom";

const CategoryCard = ({ category }) => {
  const { name, img } = category;
  return (
    <div className="mx-auto">
      <div className="w-full max-w-sm bg-amber-100 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 h-full border p-3">
        <img
          className="p-8 rounded-t-lg h-[250px] border-b border-red-300"
          src={img}
          alt="brand image"
        />

        <div className="px-5 pb-5">
          <h5 className="text-2xl text-center font-semibold tracking-tight text-gray-900 dark:text-white my-4">
            {name}
          </h5>

          <div className="flex items-center justify-between">
            <Link
              to={`category/${category._id}`}
              className="text-white mx-auto bg-blue-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Go to {name} brand section
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
