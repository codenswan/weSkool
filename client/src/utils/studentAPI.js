import axios from 'axios';

export default {
  //* get all students
  getStudents: () => {
    return axios.get('/api/students');
  },
};
