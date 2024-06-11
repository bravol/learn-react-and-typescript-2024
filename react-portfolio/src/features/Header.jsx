import { Flex, HStack, Image, Link } from "@chakra-ui/react";
import LogoImage from "@/assets/images/logo.png";
import BubbleImage from "@/assets/images/bubble.png";
import Flag1 from "@/assets/images/flag-en.png";
// import Flag2 from "@/assets/images/flag-fr.png";

const Header = () => {
  return (
    <Flex justify={"space-between"} p={5}>
      <Image src={LogoImage} h={10} />
      <HStack>
        <Image src={BubbleImage} h={10} />
        <Link
          fontSize={"lg"}
          fontWeight={"bold"}
          href="mailto:lumalabravo@gmail.com?subject=Contacting from your portfolio"
          color={"#000"}
          _hover={{ color: "#000" }}
        >
          Hire me
        </Link>
        <Image pl={20} src={Flag1} h={8} />
      </HStack>
    </Flex>
  );
};

export default Header;
