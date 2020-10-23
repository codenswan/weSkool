import React from 'react';
import { MDBContainer } from 'mdbreact';
import { Button, ButtonGroup, Card, Container } from 'react-bootstrap';

//* the books prop is passed down from both search and saved pages
const BooksTable = (props) => {
  return (
    <Container>
      {props.books.map((book) => (
        <Card key={book.ID}>
          <Card.Header>
            <Card.Img src={book.Image} style={{ width: '10rem' }} />
          </Card.Header>
          <Card.Body>
            <Card.Title>
              {book.Title}: <Card.Subtitle>{book.Subtitle}</Card.Subtitle>
            </Card.Title>
            <Card.Text>Author: {book.Author}</Card.Text>
            <Card.Text>Desciption: {book.Description} </Card.Text>
          </Card.Body>
          <ButtonGroup>
            {book._id ? (
              <div>
                <Button
                  onClick={() => props.deleteButton(book._id)}
                  variant="danger"
                  className="mr-2"
                >
                  Delete
                </Button>
                <Button variant="link" target="_blank" href={book.Link}>
                  View Details
                </Button>
              </div>
            ) : (
              <div>
                <Button
                  variant="primary"
                  className="mr-2"
                  onClick={() => props.handleSaveBtn(book)}
                >
                  Save
                </Button>
                <Button variant="link" target="_blank" href={book.Link}>
                  View Details
                </Button>
              </div>
            )}
          </ButtonGroup>
        </Card>
      ))}
    </Container>
  );
};

export default BooksTable;
