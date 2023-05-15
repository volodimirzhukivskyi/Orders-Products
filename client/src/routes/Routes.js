import {BrowserRouter, Route, Routes} from "react-router-dom";
import App from "../App";
import Products from "../pages/Products";
import Orders from "../pages/Orders";

export const Router = () => {
    return <BrowserRouter>
        <Routes>
            <Route path="/" element={<App/>}>
                <Route path="/products" element={<Products/>}></Route>
                <Route path="/orders" element={<Orders/>}></Route>
            </Route>
        </Routes>
    </BrowserRouter>
}