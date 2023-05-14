import Orders from "../../pages/Orders";
import {useEffect, useState} from "react";
import {ORDERS_API, PRODUCTS_API} from "../../helpers/constans";
import {sendRequest} from "../../helpers/otherFunction";
import {useSelector} from "react-redux";
import {getOrder} from "../../redux/selectors/order.select";

const Main = () => {
    const [orders, setOrders] = useState([]);
    const [products, setProducts] = useState([]);
    // const orders=useSelector(getOrder)
    useEffect(() => {
        (async function fetchData() {
            try {
                const orders = await sendRequest(ORDERS_API)

                const products = await sendRequest(PRODUCTS_API)
                setProducts(products)

                orders.map(order => {
                    const orderProducts = products.filter(product => product.orderName === order.arrival_name)
                    order.products = orderProducts;
                    return orderProducts
                })
                setOrders(orders)
            } catch (e) {
                console.log(e)
            }
        })()


    }, [])
    return <>
        <Orders orders={orders}/>
        {/*<Products products={products}/>*/}

    </>
}
export default Main