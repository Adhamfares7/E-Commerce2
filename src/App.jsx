import React from "react";
import NavBar from "./Components/NavBar";
import CategoriesContextProvider from "./Context/CategoriesContext";
import SliderCategories from "./Components/SliderCategories";
import Products from "./Components/Products";
import { BrowserRouter, createBrowserRouter, RouterProvider } from "react-router-dom";
import Cart from "./Components/Cart";
import Categories from "./Components/Categories";
import Layout from "./Components/Layout";
import Home from "./Components/Home";
import Register from "./Components/Register";
import Login from "./Components/Login";


let x = createBrowserRouter([
{path: "" , element: <Layout/>,children: [
  {path: "/E-Commerce2" , element: <Home/>},
  {path: "/E-Commerce2/products" , element: <Products/>},
  {path: "/E-Commerce2/cart" , element: <Cart/>},
  {path: "/E-Commerce2/categories" , element: <Categories/>},
  {path: "/E-Commerce2/register" , element: <Register/>},
  {path: "/E-Commerce2/login" , element: <Login/>},
] }
])

const App = () => {
  return (
    <>
      <CategoriesContextProvider>
    <RouterProvider router={x}></RouterProvider>
      </CategoriesContextProvider>
    </>
  );
};

export default App;
