import axios from 'axios';

export default axios.create({
  baseURL: process.env.REACT_APP_BASEURL,
	params: { key: process.env.REACT_APP_API_KEY,maxResults:5 } 
});