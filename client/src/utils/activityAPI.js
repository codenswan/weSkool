import axios from 'axios';

export default {

  //* Saves a activity to the database
  saveActivity: (activityData) => {
    return axios({
      method: 'post',
      url: '/api/activities',
      data: activityData,
      headers: {
        'content-type': "multipart/form-data",
      }
    });
    
  },
};