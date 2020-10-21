import React from 'react';
import { BiUserPlus } from 'react-icons/bi';
import { MDBBtn, MDBBtnGroup, MDBCol, MDBContainer, MDBRow } from 'mdbreact';
import './styles.css';

const Home = () => {
  return (
    <MDBContainer id="homeContainer">
      <MDBRow>
        <MDBCol>
          <MDBBtnGroup id="homeBtns" vertical>
            <MDBBtn id="loginBtn"> Login</MDBBtn>
            <MDBBtn>
              {' '}
              <BiUserPlus /> Add Teacher{' '}
            </MDBBtn>
          </MDBBtnGroup>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default Home;
