import { Box } from "@chakra-ui/react";
import Header from "./features/Header";
import { useEffect, useState } from "react";
import { QuizAPI } from "./api/quizAPI";
import { QuizCategory } from "./types/quiz_types";

function App() {
  const [categories, setCategories] = useState<QuizCategory[]>([]);

  async function fetchCategories() {
    const response = await QuizAPI.fetchCategory();
    setCategories(response);
  }
  useEffect(() => {
    fetchCategories();
  }, []);
  return (
    <Box>
      <Header categories={categories} />
    </Box>
  );
}

export default App;
