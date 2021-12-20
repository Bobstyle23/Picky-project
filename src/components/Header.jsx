import React from "react";
import { Navbar, Container, Form, Nav, FormControl } from "react-bootstrap";
import logo from "../images/icon-picky@3x.png";
// import searchIcon from "../images/search@3x.png";
import "./styles/header.css";
const Header = () => {
  return (
    <div>
      <Navbar className="navBar" bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#">
            <img className="logo" src={logo} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse>
            <Nav className="me-auto my-2 my-lg-0 headerTexts">
              <Nav.Link href="#action1">Products</Nav.Link>
              <Nav.Link className="discussion" href="#action2">
                <p className="discussion-text">Discussions</p>
              </Nav.Link>
              <Nav.Link href="#action2">Blog</Nav.Link>
              <Nav.Link href="#action2">Our Story</Nav.Link>
            </Nav>

            <Form className="d-flex searchField">
              <FormControl
                type="search"
                placeholder="Products, brands, discussions"
                className="me-2 control"
                aria-label="Search"
              />
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
