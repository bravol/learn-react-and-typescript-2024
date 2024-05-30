import axios from "axios";
import { API_KEY_PARAM, BASE_URL } from "../config";

export class TVShowAPI {
  static async fetchPopulars() {
    const response = await axios.get(`${BASE_URL}popular${API_KEY_PARAM}`);
    console.log(response.data.results);
    return response.data.results;
  }

  static async fetchRecommendations(tvShowId) {
    const response = await axios.get(
      `${BASE_URL}${tvShowId}/recommendations${API_KEY_PARAM}`
    );
    return response.data.results;
  }
}
