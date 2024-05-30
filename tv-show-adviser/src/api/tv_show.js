import axios from "axios";
//6e8cdf677923fce7e4f620f39cceb62d

const BASE_URL = "https://api.themoviedb.org/3/tv/";
const API_KEY_PARAM = "?api_key=6e8cdf677923fce7e4f620f39cceb62d";

export class TVShowAPI {
  static async fetchPopulars() {
    const response = await axios.get(`${BASE_URL}popular${API_KEY_PARAM}`);
    console.log(response.data.results);
    return response.data.results;
  }
}
