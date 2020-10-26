import React from 'react';
import { Button, Navbar } from 'react-bootstrap';


const StickySearchNav = (props) => {
    return (
        <Navbar bg="dark" sticky="top"> 
  <form className="form-inline mt-4 mb-4">
                       <input
              onChange={props.onChange}
              value={props.value}
              className="form-control form-control-sm ml-3 w-75"
              type="text"
              placeholder="Search"
              aria-label="Search"
            />
            <Button  
              size="sm"
              type="submit"
              className="mr-auto"
              onClick={props.onClick}
            >
              Search
            </Button>
          </form>
        </Navbar>
     )
}
 
export default StickySearchNav;