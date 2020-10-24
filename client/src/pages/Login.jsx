import React from 'react';
import { Button, Col, Layout, Row } from 'antd';
import './styles.css';
import LoginButton from '../components/LoginButton/LoginButton';
import logo from './logo.png';
import Header from './layout/Header/Header';
import FooterPage from './layout/Footer/Footer';

const Login = () => {
  return (
    <>
      {/* <Header /> */}
      <Layout className="pageContainer">

              <img src={logo} alt="homeschool logo" className="img-fluid" />
              <LoginButton>Login</LoginButton>
 
      </Layout>
      {/* <FooterPage/> */}
    </>
  );
};

export default Login;
