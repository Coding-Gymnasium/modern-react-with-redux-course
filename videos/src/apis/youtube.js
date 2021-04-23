import axios from 'axios';

const KEY = `${process.env.REACT_APP_YOUTUBE_API_KEY}`;

export default axios.create({
  baseURL: 'https://ww.googleapis.com/youtube/v3',
  params: {
    part: 'snipet',
    maxResults: 5,
    key: KEY
  }
});