import { useState } from "react";
import { QuizItem } from "../types/quiz_types";
import {
  Box,
  Flex,
  Heading,
  Radio,
  RadioGroup,
  SimpleGrid,
} from "@chakra-ui/react";

type Props = {
  quiz: QuizItem[];
};

const Play = (props: Props) => {
  const [currentQuizItemIndex, setCurrentQuizItemIndex] = useState<number>(0);
  const currentQuizItem = props.quiz[currentQuizItemIndex];
  const availableAnswers = [
    currentQuizItem.correct_answer,
    ...currentQuizItem.incorrect_answers,
  ];
  const radioLists = availableAnswers.map((availableAnswer: string) => {
    return (
      <Radio key={availableAnswer} value={availableAnswer}>
        {availableAnswer}
      </Radio>
    );
  });
  return (
    <Box margin={5}>
      <Flex direction={"column"} alignItems={"center"} justify={"center"}>
        <Heading fontSize={"3xl"} mt={100} mb={20}>
          {currentQuizItem.question}
        </Heading>
        <RadioGroup
          value={currentQuizItemIndex.toString()}
          onChange={() => setCurrentQuizItemIndex(currentQuizItemIndex + 1)}
        >
          <SimpleGrid column={2} spacing={4}>
            {radioLists}
          </SimpleGrid>
        </RadioGroup>
      </Flex>
    </Box>
  );
};

export default Play;
