import React from 'react';
import { Container } from 'react-bootstrap';
import './Login.css';
// import LoginButton from '../components/LoginButton/LoginButton';
// import logo from './logo.png';
import logo from './weSkool.gif'
import LoginForm from '../../containers/home/LoginForm'

const Login = () => {
  return (
    <>
      {/* <Header /> */}
      <Container className="loginContainer">
        <img src={logo} alt="homeschool logo" className="img-fluid" />
        <LoginForm/>
        
        
        
        {/* <LoginButton>Login</LoginButton> */}
      </Container>
      {/* <FooterPage/> */}
    </>
  );
};

export default Login;
