import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, ButtonGroup, C } from 'react-bootstrap';
import './menu.css';
import Footer from '../layout/Footer/Footer';
import Authenticated from '../layout/Authenticated/Authenticated';

const Menu = () => {
  let { student_id } = useParams();

  return (
    <>
      <Authenticated>
        
          <ButtonGroup vertical>
            <Link to={`/students/log/book/${student_id}`}>
              <Button id="menuBtns">New Book</Button>
            </Link>
            <Link to={`/students/log/activity/${student_id}`}>
              <Button id="menuBtns">New Activity</Button>
            </Link>

            <Link to={`/students/viewbooks/${student_id}`}>
              <Button id="logBtns">View Books</Button>
            </Link>
            <Link to={`/students/viewactivities/${student_id}`}>
              <Button id="logBtns">View Activities</Button>
            </Link>
          </ButtonGroup>
        <Footer />
      </Authenticated>
    </>
  );
};

export default Menu;
