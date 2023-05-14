import { createBrowserRouter } from "react-router-dom";
import Products from "../pages/Products";
import Orders from "../pages/Orders";
import App from "../App";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    //TODO errorElement: <ErrorPage />,
  },
  {
    path: "/products",
    element: <Products  />,
  },
  {
    path: "/orders",
    element: <Orders />,
  },
]);
