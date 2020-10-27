import React from 'react';
import { FormControl, InputGroup, Navbar } from 'react-bootstrap';

const StickySearchNav = (props) => {
  return (
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
  );
};

export default StickySearchNav;
