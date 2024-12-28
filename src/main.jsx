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
import WishlistAdd from './wish crud file/WishlistAdd';


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
        path: "/addForm",
        element: <WishlistAdd></WishlistAdd>   ,
      },
      {
        path: "/Book",
        element: <Books></Books> ,
        // loader: () => fetch('http://localhost:5000/bookData')
      },
      {
        path: "/Book/:id",
        element: <PerBookDetails></PerBookDetails> ,
        loader: ({params}) => fetch(`https://infinite-server-express-js.onrender.com/bookData/${params.id}`)
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={router} />
  </StrictMode>,
)
