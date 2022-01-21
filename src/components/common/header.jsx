import { Collapse, NavbarToggler, NavItem ,Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input} from 'reactstrap';
import React, { Component } from 'react';
import { Nav, Navbar, NavbarBrand } from 'reactstrap';
import { NavLink,Link } from 'react-router-dom';

class Header extends Component{
    constructor(){
        super()
        this.state={
            open:false,
            modalopen:false
        }
    }


    handlenavtoggle=()=>{
        this.setState({open:!this.state.open})
    }

    handleLoginClick=()=>{
        this.setState({
            modalopen:!this.state.modalopen
        })
    }


    render(){
        return(
            <div className="home">
                <Navbar color="light" light expand="md sm" className="navbarflex">
                    <NavbarBrand href="/home" > NGO </NavbarBrand>
                    <NavbarToggler onClick={this.handlenavtoggle} toggle />
                    <Collapse isOpen={this.state.open} navbar className="navbarflex">
                        <Nav  className="mr-5 " navbar >
                            <NavItem className="m-2">
                                <NavLink to="/home"> 
                                    Home
                                </NavLink>
                            </NavItem>
                           
                            <NavItem className="m-2">
                                <NavLink to="/events"> 
                                    Events
                                </NavLink>
                            </NavItem>
                           
                            <NavItem className="m-2">
                                <NavLink to="/gallary"> 
                                    Gallary
                                </NavLink>
                            </NavItem>
                           
                            <NavItem className="m-2">
                                <NavLink to="/aboutus"> 
                                    About us
                                </NavLink>
                            </NavItem>
                            <NavItem className="m-2">
                                <a href="/home/#contactus"> 
                                    Contact us
                                </a>
                            </NavItem>
                           
                        </Nav>
                    </Collapse>
                    <Button className="btn btn-success m-1 "  onClick={this.handleLoginClick} > <i className="fa fa-sign-in"></i> </Button>
                    <Link to="/donate" className="donate">  <Button className="btn btn-success " >  Donate us   </Button></Link>
                </Navbar>
               
               <Modal isOpen={this.state.modalopen} toggle={this.handleLoginClick} className="p-5" >
                   <ModalHeader toggle={this.handleLoginClick} >
                           <p className="black pr-5">Login</p>
                   </ModalHeader>
                   <ModalBody className="p-5 black">
                            <Form action="/">
                                <FormGroup >
                                    <Label htmlFor="username" >Username:</Label> 
                                    <Input placeholder="username" id="username" name="username" required />
                                </FormGroup>
                                <FormGroup>
                                    <Label htmlFor="password">Password:</Label>
                                    <Input placeholder="password" id="password" name="password" required />
                                </FormGroup>
                                <Button >Submit</Button>
                            </Form>
                   </ModalBody>
               </Modal>
            </div>
        )
    }
}

export default Header;