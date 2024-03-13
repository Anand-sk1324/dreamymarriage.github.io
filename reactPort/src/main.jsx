import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './style/style.css'
import App from './App';
import Home from './Home';
import Services from './Services';
import ContactUs from './ContactUs';
import Admin from './Admin';
import UserInfo from './UserInfo';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "services",
    element: <Services />,
  },
  {
    path: "contact-us",
    element: <ContactUs />,
  },
  {
    path: "admin",
    element: <Admin />,
  },
  {
    path: "admin/:id",
    element: <UserInfo />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <button id="toTheTop" onClick={() => window.scrollTo({top: 0, left: 0, behavior: 'smooth', })}>O</button>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
