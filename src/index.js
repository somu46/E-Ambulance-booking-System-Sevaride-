import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Root from './Root/Root.js';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { About,Login,Contact, Error,BookNow, Services } from './Pages';
import Ride from './Pages/Ride/Ride.js';


const link = document.createElement('link');
link.href = 'https://fonts.googleapis.com/css?family=poppins:400,700&display=swap';
link.rel = 'stylesheet';
document.head.appendChild(link);

const router= createBrowserRouter([
  {
    path:"",
    element:<Root/>,
    children:[
      {
        path:"/",
        element:<App/>
      },
      {
        path:"/login",
        element:<Login/>,
      },
      {
        path:"about-us",
        element:<About/>,
      },
      {
        path:"/Contact",
        element:<Contact/>,
      },
      {
        path:"/BookNow",
        element:<BookNow/>
      },
      {
        path:"/ride",
        element:<Ride/>,
      },
      {
        path:"/Services",
        element:<Services/>,
      },
      {
        path:"*",
        element:<Error/>,
      },
    ]
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      {/* <RouterProvider router={router} /> */}
      <RouterProvider router={router}/>
  </React.StrictMode>
);



