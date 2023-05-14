import React from "react";
import {Container, Form, Navbar} from "react-bootstrap";
import ActiveSessionsCounter from "../ActionSesionCounter/ActionSesionCounter";
import DateTimer from "../Date/Date";
import {ReactComponent as Logo} from '../../assets/header/logo-juce-svgrepo-com.svg';
import styles from "./Header.module.scss";
const Header = () => {
    return (
        <Navbar bg="white" variant="white" expand="lg">
            <Container>
                <Navbar.Brand className={styles.logo} href="#home">
                    <
                        Logo className={styles.logo_svg}
                    />{' '}
                    Inventory
                </Navbar.Brand>
                <Form.Control
                    size={'sm'}
                    className="w-25"
                    placeholder="Search"
                    aria-label="Search"
                    aria-describedby="basic-addon1"
                />
                <ActiveSessionsCounter/>
                <DateTimer/>
            </Container>
        </Navbar>
    );
};

export default Header;
