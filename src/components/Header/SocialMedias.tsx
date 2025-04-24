import {
  Box,
  Flex,
  Icon,
  Text,
  useBreakpointValue,
  useColorModeValue,
} from "@chakra-ui/react";
import Link from "next/link";
import { FunctionComponent } from "react";
import { RiGithubFill, RiLink, RiMailLine, RiPhoneLine } from "react-icons/ri";

interface SocialMediasProps {}

const SocialMedias: FunctionComponent<SocialMediasProps> = () => {
  const color = useColorModeValue("gray.500", "gray.200");

  const isMediumBreakpoint = useBreakpointValue({
    base: false,
    md: true,
  });

  return (
    <Flex
      id="social-media-box"
      flexDirection={["row", "row", "column"]}
      textAlign={["right"]}
      color="gray.100"
    >
      {isMediumBreakpoint && (
        <Box display={"flex"} mr="2">
          <Icon as={RiPhoneLine} fontSize="17" color="green.400" mr="2" />
          <Text fontSize={["small"]} color={color}>
            +55 (17) 996161451
          </Text>
        </Box>
      )}
      <Box display={"flex"} mr="2">
        <Icon as={RiMailLine} fontSize="17" color="green.400" mr="2" />
        <Text fontSize={["small"]} color={color}>
          tadeu.tupiz@gmail.com
        </Text>
      </Box>
      <Box display={"flex"} mr="2">
        <Icon as={RiGithubFill} fontSize="17" color="green.400" mr="2" />
        <Text fontSize={["small"]} color={color}>
          <Link href="https://github.com/tupizz">tupizz</Link>
        </Text>
      </Box>

      {isMediumBreakpoint && (
        <Box display={"flex"}>
          <Icon as={RiLink} fontSize="17" color="green.400" mr="2" />
          <Text fontSize={["small"]} color={color}>
            www.tadeutupinamba.com.br
          </Text>
        </Box>
      )}
    </Flex>
  );
};

export default SocialMedias;
