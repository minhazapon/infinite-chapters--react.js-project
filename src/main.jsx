import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root';
import Home from './Home';
import './vanilacss/Vanila.css'
import Pages from './Page file/Pages';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>   ,
    children: [
      {
        path: "/",
        element: <Home></Home>  ,
      },
      {
        path: "/listed",
        element: <Home></Home>  ,
      },
      {
        path: "/pages",
        element: <Pages></Pages>  ,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={router} />
  </StrictMode>,
)
