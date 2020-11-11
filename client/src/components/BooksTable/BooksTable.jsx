import React from 'react';
import { Button, ButtonGroup, Card } from 'react-bootstrap';

//* the books prop is passed down from both search and saved pages
const BooksTable = (props) => {
  const bookCard = {
    width: '100%',
    marginBottom: '15px',
    marginTop: '15px',
  }


  return (
    <>
      {props.books.map((book) => (
        <Card style={bookCard} key={book.ID}>
          <Card.Body>
          {book._id ? (
            <Card.Text>Log date: {new Date(book.createdAt).toDateString()}</Card.Text>
          ) : (
            <Card.Header>
              <Card.Img src={book.Image} style={{ width: '5rem' }} />
            </Card.Header>
          )}

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
