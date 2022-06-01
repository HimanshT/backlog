import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import '../css/navbar.css';
import { Outlet } from "react-router-dom";

export default function Nvbar() {
    return (
        <>
            <div className="container-fluid nav_bg">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <Navbar className="navbar" expand="lg">
                            <Container >
                                <Navbar.Brand className="nav-brand" href="/">BACKLOG</Navbar.Brand>
                                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                <Navbar.Collapse id="basic-navbar-nav">
                                    <Nav className="justify-content-end" style={{ width: "100%" }}>
                                        <Nav.Link href="/">Home</Nav.Link>
                                        <Nav.Link href="/newpost">Create Post</Nav.Link>
                                        <Nav.Link href="/signup">Signup</Nav.Link>
                                        <Nav.Link href="/login">Login</Nav.Link>
                                    </Nav>
                                </Navbar.Collapse>
                            </Container>
                        </Navbar>
                    </div>
                </div>
            </div>
            <Outlet />
        </>
    )
}

