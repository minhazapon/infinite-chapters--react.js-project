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
import ListedBooks from './listed books/ListedBooks';
import Calculator from './home file/Calculator';
import Books from './home file/Books';
import PerBookDetails from './home file/PerBookDetails';


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
        element: <ListedBooks></ListedBooks>   ,
      },
      {
        path: "/pages",
        element: <Pages></Pages>  ,
      },
      {
        path: "/calculator",
        element: <Calculator></Calculator>      ,
      },
      {
        path: "/Book",
        element: <Books></Books> ,
        // loader: () => fetch('http://localhost:5000/bookData')
      },
      {
        path: "/Book/:id",
        element: <PerBookDetails></PerBookDetails> ,
        loader: ({params}) => fetch(`http://localhost:5000/bookData/${params.id}`)
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={router} />
  </StrictMode>,
)
