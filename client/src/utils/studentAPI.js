import axios from 'axios';

export default {
  //* get all students
  getStudents: () => {
    return axios.get('/api/students');
  },
  // //* Saves a student to the database
  // saveBook: (bookData) => {
  //   return axios.post('/api/students', bookData);
  // },
};
