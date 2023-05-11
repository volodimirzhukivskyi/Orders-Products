import React from "react";
import { Navbar, Container, Form, Button, Stack } from "react-bootstrap";
import ActiveSessionsCounter from "../ActionSesionCounter";
import DateTimer from "../Date";

const Header = () => {
  return (
    <Navbar bg="black" variant="white" expand="lg">
      <Container>
        <Form.Control
          placeholder="Username"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
        <ActiveSessionsCounter />
        <DateTimer />
      </Container>
    </Navbar>
  );
};

export default Header;
