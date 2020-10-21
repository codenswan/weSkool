import React, { Component } from 'react';
import { MDBCollapse, MDBHamburgerToggler, MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink } from 'mdbreact';

class Header extends Component {
  state = {
    collapse1: false,
    collapseID: '',
  };

  toggleCollapse = (collapseID) => () => {
    this.setState((prevState) => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : '',
    }));
  };

  toggleSingleCollapse = (collapseId) => {
    this.setState({
      ...this.state,
      [collapseId]: !this.state[collapseId],
    });
  };

  render() {
    return (
      <MDBNavbar color="default-color" scrolling fixed="top" id="header">
        <MDBNavbarBrand>weSkool</MDBNavbarBrand>
        <MDBHamburgerToggler
          color="#d3531a"
          id="hamburger1"
          onClick={() => this.toggleSingleCollapse('collapse1')}
        />
        <MDBCollapse isOpen={this.state.collapse1} navbar>
          <MDBNavbarNav left>
            <MDBNavItem active>
              <MDBNavLink to={'/'}>Home</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem >
              <MDBNavLink to={'/students'}>Students</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem >
              <MDBNavLink to={'/activities'}>Activities</MDBNavLink>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
    );
  }
}

export default Header;
