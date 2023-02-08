import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import App from './App'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    //errorElement: <h1>Error</h1>
  },
  {
    path: "/vip",
    element: <h1>Hello</h1>
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);