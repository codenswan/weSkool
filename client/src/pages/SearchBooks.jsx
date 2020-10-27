import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import GAPI from '../utils/googleAPI';
import booksAPI from '../utils/booksAPI';
import BooksTable from '../components/BooksTable/BooksTable';
import { Container } from 'react-bootstrap';
import FooterPage from './layout/Footer/Footer';
import StickySearchNav from '../components/StickySearchNav/StickySearchNav';
import Authenticated from './layout/Authenticated/Authenticated';
import useDebounce from '../utils/debounceHook';

const SearchBooks = ({ match }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [fetchedBooks, setFetchedBooks] = useState([]);
  const [error, setError] = useState('');

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
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  useEffect(() => {
    if (!searchTerm) {
      return;
    }

    if (debouncedSearchTerm) {
      searchGoogleBooksAPI(searchTerm)
        .then((res) => {
          if (res.data.length === 0) {
            throw new Error('No results found.');
          }
          if (res.data.status === 'error') {
            throw new Error(res.data.message);
          }
        })
        .catch((err) => setError(err));
    }
  }, [debouncedSearchTerm]);

  const handleInputChange = (event) => {
    const value = event.target.value.toLowerCase();
    setSearchTerm(value);
    // searchGoogleBooksAPI(searchTerm);
  };

  // const handleFormSubmit = async (event) => {
  //   event.preventDefault();

  //   searchGoogleBooksAPI(searchTerm);
  // };

  const handleSaveBtn = async (bookData) => {
    await booksAPI.saveBook({ ...bookData, student_id });
    Swal.fire('Book has been saved!', '', 'success');
  };

  return (
    <Authenticated>
      <StickySearchNav
        // onClick={handleFormSubmit}
        value={searchTerm}
        onChange={handleInputChange}
      />
      <Container>
        <BooksTable handleSaveBtn={handleSaveBtn} books={fetchedBooks} />
      </Container>
      <FooterPage />
    </Authenticated>
  );
};

export default SearchBooks;
