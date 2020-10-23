import React, { Component } from 'react';
import {
  MDBCollapse,
  MDBHamburgerToggler,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
} from 'mdbreact';
import LoginButton from '../LoginButton/LoginButton';
import LogoutButton from '../LogoutButton/LogoutButton';

class Header extends Component {
  state = {
    open: false,
  };

  toggleOpen = () => {
    this.setState({
      open: !this.state.open,
    });
  };

  render() {
    return (
      <MDBNavbar color="default-color" scrolling fixed="top" id="header">
        <MDBNavbarBrand>weSkool</MDBNavbarBrand>
        <MDBHamburgerToggler
          color="#d3531a"
          id="hamburger1"
          onClick={() => this.toggleOpen()}
        />
        <MDBCollapse isOpen={this.state.open} navbar>
          <MDBNavbarNav left>
            <MDBNavItem>
              <MDBNavLink active onClick={this.toggleOpen} to={'/students'}>Students</MDBNavLink>
            </MDBNavItem>
            {/* <MDBNavItem>
              <MDBNavLink onClick={this.toggleOpen} to={'/activities'}>Activities</MDBNavLink>
            </MDBNavItem> */}
            <MDBNavItem>
              <LogoutButton></LogoutButton>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
    );
  }
}

export default Header;
