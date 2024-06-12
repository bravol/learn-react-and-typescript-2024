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
  QuizType,
} from "../types/quiz_types";

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
  //   console.log(quizParams);

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
        return <SetQuestionsCategory categories={props.categories} />;
      case Step.SetQuestionDifficulty:
        return <></>;
      case Step.Play:
        return <></>;
      case Step.Score:
        return <></>;
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
