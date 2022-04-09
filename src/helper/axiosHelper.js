// http://www.omdbapi.com/?apikey=[cd64edbd]&

import axios from "axios";
const api = "http://www.omdbapi.com/?apikey=cd64edbd&";
export const fetchMovie = (title) => {
  return axios.get(api + "t=" + title);
};
