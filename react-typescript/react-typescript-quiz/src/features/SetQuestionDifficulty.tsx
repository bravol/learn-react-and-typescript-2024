import { ArrowForwardIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  Heading,
  Radio,
  RadioGroup,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import { QuizDifficulty } from "../types/quiz_types";

type Props = {
  onClickNext: (difficulty: QuizDifficulty) => void;
};

export const SetQuestionDifficulty = (props: Props) => {
  const [difficulty, setDifficulty] = useState<QuizDifficulty>(
    QuizDifficulty.MIXED
  );

  const radioLists = Object.values(QuizDifficulty).map(
    (difficulty: QuizDifficulty) => {
      return (
        <Radio value={difficulty} key={difficulty}>
          <span style={{ textTransform: "capitalize" }}>
            {difficulty === QuizDifficulty.MIXED ? "Mixed" : difficulty}
          </span>
        </Radio>
      );
    }
  );
  return (
    <Box position={"relative"} padding={10}>
      <Flex direction={"column"} alignItems={"center"}>
        <Heading as="h1" fontSize={"3xl"} mb={20}>
          Which Difficulty ?
        </Heading>
      </Flex>

      <RadioGroup
        display={"flex"}
        justifyContent={"center"}
        value={difficulty}
        onChange={setDifficulty as (d: string) => void}
      >
        <VStack>{radioLists}</VStack>
      </RadioGroup>
      <Button
        onClick={() => props.onClickNext(difficulty)}
        position={"absolute"}
        right={"10%"}
        marginTop={"5%"}
        marginBottom={"5%"}
        colorScheme={"blue"}
        variant={"outline"}
        size={"lg"}
        rightIcon={<ArrowForwardIcon />}
      >
        Play
      </Button>
    </Box>
  );
};
