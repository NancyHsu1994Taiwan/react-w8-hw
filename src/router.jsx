import {
  Home,
  Products,
  SingleProduct,
  Carts,
  CheckoutComplete,
  Login,
  NotFound,
} from "./pages/front";
import { AdminLayout, AdminProducts, Orders } from "./pages/admin";
import App from "./App";

import { createHashRouter } from "react-router-dom";
const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "products/:productID",
        element: <SingleProduct />,
      },
      {
        path: "carts",
        element: <Carts />,
      },
      {
        path: "checkoutComplete",
        element: <CheckoutComplete />,
      },
      {
        path: "login",
        element: <Login />,
      },
    ],
  },
  {
    path: "admin",
    element: <AdminLayout />,
    children: [
      {
        index: true,
        element: <AdminProducts />,
      },
      {
        path: "order",
        element: <Orders />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

const router = createHashRouter(routes);
export default router;
