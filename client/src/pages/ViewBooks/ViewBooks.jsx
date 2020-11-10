import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import BooksTable from '../../components/BooksTable/BooksTable';
import BookAPI from '../../utils/booksAPI';
import StudentAPI from '../../utils/studentAPI';
import Authenticated from '../layout/Authenticated/Authenticated';
import Footer from '../layout/Footer/Footer';
import './viewbooks.css';

const ViewBooks = ({ match }) => {
  const [studentBooks, setStudentBooks] = useState([]);

  useEffect(() => {
    getAllStudentBooks();
  }, []);

  const getAllStudentBooks = async () => {
    let student_id = match.params.student_id;
    const allbooks = await StudentAPI.getStudentBooks(student_id);
    setStudentBooks(allbooks.data.books);
    console.log(allbooks.data.books);
  };

  const deleteButton = async (id) => {
    try {
      await BookAPI.deleteBook(id);
      getAllStudentBooks();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Authenticated>
      <Container className="viewContainer">
        {studentBooks ? (
          <BooksTable
            books={studentBooks}
            deleteButton={deleteButton}
          ></BooksTable>
        ) : (
          <h1>There are no books for this student</h1>
        )}
      </Container>
      <Footer />
    </Authenticated>
  );
};

export default ViewBooks;
