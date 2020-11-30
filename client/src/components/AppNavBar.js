import React, { Component } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container
} from 'reactstrap';
import '../App.css';

class AppNavBar extends Component {
    state = {
        isOpen: true
    }

    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }   

    render() {
        return(
        <div>
            <Navbar color="dark" dark expand="sm" className="mb-5">
                <Container>
                    <NavbarBrand href="/">League Of Legends</NavbarBrand>
                    <NavbarToggler onClick={this.toggle}>
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="mr-auto" navbar>
                                <NavItem>
                                    <NavLink href="#">
                                        Champions
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink disabled href="#">
                                        TFT
                                    </NavLink>
                                </NavItem>
                                <NavItem className="navBarTitle">
                                    <NavLink href="https://github.com/michaeltang85/LoL-fansite">
                                        Github
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </NavbarToggler>
                    <NavLink className="navLink" href="#">Champions</NavLink>
                    <NavLink className="navLink" disabled href="#">TFT</NavLink>
                    <NavLink className="navLink" href="https://github.com/michaeltang85/LoL-fansite" target="_blank" rel="noopener noreferrer">Github</NavLink> 
                </Container>
            </Navbar>
        </div>
        );
    }
}



export default AppNavBar;