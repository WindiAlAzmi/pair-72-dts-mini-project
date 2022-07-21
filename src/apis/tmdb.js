import axios from 'axios';

const API_KEY = 'b4cf77bc686fefeac0f313d71573d61f';
const baseUrl = 'https://api.themoviedb.org/3/';

const tmdb = axios.create({
  baseURL: baseUrl,
  params: {
    api_key: API_KEY,
  },
});

export default tmdb;
