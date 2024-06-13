import { useEffect, useState } from "react";
import { QuizItem } from "../types/quiz_types";
import {
  Box,
  Flex,
  HStack,
  Heading,
  Radio,
  RadioGroup,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import Lottie from "lottie-react";
import ValidAnimation from "../assets/lottie/valid.json";
import InValidAnimation from "../assets/lottie/invalid.json";
import { decode } from "html-entities"; // heps the data hat i cnnot read

type Props = {
  quiz: QuizItem[];
};

const Play = (props: Props) => {
  const [currentQuizItemIndex, setCurrentQuizItemIndex] = useState<number>(0);
  const currentQuizItem = props.quiz[currentQuizItemIndex];
  const [availableAnswers, setAvalibaleAnswers] = useState<string[]>([]);
  //selected answer
  const [answer, setAnswer] = useState<string>("");
  //is it correct or un correct or not answered
  const [questionState, setQuestionState] = useState<
    "valid" | "invalid" | "unanswered"
  >("unanswered");
  const [history, setHistory] = useState<boolean[]>([]);
  //shuffle them
  useEffect(() => {
    setAvalibaleAnswers(
      [
        currentQuizItem.correct_answer,
        ...currentQuizItem.incorrect_answers,
      ].sort(() => Math.random() - 0.5)
    );
  }, [currentQuizItemIndex]);

  //checking where the answer is correct
  function isValidAnswer(answer: string) {
    return answer === currentQuizItem.correct_answer;
  }

  useEffect(() => {
    if (answer) {
      const isValid = isValidAnswer(answer);
      if (isValid) {
        setQuestionState("valid");
      } else {
        setQuestionState("invalid");
      }
      setHistory([...history, isValid]);
    }
  }, [answer]);

  //displaying different answers using radio buttons
  const radioLists = availableAnswers.map((availableAnswer: string) => {
    return (
      <Radio key={availableAnswer} value={availableAnswer}>
        <Text
          color={
            questionState === "unanswered"
              ? "black"
              : isValidAnswer(availableAnswer)
              ? "green.500"
              : "red.500"
          }
        >
          {decode(availableAnswer)}
        </Text>
      </Radio>
    );
  });
  //progress Bar
  const renderProgressBar = () => {
    return (
      <HStack>
        {props.quiz.map((item, i) => {
          return (
            <Box
              key={i}
              h={3}
              w={25}
              backgroundColor={
                i >= currentQuizItemIndex
                  ? "gray.200"
                  : history[i]
                  ? "green.500"
                  : "red.500"
              }
            />
          );
        })}
      </HStack>
    );
  };

  return (
    <Box margin={5}>
      <Flex direction={"column"} alignItems={"center"} justify={"center"}>
        {renderProgressBar()}
        <Heading fontSize={"3xl"} mb={20}>
          {decode(currentQuizItem.question)}
        </Heading>
        <RadioGroup
          value={answer}
          onChange={questionState === "unanswered" ? setAnswer : undefined}
        >
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
