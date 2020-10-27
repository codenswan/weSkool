import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';

import LoginButton from '../../../components/LoginButton/LoginButton';
import LogoutButton from '../../../components/LogoutButton/LogoutButton';

const Header = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <LogoutButton>Logout</LogoutButton>
      </Navbar>
    </>
  );
};

export default Header;
