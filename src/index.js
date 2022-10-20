import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './App.css'
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'

import HomePage from './Pages/homePage';
import AboutPage from './Pages/aboutPage';
import Root from './Routes/root';
import ContactPage from './Pages/contactPage';
import ErrorPage from './error-page';
import App from './App'
import SignUpPage from './Pages/signupPage';
import SignUpCard from "./Components/SignUpCard"

const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true,
        element: <HomePage />,
        
      },  
      {
        path: "/about",
        element: <AboutPage />
      },
      {
        path: "/contact",
        element: <ContactPage />
      },
      {
        path: "/signup",
        element:  <SignUpPage/>,
        children:[
          {
            path:"/signup/:email",
            element: <SignUpCard />
          }
        ]
      }
  
  
  ]
  },
 
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
