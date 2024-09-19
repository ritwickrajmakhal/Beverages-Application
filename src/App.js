import React from "react";
import Navbar from "./components/Navbar";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import "./App.css";
import CocktailDetails from "./components/CocktailDetails";

// Layout component to wrap Navbar with routing pages
const Layout = () => (
  <>
    <Navbar />
    <Outlet /> {/* This will render the routed component (Home, About, etc.) */}
  </>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // Wrapping the routed pages with Navbar
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/cocktail/:id",
        element: <CocktailDetails />,
      }
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
