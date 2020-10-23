import React, { useState } from 'react';
import {useParams} from 'react-router-dom'
import { MDBBtn, MDBCol, MDBContainer, MDBIcon } from 'mdbreact';
import GAPI from '../utils/googleAPI';
import booksAPI from '../utils/booksAPI';
import BooksTable from '../components/BooksTable/BooksTable';

const SearchBooks = ({match}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [fetchedBooks, setFetchedBooks] = useState([]);

  console.log(match);
  let { student_id } = useParams();
  console.log(student_id);

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
    console.log(match.params.student_id);
  };

  return (
    <>
      <MDBContainer className="pageContainer d-flex justify-content-around">
        <MDBCol md="6">
          <form className="form-inline mt-4 mb-4">
            <MDBIcon icon="search" />
            <input
              onChange={handleInputChange}
              value={searchTerm}
              className="form-control form-control-sm ml-3 w-75"
              type="text"
              placeholder="Search"
              aria-label="Search"
            />
            <MDBBtn
              gradient="purple"
              rounded
              size="sm"
              type="submit"
              className="mr-auto"
              onClick={handleFormSubmit}
            >
              Search
            </MDBBtn>
          </form>
              </MDBCol>
              <BooksTable handleSaveBtn={handleSaveBtn} books={fetchedBooks}/>
      </MDBContainer>
    </>
  );
};

export default SearchBooks;
