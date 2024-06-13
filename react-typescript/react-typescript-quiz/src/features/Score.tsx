import { Button, Flex, Heading, Text } from "@chakra-ui/react";

type Props = {
  history: boolean[];
  onNextGame: () => void;
};

const Score = (props: Props) => {
  const rightAnswers = props.history.filter(
    (isValidAnswer: boolean) => isValidAnswer === true
  ).length;
  const renderMessage = () => {
    const rightAnswersPercentage = (rightAnswers * 100) / props.history.length;

    if (rightAnswersPercentage < 50) {
      return "You need more Practice";
    } else if (rightAnswersPercentage < 75) {
      return "Good Job!";
    } else {
      return "Excellent!";
    }
  };
  return (
    <Flex direction={"column"} alignItems={"center"} position={"relative"}>
      <Heading fontSize={"3xl"}>Score</Heading>
      <Heading fontSize={"xl"} mt={"5"}>
        {rightAnswers}/{props.history.length}
      </Heading>
      <Text fontWeight={"bold"} mt={5}>
        {renderMessage()}
      </Text>
      <Button
        position={"absolute"}
        top={"80%"}
        right={"10%"}
        onClick={props.onNextGame}
      >
        New game
      </Button>
    </Flex>
  );
};

export default Score;
