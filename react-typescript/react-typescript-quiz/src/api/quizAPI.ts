import axios from "axios";
import {
  FetchQuizCategoriesResponse,
  FetchQuizParams,
  FetchQuizResp,
  QuizCategory,
  QuizItem,
} from "../types/quiz_types";

const BASE_URL = "https://opentdb.com";
export class QuizAPI {
  static async fetchCategory(): Promise<QuizCategory[]> {
    const { data } = await axios.get<FetchQuizCategoriesResponse>(
      BASE_URL + "/api_category.php"
    );
    return data.trivia_categories;
  }
  static async fetchQuiz(params: FetchQuizParams): Promise<QuizItem[]> {
    const { data } = await axios.get<FetchQuizResp>(BASE_URL + "/api.php", {
      params: params,
    });
    return data.results;
  }
}
