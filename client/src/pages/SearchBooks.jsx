import React, { useState } from 'react';
import {useParams} from 'react-router-dom'
import GAPI from '../utils/googleAPI';
import booksAPI from '../utils/booksAPI';
import BooksTable from '../components/BooksTable/BooksTable';
import { Button, Col, Container } from 'react-bootstrap';

const SearchBooks = ({match}) => {
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
      <Container >
      

          <form className="form-inline mt-4 mb-4">
                       <input
              onChange={handleInputChange}
              value={searchTerm}
              className="form-control form-control-sm ml-3 w-75"
              type="text"
              placeholder="Search"
              aria-label="Search"
            />
            <Button
              gradient="purple"
              rounded
              size="sm"
              type="submit"
              className="mr-auto"
              onClick={handleFormSubmit}
            >
              Search
            </Button>
          </form>
         
              <BooksTable handleSaveBtn={handleSaveBtn} books={fetchedBooks}/>
      </Container>
    </>
  );
};

export default SearchBooks;
