import React from 'react';
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBFooter,
  MDBNav,
  MDBNavItem,
  MDBLink,
  MDBBtn,
  MDBIcon,
} from 'mdbreact';
import { ImHome } from 'react-icons/im';
import './styles.css';

const FooterPage = () => {
  return (
    <MDBFooter color="stylish-color" className="pt-4 mt-4 fixed-bottom">
      <MDBContainer>
        <MDBRow>
          <MDBCol>
            <MDBNav>
              <MDBNavItem>
                <MDBLink>
                  <a id="icons" href="/">
                    <ImHome size="3rem"/> 
                  </a>
                </MDBLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBBtn floating size="lg" gradient="purple"><MDBIcon icon="address-card" /></MDBBtn>
              </MDBNavItem>
            </MDBNav>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </MDBFooter>
  );
};

export default FooterPage;
