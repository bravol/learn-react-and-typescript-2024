import { Box, Flex, Image } from "@chakra-ui/react";
import { useState } from "react";
import LogoImage from "../assets/logo.png";
import BubbleImage from "../assets/bubble.png";
import { SetQuestionQty } from "./SetQuestionQty";

type Props = {};
enum Step {
  SetQuestionQty,
  setQuestionCategory,
  SetQuestionDifficulty,
  Play,
  Score,
}
const Header = (props: Props) => {
  const [step, setStep] = useState(Step.SetQuestionQty);

  const renderScreenByStep = () => {
    switch (step) {
      case Step.SetQuestionQty:
        return <SetQuestionQty max={30} min={5} step={5} defaultValue={10} />;
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
      <Box mt={100}>{renderScreenByStep()}</Box>
    </Box>
  );
};

export default Header;
