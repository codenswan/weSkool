import axios from 'axios';

export default {
  //* get all students
  getAllStudents: () => {
    return axios.get('/api/students');
  },
  //* Saves a student to the database
  createNewStudent: (studentInfo) => {
    return axios.post('/api/students', studentInfo);
  },
  //* get all student activity
  getStudentActivity: (id) => {
    return axios.get('/api/students/activities' + id)
  }
};
