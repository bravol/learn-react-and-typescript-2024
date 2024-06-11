import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import Human from "@/assets/images/human.png";

const Landing = () => {
  const left = (
    <Box>
      <Heading
        fontSize={{ base: "3xl", md: "5xl", lg: "7xl" }}
        color={"secondary"}
      >
        Hi, my name <br /> is Brian
        <Text as="span" color={"primary.dark"}>
          .
        </Text>
      </Heading>
      <Text color={"secondary"}>
        I am{" "}
        <Text as={"span"} fontWeight={"bold"} fontSize={"large"}>
          a freelance developer/instructor
        </Text>
        <br /> located in Uganda/Kampala
      </Text>
    </Box>
  );
  const right = (
    <>
      <Image src={Human} h={400} w={300} />
    </>
  );
  return (
    <Flex
      p={5}
      direction={{ base: "column", md: "row" }}
      justify={"space-around"}
      mt={{ base: 50, md: 150 }}
    >
      {left}
      {right}
    </Flex>
  );
};

export default Landing;
