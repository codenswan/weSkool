import React, { Component } from 'react';
import { Image, Navbar } from 'react-bootstrap';
import logo from './logo.png';
import LoginButton from '../../../components/LoginButton/LoginButton';
import LogoutButton from '../../../components/LogoutButton/LogoutButton';

const Header = () => {
  return (
    <>
      <Navbar id="headerNav" bg="black" variant="dark">
        <img width="30" height="30" id="headerLogo" src={logo} />
      </Navbar>
    </>
  );
};

export default Header;

{
  /* width="30"
        height="30" */
}
