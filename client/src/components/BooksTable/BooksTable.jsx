import React from 'react';
import { Button, ButtonGroup, Card } from 'react-bootstrap';
import './booksTable.css';

//* the books prop is passed down from both search and saved pages
const BooksTable = (props) => {
  return (
    <>
      {props.books.map((book) => (
        <Card id="bookCard" key={book.ID}>
          {book._id ? (
            //formats variable into readable date
            <div>Log date: {new Date(book.createdAt).toDateString()}</div>
          ) : (
            <Card.Header>
              <Card.Img src={book.Image} style={{ width: '10rem' }} />
            </Card.Header>
          )}

          <Card.Body>
            <Card.Title>
              {book.Title}: <Card.Subtitle>{book.Subtitle}</Card.Subtitle>
            </Card.Title>
            <Card.Text>Author: {book.Author}</Card.Text>
            {/* <Card.Text>Desciption: {book.Description} </Card.Text> */}
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
          </Card.Body>
        </Card>
      ))}
    </>
  );
};

export default BooksTable;
