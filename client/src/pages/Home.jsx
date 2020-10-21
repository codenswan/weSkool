import React from 'react';
import { MDBBtn, MDBBtnGroup, MDBCol, MDBRow } from 'mdbreact';
import BtnGroupPage from '../components/BtnGroupPage/BtnGroupPage';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { BiUserPlus } from 'react-icons/bi';
import './styles.css';

const Home = () => {
  return (
      <Container id="homeContainer">
      <Row>
        <Col>
          <ButtonGroup id="homeBtns" vertical >
            <Button id="loginBtn"> Login</Button>
            <Button >
              {' '}
              <BiUserPlus /> Add Teacher{' '}
            </Button>
          </ButtonGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
