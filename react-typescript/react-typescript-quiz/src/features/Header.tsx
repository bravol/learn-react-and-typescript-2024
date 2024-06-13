import { Box, Flex, Image } from "@chakra-ui/react";
import { useState } from "react";
import LogoImage from "../assets/logo.png";
import BubbleImage from "../assets/bubble.png";
import { SetQuestionQty } from "./SetQuestionQty";
import { SetQuestionsCategory } from "./SetQuestionsCategory";
import {
  FetchQuizParams,
  QuizCategory,
  QuizDifficulty,
  QuizItem,
  QuizType,
} from "../types/quiz_types";
import { SetQuestionDifficulty } from "./SetQuestionDifficulty";
import Play from "./play_quiz/Play";
import Score from "./Score";
import { QuizAPI } from "../api/quizAPI";

type Props = {
  categories: QuizCategory[];
};
enum Step {
  SetQuestionQty,
  setQuestionCategory,
  SetQuestionDifficulty,
  Play,
  Score,
}
const Header = (props: Props) => {
  const [step, setStep] = useState(Step.SetQuestionQty);
  const [quizParams, setQuizParams] = useState<FetchQuizParams>({
    amount: 10,
    category: "",
    difficulty: QuizDifficulty.MIXED,
    type: QuizType.MIXED,
  });
  console.log(quizParams);
  const [quiz, setQuiz] = useState<QuizItem[]>([]);

  const renderScreenByStep = () => {
    switch (step) {
      case Step.SetQuestionQty:
        return (
          <SetQuestionQty
            max={30}
            min={5}
            step={5}
            defaultValue={10}
            onClickNext={(amount: number) => {
              setQuizParams({ ...quizParams, amount });
              setStep(Step.setQuestionCategory);
            }}
          />
        );
      case Step.setQuestionCategory:
        return (
          <SetQuestionsCategory
            categories={props.categories}
            onClickNext={(categoryId: string) => {
              setQuizParams({
                ...quizParams,
                category: categoryId === "-1" ? "" : categoryId,
              });
              setStep(Step.SetQuestionDifficulty);
            }}
          />
        );
      case Step.SetQuestionDifficulty:
        return (
          <SetQuestionDifficulty
            onClickNext={async (difficulty: QuizDifficulty) => {
              const params = {
                ...quizParams,
                difficulty,
              };
              setQuizParams(params);
              const quiz = await QuizAPI.fetchQuiz(params);
              if (quiz.length <= 0) {
                alert(
                  "We could not find" +
                    params.amount +
                    "questions for you.Restarting game......"
                );
                setStep(Step.SetQuestionQty);
              } else {
                setQuiz(quiz);
                setStep(Step.Play);
              }
            }}
          />
        );
      case Step.Play:
        return <Play quiz={quiz} />;
      case Step.Score:
        return <Score />;
      default:
        return null;
    }
  };

  return (
    <Box py={10} h={"100%"}>
      <Flex justify={"center"}>
        <Image src={LogoImage} h={24} />
      </Flex>
      <Image
        src={BubbleImage}
        position={"absolute"}
        zIndex={-1}
        right={-120}
        top={100}
      />
      <Box mt={100}>{renderScreenByStep()}</Box>
    </Box>
  );
};

export default Header;
