import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, NavItem, Container } from 'react-materialize';

export const Header = () => (
    <header className="header">
        <Container>
            <Navbar brand='Jacob Sickels' right>
                <NavItem href='/'>Home</NavItem>
                <NavItem href='/projects'>Projects</NavItem>
                <NavItem href='/contact'>Contact</NavItem>
            </Navbar>
        </Container>
    </header>
);

export default Header;