import axios from 'axios';

export default {
  //* get all students
  getAllStudents: () => {
    return axios.get('/api/students');
  },
  //* Saves a student to the database
  // saveBook: (bookData) => {
  //   return axios.post('/api/students', bookData);
  // },
  //* get all student activity
  getStudentActivity: (id) => {
    return axios.get('/api/students/activities' + id)
  }
};
