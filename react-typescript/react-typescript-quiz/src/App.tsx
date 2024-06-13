import { Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { QuizAPI } from "./api/quizAPI";
import { QuizCategory } from "./types/quiz_types";
import Landing from "./features/Landing";

function App() {
  const [categories, setCategories] = useState<QuizCategory[]>([]);

  const [loading, setIsLoading] = useState<boolean>(false);

  async function fetchCategories() {
    const response = await QuizAPI.fetchCategory();
    setCategories([{ id: -1, name: "Mixed" }, ...response]);
  }
  useEffect(() => {
    setIsLoading(true);
    fetchCategories();
    setIsLoading(false);
  }, []);
  return (
    <Box>
      {categories && <Landing categories={categories} loading={loading} />}
    </Box>
  );
}

export default App;
