import React from 'react';
import { MDBBtnGroup, MDBCol, MDBContainer, MDBRow } from 'mdbreact';
import './styles.css';
import LoginButton from '../components/LoginButton/LoginButton';
import logo from './logo.png';

const Login = () => {
  return (
      <MDBContainer className="pageContainer">
        <MDBRow>
          <MDBCol>
            <MDBBtnGroup id="homeBtns" vertical>
              <img src={logo} alt="homeschool logo" className="img-fluid" />
              <LoginButton>Login</LoginButton>
            </MDBBtnGroup>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
  );
};

export default Login;
