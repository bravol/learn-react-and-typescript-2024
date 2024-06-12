import {
  Flex,
  Heading,
  Slider,
  SliderFilledTrack,
  SliderMark,
  SliderThumb,
  SliderTrack,
  Button,
  Box,
} from "@chakra-ui/react";
import { useState } from "react";
import { ArrowForwardIcon } from "@chakra-ui/icons";

type Props = {
  max: number;
  min: number;
  step: number;
  defaultValue: number;
  onClickNext: (amount: number) => void;
};

export const SetQuestionQty = (props: Props) => {
  const [sliderValue, setSliderValue] = useState<number>(props.defaultValue);
  const renderMarks = (): JSX.Element[] => {
    const marks = [];
    for (let index = props.min; index <= props.max; index += props.step) {
      marks.push(
        <SliderMark key={index} ml={-3} pt={4} value={index}>
          {index}
        </SliderMark>
      );
    }
    return marks;
  };
  return (
    <Box position={"relative"}>
      <Flex direction={"column"} alignItems={"center"}>
        <Heading as={"h1"} fontSize={"3xl"} mb={2}>
          How many questions ?
        </Heading>
        <Slider
          value={sliderValue}
          maxW={"400"}
          max={props.max}
          min={props.min}
          step={props.step}
          aria-label="slider-ex-6"
          colorScheme="yellow"
          onChange={(val) => setSliderValue(val)}
        >
          {renderMarks()}
          <SliderTrack>
            <SliderFilledTrack />
          </SliderTrack>
          <SliderThumb />
        </Slider>
      </Flex>
      <Button
        position={"absolute"}
        top={"80%"}
        right={"10%"}
        rightIcon={<ArrowForwardIcon />}
        onClick={() => props.onClickNext(sliderValue)}
      >
        Set category
      </Button>
    </Box>
  );
};
