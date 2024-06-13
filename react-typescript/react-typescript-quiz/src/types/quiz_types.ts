export enum QuizDifficulty {
  EASY = "easy",
  MEDIUM = "medium",
  HARD = "hard",
  MIXED = "",
}

export enum QuizType {
  MIXED = "",
  MULTIPLE = "multiple",
  BOOLEAN = "boolean",
}

export interface FetchQuizParams {
  amount: number;
  category: string;
  difficulty: QuizDifficulty;
  type: QuizType;
}

export interface QuizCategory {
  id: number;
  name: string;
}
export interface FetchQuizCategoriesResponse {
  trivia_categories: QuizCategory[];
}

export interface FetchQuizResp {
  response_code: number;
  results: QuizItem[];
}
export interface QuizItem {
  category: number;
  type: QuizType;
  difficulty: QuizDifficulty;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
}
