const router = require('express').Router();
const axios = require('axios');
require('dotenv').config();

const API_KEY = process.env.API_KEY;

//* seach page route accesses the google books api search
router.get('/searchbooks', async (req, res) => {
  try {
    let results = await axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=${req.query.title}&key=${API_KEY}`
    );
    //* search results are formatted on the backend so front end only recieves specific information
    let formattedResults = await results.data.items.map(book => {
      return {
        Title: book.volumeInfo.title,
        Subtitle: book.volumeInfo.subtitle,
        Author: book.volumeInfo.authors,
        Description: book.volumeInfo.description,
        Image: book.volumeInfo.imageLinks.smallThumbnail,
        ID: book.id,
        Link: book.volumeInfo.infoLink
      }
    })
    res.json(formattedResults);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
