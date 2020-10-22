import axios from 'axios';

export default {
  //* Fetches books from database
  getBooks: () => {
    return axios.get('/api/books');
  },
  //* Deletes the book with the given id
  deleteBook: (id) => {
    return axios.delete('/api/books/' + id);
  },
  //* Saves a book to the database
  saveBook: (bookData) => {
    return axios.post('/api/books', bookData);
  },
};