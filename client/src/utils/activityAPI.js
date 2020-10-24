import axios from 'axios';

export default {

  //* Saves a activity to the database
  saveActivity: (activityData) => {
    return axios.post('/api/activities', activityData);
  },
};