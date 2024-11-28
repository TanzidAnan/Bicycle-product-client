import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Roots from './compontents/Roots/Roots';
import Header from './compontents/Header/Header';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Roots></Roots>,
    children:[
      {
        path:'/',
        element:<Header></Header>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
