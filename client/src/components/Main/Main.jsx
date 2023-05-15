import {useEffect} from "react";
import {ORDERS_API, PRODUCTS_API} from "../../helpers/constans";
import {sendRequest} from "../../helpers/otherFunction";
import {useDispatch} from "react-redux";
import {setOrders} from "../../redux/reducers/order.reducer";
import NavigationMenu from "../NavigationMenu/NavigationMenu";
import {Outlet} from "react-router-dom";
import {setProducts} from "../../redux/reducers/product.reducer";
import styles from "./Main.module.scss"
const Main = () => {
    const dispatch=useDispatch();
    useEffect(() => {
        (async function fetchData() {
            try {
                const orders = await sendRequest(ORDERS_API)

                const products = await sendRequest(PRODUCTS_API)

                orders.map(order => {
                    const orderProducts = products.filter(product => product.orderName === order.arrival_name)
                    order.products = orderProducts;
                    return orderProducts
                })
                dispatch(setOrders(orders))
                dispatch(setProducts(products))
            } catch (e) {
                console.log(e)
            }
        })()


    }, [])
    return <main className={styles.main}>
        <NavigationMenu/>
        <div className={styles.contentWrapper}>
            <Outlet/>
        </div>


    </main>
}
export default Main