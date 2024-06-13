import { useEffect, useState } from "react";
import { QuizItem } from "../types/quiz_types";
import {
  Box,
  Flex,
  Heading,
  Radio,
  RadioGroup,
  SimpleGrid,
} from "@chakra-ui/react";
import Lottie from "lottie-react";
import ValidAnimation from "../assets/lottie/valid.json";
import InValidAnimation from "../assets/lottie/invalid.json";

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
  const [answer, setAnswer] = useState<string>("");
  const [questionState, setQuestionState] = useState<
    "valid" | "invalid" | "unanswered"
  >("unanswered");

  function isValidAnswer(answer: string) {
    return answer === currentQuizItem.correct_answer;
  }

  useEffect(() => {
    if (answer) {
      if (isValidAnswer(answer)) {
        setQuestionState("valid");
      } else {
        setQuestionState("invalid");
      }
    }
  }, [answer]);
  return (
    <Box margin={5}>
      <Flex direction={"column"} alignItems={"center"} justify={"center"}>
        <Heading fontSize={"3xl"} mt={100} mb={20}>
          {currentQuizItem.question}
        </Heading>
        <RadioGroup value={answer} onChange={setAnswer}>
          <SimpleGrid column={2} spacing={4}>
            {radioLists}
          </SimpleGrid>
        </RadioGroup>
        <Lottie
          loop={false}
          style={{ marginTop: 100, height: 150 }}
          animationData={
            questionState === "unanswered"
              ? null
              : questionState === "valid"
              ? ValidAnimation
              : InValidAnimation
          }
          onComplete={() => {
            setQuestionState("unanswered");
            setCurrentQuizItemIndex(currentQuizItemIndex + 1);
          }}
        />
      </Flex>
    </Box>
  );
};

export default Play;
