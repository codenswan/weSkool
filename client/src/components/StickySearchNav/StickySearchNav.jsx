import React from 'react';
import { Container, FormControl, InputGroup, Navbar } from 'react-bootstrap';

const StickySearchNav = (props) => {
  return (
    <Container>
    <Navbar sticky="top">
      <InputGroup>
        <FormControl
          onChange={props.onChange}
          value={props.value}
          className="mr-sm-2"
          type="text"
          placeholder="Search"
        />
        {/* <InputGroup.Append>
        {/* <Button
          size="sm"
          type="submit"
       
          onClick={props.onClick}
        >
          Search
        </Button>
        </InputGroup.Append> */}
       
      </InputGroup> 
      </Navbar>
      </Container>
  );
};

export default StickySearchNav;
