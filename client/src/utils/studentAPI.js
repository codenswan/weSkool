import axios from 'axios';

export default {
  //* get all students
  getAllStudents: () => {
    return axios.get('/api/students');
  },
  getStudentByID: (id) => {
    return axios.get('/api/students/' + id);
  },
  //* Saves a student to the database
  createNewStudent: (studentInfo) => {
    return axios.post('/api/students', studentInfo);
  },
  //* get all book for a student
  getStudentBooks: (id) => {
    return axios.get('/api/students/books/' + id)
  },
  //* get all student activity
  getStudentActivities: (id) => {
    return axios.get('/api/students/activities/' + id)
  }
};
