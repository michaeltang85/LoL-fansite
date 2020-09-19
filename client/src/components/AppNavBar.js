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
                    <NavbarBrand href="/">LoL fansite</NavbarBrand>
                    <NavbarToggler onClick={this.toggle}>
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="mr-auto" navbar>
                                <NavItem>
                                    <NavLink href="/">
                                        Champions
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="">
                                        TFT
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="https://github.com/michaeltang85">
                                        Github
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </NavbarToggler>
                    <NavLink>Champions</NavLink>
                    <NavLink>TFT</NavLink>
                    <NavLink>Github</NavLink> 
                </Container>
            </Navbar>
        </div>
        );
    }
}



export default AppNavBar;