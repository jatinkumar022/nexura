import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./css/satoshi.css";
import Loader from "./common/Loader";
import PageTitle from "./components/PageTitle";
import SignIn from "./pages/Authentication/SignIn";
import ECommerce from "./pages/Dashboard/ECommerce";

import DefaultLayout from "./layout/DefaultLayout";
import "./css/style.css";
import Orders from "./pages/Orders/Orders";
import Users from "./pages/Users/Users";
import AddProduct from "./pages/Manage Products/AddProduct";
import AllProducts from "./pages/Manage Products/AllProducts";
import EditProduct from "./pages/Manage Products/EditProduct";
function AdminRoutes() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <DefaultLayout>
      <Routes>
        <Route
          index
          element={
            <>
              <PageTitle title="eCommerce Dashboard | Admin" />
              <ECommerce />
            </>
          }
        />
        <Route
          path="/order"
          element={
            <>
              <PageTitle title="Profile | Admin" />
              <Orders />
            </>
          }
        />
        <Route
          path="/users"
          element={
            <>
              <PageTitle title="Profile | Admin" />
              <Users />
            </>
          }
        />
        <Route
          path="/add-product"
          element={
            <>
              <PageTitle title="Profile | Admin" />
              <AddProduct />
            </>
          }
        />
        <Route
          path="/all-products"
          element={
            <>
              <PageTitle title="Profile | Admin" />
              <AllProducts />
            </>
          }
        />
        <Route
          path="/edit-product/:productId"
          element={
            <>
              <PageTitle title="Profile | Admin" />
              <EditProduct />
            </>
          }
        />

        <Route
          path="auth/signin"
          element={
            <>
              <PageTitle title="Signin | Admin" />
              <SignIn />
            </>
          }
        />
      </Routes>
    </DefaultLayout>
  );
}

export default AdminRoutes;
