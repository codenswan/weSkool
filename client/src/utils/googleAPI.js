import axios from 'axios';

export default {
  searchGoogleBooks: async (query) => {
    const bookResults = await axios.get(
      `/api/search?title=${query}`
    );
    return bookResults;
  },
};
