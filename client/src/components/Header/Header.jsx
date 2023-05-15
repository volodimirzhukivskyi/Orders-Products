import React from "react";
import {Link} from "react-router-dom";
import {Container,  Navbar} from "react-bootstrap";
import ActiveSessionsCounter from "../ActionSesionCounter/ActionSesionCounter";
import DateTimer from "../Date/Date";
import {ReactComponent as Logo} from '../../assets/header/logo-juce-svgrepo-com.svg';
import styles from "./Header.module.scss";
import {addCssClass} from "../../helpers/otherFunction";
const Header = () => {
    return (
        <Navbar className={addCssClass("shadow p-3  bg-white rounded ",styles.headerNav)} bg="white" variant="white" expand="lg">
            <Container>
                <Navbar.Brand className={styles.logo} >
                    <Link style={{textDecoration:"none", color:"#60ff00"}} to="/">
                        <
                            Logo className={styles.logo_svg}
                        />   {' '}
                        Inventory
                    </Link>

                </Navbar.Brand>

                <ActiveSessionsCounter/>
                <DateTimer/>
            </Container>
        </Navbar>
    );
};

export default Header;
