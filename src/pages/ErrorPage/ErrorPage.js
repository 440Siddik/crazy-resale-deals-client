import React from 'react';
import { Link, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
  const error = useRouteError()
  return (
    <div className='flex flex-col justify-center items-center'>
      <h3 className="text-5xl text-red-500 font-medium my-3">
        404 Page Not Found
      </h3>
      <p className="text-2xl text-red-500 font-semibold">
        Error : {error.status || error.message}
      </p>
      <p className="font-medium text-2xl text-teal-400 my-3">
        Please go back to homepage <small className='text-indigo-800 underline'><Link to='/home'>home</Link></small>
      </p>
    </div>
  );
};

export default ErrorPage;