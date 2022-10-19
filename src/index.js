import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'

import HomePage from './Pages/homePage';
import AboutPage from './Pages/aboutPage';
import ContactPage from './Pages/contactPage';

const Router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />
  },
  {
    path:"/about",
    element: <AboutPage />
  },
  {
    path:"/contact",
    element: <ContactPage />  
  }
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={Router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();