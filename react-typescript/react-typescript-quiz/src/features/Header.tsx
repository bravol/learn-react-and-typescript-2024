import { Box, Flex, Image } from "@chakra-ui/react";
import LogoImage from "./../assets/logo.png";
import BubbleImage from "./../assets/bubble.png";
import { useState } from "react";
import { SetQnQty } from "./SetQnQty";

enum Step {
  SetQuestionQty,
  setQuestionCategory,
  SetQuestionDifficulty,
  Play,
  Score,
}
export default function Header() {
  const [step, setStep] = useState(Step.SetQuestionQty);

  const renderScreenByStep = () => {
    switch (step) {
      case Step.SetQuestionQty:
        return <SetQnQty />;
      case Step.setQuestionCategory:
        return <></>;
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
      <Box>{renderScreenByStep()}</Box>
    </Box>
  );
}
