import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import GAPI from '../utils/googleAPI';
import booksAPI from '../utils/booksAPI';
import BooksTable from '../components/BooksTable/BooksTable';
import { Button, Col, Container } from 'react-bootstrap';
import FooterPage from './layout/Footer/Footer';
import StickySearchNav from '../components/StickySearchNav';

const SearchBooks = ({ match }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [fetchedBooks, setFetchedBooks] = useState([]);

  let { student_id } = useParams();

  const searchGoogleBooksAPI = async (query) => {
    try {
      let response = await GAPI.searchGoogleBooks(query);
      setFetchedBooks(response.data);
    } catch (error) {
      if (fetchedBooks.length === 0) {
        console.error('Try another search');
      }
      console.log(error);
    }
  };

  const handleInputChange = (event) => {
    const value = event.target.value.toLowerCase();
    setSearchTerm(value);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log('submit button works');
    searchGoogleBooksAPI(searchTerm);
  };

  const handleSaveBtn = async (bookData) => {
    await booksAPI.saveBook({ ...bookData, student_id });
  };

  return (
    <>
      {/* className="pageContainer d-flex justify-content-around" */}
        <StickySearchNav
          onClick={handleFormSubmit}
          value={searchTerm}
          onChange={handleInputChange}
        />
      <Container>

        <BooksTable handleSaveBtn={handleSaveBtn} books={fetchedBooks} />
      </Container>
      <FooterPage />
    </>
  );
};

export default SearchBooks;
