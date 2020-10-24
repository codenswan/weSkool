import React from 'react';
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBFooter,
  MDBNav,
  MDBNavItem,
  MDBBtn,
  MDBIcon,
} from 'mdbreact';

const FooterPage = () => {
  return (
    <MDBFooter color="stylish-color" className="pt-4 mt-4 fixed-bottom">
      <MDBContainer>
        <MDBRow>
          <MDBCol className="mb-4" >
            <MDBNav>
              <MDBNavItem>
                <MDBBtn href="/" gradient="purple">
                  <MDBIcon icon="home" size="2x" />
                </MDBBtn>
              </MDBNavItem>
              <MDBNavItem>
                <MDBBtn href="/students" gradient="purple">
                  <MDBIcon icon="address-card" size="2x" />
                </MDBBtn>
              </MDBNavItem>
            </MDBNav>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </MDBFooter>
  );
};

export default FooterPage;
