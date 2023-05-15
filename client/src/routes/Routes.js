import { createHashRouter } from "react-router-dom";
import Products from "../pages/Products";
import Orders from "../pages/Orders";
import App from "../App";

export const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    children: [
        {
            path: "/products",
            element: <Products  />,
        },
        {
            path: "/orders",
            element: <Orders />,
        },
    ],
  },

]);
