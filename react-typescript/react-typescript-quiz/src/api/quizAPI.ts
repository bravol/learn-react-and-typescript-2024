import axios from "axios";
import { FetchQuizCategoriesResponse, QuizCategory } from "../types/quiz_types";

const BASE_URL = "https://opentdb.com";
export class QuizAPI {
  static async fetchCategory(): Promise<QuizCategory[]> {
    const { data } = await axios.get<FetchQuizCategoriesResponse>(
      BASE_URL + "/api_category.php"
    );
    return data.trivia_categories;
  }
}
