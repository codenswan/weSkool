import React from 'react';
import { Button, Form, FormControl, Navbar } from 'react-bootstrap';

const StickySearchNav = (props) => {
  return (
    <Navbar bg="dark" variant="dark" sticky="top">
      <Form inline>
        <FormControl
          onChange={props.onChange}
          value={props.value}
          className="mr-sm-2"
          type="text"
          placeholder="Search"
        />
        <Button
          size="sm"
          type="submit"
       
          onClick={props.onClick}
        >
          Search
        </Button>
      </Form>
    </Navbar>
  );
};

export default StickySearchNav;
