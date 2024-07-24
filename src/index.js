import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Home from './views/home/home';
import About from './views/about/about';
import Services from './views/services/services';
import TrainingServices from './views/trainingServices/trainingServices';
import NABETSector from './views/nabetSector/nabetSector';
import AccreditationAwards from './views/accreditationAwards/accreditationAwards';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/about-us',
        element:<About></About>
      },
      {
        path:'/our-services',
        element:<Services></Services>
      },
      {
        path:'/training-services',
        element:<TrainingServices></TrainingServices>
      },
      {
        path:'/service-sectors',
        element:<NABETSector></NABETSector>
      },
      {
        path:'/accreditation-awards',
        element:<AccreditationAwards></AccreditationAwards>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
