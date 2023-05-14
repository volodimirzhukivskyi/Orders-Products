import Item from "../components/Item/Item";
import {Container} from "react-bootstrap";
import {SCHEME_ORDER, SCHEME_PRODUCT_IN_ORDER} from "../helpers/constans";
import styles from "../components/Item/Item.module.scss"
const Orders = ({orders}) => {

  return (
    <div>
      <h2>Orders</h2>
      {orders?.map((order) =>  <Container className={styles.item__wrapper} key={order.id}>
          <Item order={order} scheme={SCHEME_ORDER} additionalScheme={SCHEME_PRODUCT_IN_ORDER}/>
      </Container>

      )}
    </div>
  );
};
export default Orders;
