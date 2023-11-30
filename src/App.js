import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Error from "./Components/Error";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";


const Applayout=()=>{
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  )
}

const appRouter = createBrowserRouter([
{
  path: "/",
  element: <Applayout />,
  errorElement: <Error />,
  children: [
    {
      path: "/about",
      element: <About />
    },
    {
      path: "/",
      element: <Body />
    },
    {
      path: "/contact",
      element: <Contact />
    }
  ],
},
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);