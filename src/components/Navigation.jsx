import React from "react";
import { Link, NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../css/Nav.css";
import logo from "../assets/coins.png";

const Navigation = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark" expand="sm">
        <Container>
          <Link to="/" className="navbar-brand">
            <img alt="logo" src={logo} />
            <span className="nav-span">CryptoMania</span>
          </Link>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <div className="links">
                <NavLink to="/feedpage" className="nav-link">
                  <span className="nav-span">Feed</span>
                </NavLink>
                <NavLink to="/trending" className="nav-link">
                  <span className="nav-span">Trending</span>
                </NavLink>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;
