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
