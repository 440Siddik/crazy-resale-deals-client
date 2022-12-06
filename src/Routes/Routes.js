import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Blogs from "../pages/Blogs/Blogs";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import MyOrders from "../pages/MyOrders/MyOrders";
import ProductsSection from "../pages/Products/ProductsSection";
import Signup from "../pages/Signup/Signup";
import AddProduct from '../pages/AddProduct/AddProduct'
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import DashboardLayout from "../pages/DashboardLayout/DashboardLayout";
import MyProducts from "../pages/MyProducts/MyProducts";
import MyBuyers from "../pages/MyBuyers/MyBuyers";
import SellerRoute from "./SellerRoute/SellerRoute";
import BuyerRoute from "./BuyerRoute/BuyerRoute";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/home",
        element: <Home></Home>,
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <Signup></Signup>,
      },
      {
        path: "/myorders",
        element: <MyOrders></MyOrders>,
      },
      {
        path: "/categories/:id",
        loader: ({ params }) =>
          fetch(
            `https://crazy-resale-deals-server.vercel.app/categories/${params.id}`
          ),
        element: (
          <PrivateRoute>
            <ProductsSection></ProductsSection>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard",
        element: (
          <PrivateRoute>
            <DashboardLayout></DashboardLayout>
          </PrivateRoute>
        ),
      },
      {
        path: "/myproducts",
        element: (
          <SellerRoute>
            <MyProducts></MyProducts>
          </SellerRoute>
        ),
      },
      {
        path: "/addproduct",
        element: (
          <SellerRoute>
            <AddProduct></AddProduct>,
          </SellerRoute>
        ),
      },
      {
        path: "/mybuyers",
        element: (
          <SellerRoute>
            <MyBuyers></MyBuyers>
          </SellerRoute>
        ),
      },
      {
        path: "/myorders",
        element: (
          <BuyerRoute>
            <MyOrders></MyOrders>
          </BuyerRoute>
        ),
      },
    ],
  },
]);

export default router;