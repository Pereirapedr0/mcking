import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import "./index.css";

import { addBurger, listOrder, getOrder, addIngredients } from './routes/orders/localStorageRepository';

import WelcomePage from "./routes/WelcomePage";
import Order from "./routes/orders/Order";
import Menu from "./routes/orders/Menu";
import Summary from "./routes/orders/Summary";
import ErrorPage from "./ErrorPage";
import Confirm from "./routes/orders/Confirm";
import EditOrder from "./routes/orders/EditOrder";


const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<WelcomePage />} errorElement={<ErrorPage />} />
      <Route path="order" element={<Order />} errorElement={<ErrorPage />} >
        <Route path="menu" element={<Menu />} action={addBurger}>
          <Route path="summary" element={<Summary />} loader={listOrder} />
        </Route>
        <Route path="confirm" element={<Confirm />} loader={listOrder} errorElement={<ErrorPage />} >
          <Route path="summary" element={<Summary />} loader={listOrder} />
        </Route>
        <Route 
          path="editOrder/:name"
          element={<EditOrder />}
          action={addIngredients}
          loader={({ params }) => {
              return getOrder(params.name);
          }}
          errorElement={<ErrorPage />}
        />
      </Route>
      
    </>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
