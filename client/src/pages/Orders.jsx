import Item from "../components/Item/Item";
import {Container} from "react-bootstrap";
import {SCHEME_ORDER, SCHEME_PRODUCT_IN_ORDER} from "../helpers/constans";
import styles from "../components/Item/Item.module.scss"
import styleOwnList from "./OwnPage.module.scss"
import {useSelector} from "react-redux";
import {getOrder} from "../redux/selectors/order.select";
const Orders = () => {
    const orders=useSelector(getOrder)

  return (
    <div>
      <h2 className={styleOwnList.title}>Orders</h2>
      {orders?.map((order) =>  <Container className={styles.item__wrapper} key={order.id}>
          <Item order={order} scheme={SCHEME_ORDER} additionalScheme={SCHEME_PRODUCT_IN_ORDER}/>
      </Container>

      )}
    </div>
  );
};
export default Orders;
