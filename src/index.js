import React from "react";
import { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Root from "./Root/Root.js";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { About, Login, Error, Services } from "./Pages";
import Ride from "./Pages/Ride/Ride.js";
import SignUpRoot from "./Pages/SignUp/RootOutelet/SignUpLogInRoot.js";
import { User, Driver } from "./Pages/SignUp/index.js";
import { Toaster } from "react-hot-toast";
import {DriverRide} from "./Pages";
import LoadingSpinner from "./components/Lazycomponents/LoadingSpinner.js";
import { CustomSpinner } from "./components/Lazycomponents/LoadingSpinner.js";



const App=lazy(()=>waitPromise(3000).then(()=>import("./App.js")));
const BookNow = lazy(() => waitPromise(3000).then(()=>import("./Pages/BookNow/BookNow.js")));
const Contact=lazy(()=>waitPromise(3000).then(()=>import("./Pages/ContactUs/Contact.js")));


const waitPromise=(time)=>{
    
  return new Promise (resolve=>{
    setTimeout(()=>{
      resolve();
    },time)
  })
}

const link = document.createElement("link");
link.href =
  "https://fonts.googleapis.com/css?family=poppins:400,700&display=swap";
link.rel = "stylesheet";
document.head.appendChild(link);

const router = createBrowserRouter([
  {
    path: "",
    element: <Root />,
    children: [
      {
        path: "/",
        element:(
          <Suspense
          fallback={<LoadingSpinner/>}
          // fallback={<div className=" min-h-screen flex justify-center items-center text-orange-700 text-3xl font-semibold">Pleas wait  and keep your passion cold ! this page is loading...... </div>}
          >
                <App />
          </Suspense>
           
          ),
      },
      {
        path: "login",
        element: <SignUpRoot />,
        children: [
          {
            path: "",
            element: <Login />,
          },
          {
            path: "user",
            element: <User />,
          },
          {
            path: "driver",
            element: <Driver />,
          },
        ],
      },
      {
        path: "about-us",
        element: <About />,
      },
      {
        path: "/Contact",
        element: (
          <Suspense
          fallback={<CustomSpinner/>}
          // fallback={<div className=" min-h-screen flex justify-center items-center text-orange-700 text-3xl font-semibold">Pleas wait ! this page is loading...... </div>}
          >
            <Contact/>
          </Suspense>
        ),
      },
      {
        path: "/BookNow",
        element: (
          <Suspense
            fallback={<div className=" min-h-screen flex justify-center items-center text-orange-700 text-3xl font-semibold">Pleas wait  and keep your passion cold ! this page is loading...... </div>}
          >
            <BookNow />
             
          </Suspense>
        ),
      },
      {
        path: "/ride",
        element: <Ride />,
      },
      {
        path: "/Services",
        element: <Services />,
      },
      {
        path:"/driverRide",
        element: <DriverRide />
      },
      {
        path: "*",
        element: <Error />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <Toaster position="top-center" reverseOrder={false} />
  </React.StrictMode>
);
