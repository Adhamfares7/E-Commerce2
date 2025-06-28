import React from "react";
import NavBar from "./Components/NavBar";
import CategoriesContextProvider from "./Context/CategoriesContext";
import SliderCategories from "./Components/SliderCategories";
import Products from "./Components/Products";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Cart from "./Components/Cart";
import Categories from "./Components/Categories";
import Layout from "./Components/Layout";
import Home from "./Components/Home";
import Register from "./Components/Register";
import Login from "./Components/Login";


let x = createBrowserRouter([
{path: "" , element: <Layout/>,children: [
  {path: "" , element: <Home/>},
  {path: "products" , element: <Products/>},
  {path: "cart" , element: <Cart/>},
  {path: "categories" , element: <Categories/>},
  {path: "register" , element: <Register/>},
  {path: "login" , element: <Login/>},
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
