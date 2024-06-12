import { useState } from "react";
import { QuizCategory } from "../types/quiz_types";
import {
  Box,
  Button,
  Flex,
  Heading,
  Radio,
  RadioGroup,
  SimpleGrid,
} from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
type Props = {
  categories: QuizCategory[];
};
export const SetQuestionsCategory = (props: Props) => {
  const [selectedCategoryId, setSelectedCategoryId] = useState<string>(
    props.categories[0].id.toString()
  );
  const radioLists = props.categories.map((category: QuizCategory) => {
    return (
      <Radio value={category.id.toString()} key={category.id}>
        {category.name}
      </Radio>
    );
  });
  return (
    <Box position={"relative"} padding={10}>
      <Flex direction={"column"} alignItems={"center"}>
        <Heading as="h1" fontSize={"3xl"} mb={20}>
          Which topic ?
        </Heading>
      </Flex>

      <RadioGroup
        display={"flex"}
        justifyContent={"center"}
        value={selectedCategoryId}
        onChange={setSelectedCategoryId}
      >
        <SimpleGrid columns={[1, 3, 4]} spacing={"4"}>
          {radioLists}
        </SimpleGrid>
      </RadioGroup>
      <Button
        onClick={() => ""}
        position={"absolute"}
        right={"10%"}
        marginTop={"5%"}
        marginBottom={"5%"}
        colorScheme={"blue"}
        variant={"outline"}
        size={"lg"}
        rightIcon={<ArrowForwardIcon />}
      >
        Set difficulty
      </Button>
    </Box>
  );
};
