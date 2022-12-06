import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import useBuyer from '../../Hooks/useBuyer';
import useSeller from '../../Hooks/useSeller';

const DashboardLayout = () => {
  const {user} = useContext(AuthContext)
  const [isSeller] = useSeller(user?.email)
  const [isBuyer] = useBuyer(user?.email)
  return (
    <div className="w-full h-[100vh] mx-auto">
      <div className="flex items-center mx-auto">
        {isBuyer && (
          <Link
            to="/myorders"
            className="font-semibold text-orange-500 text-3xl mr-6"
          >
            My Orders
          </Link>
        )}
        {isSeller && (
          <>
            <Link
              to="/myproducts"
              className="font-semibold text-orange-500 text-3xl mr-6"
            >
              My products
            </Link>
            <Link
              className="font-semibold text-orange-500 text-3xl mr-6"
              to="/addproduct"
            >
              Add A Product
            </Link>
            <Link
              className="font-semibold text-orange-500 text-3xl mr-6"
              to="/mybuyers"
            >
              My Buyers
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default DashboardLayout;