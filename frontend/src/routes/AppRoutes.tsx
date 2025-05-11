import { Route, Routes } from "react-router";
import HomePage from "../pages/HomePage";
import ShopPage from "@/pages/ShopPage";
import InformationPage from "@/pages/InformationPage";
import Root from "./Root";
import TestingPage from "@/pages/TestingPage";
import BlogPage from "@/pages/BlogPage";
import ErrorPage from "@/pages/ErrorPage";
import Layout from "@/components/app/Layout";
import ProductPage from "@/pages/ProductPage";
import CheckoutPage from "@/pages/CheckoutPage";

function AppRoutes() {
  return (
    <Routes>
      <Route element={<Root />}>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />

          <Route path="/shop" element={<ShopPage />} />
          <Route path="/shop/:productId" element={<ProductPage />} />
          <Route path="/shop/checkout" element={<CheckoutPage />} />
          
          <Route path="/information" element={<InformationPage />} />
          <Route path="/information/:informationId" element={<BlogPage />} />
        </Route>

        <Route path="/testing" element={<TestingPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;
