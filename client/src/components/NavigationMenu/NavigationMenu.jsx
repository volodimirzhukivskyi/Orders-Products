import {Link} from "react-router-dom";
import {Nav} from "react-bootstrap";
import styles from "./NavigationMenu.module.scss"
import {addCssClass} from "../../helpers/otherFunction";
const NavigationMenu = () => {
    return <Nav
        className={addCssClass("shadow p-3 mb-5 bg-white rounded",styles.sideBar)}
        activeKey="/home">
        <Nav.Item>
            <Link className={styles.sideBar__link} to="/products">route products</Link>
        </Nav.Item>
        <Nav.Item>
            <Link className={styles.sideBar__link} to="/orders">route orders</Link>
        </Nav.Item>
    </Nav>


}
export default NavigationMenu;