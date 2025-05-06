import {
  Avatar,
  Box,
  Flex,
  Heading,
  HStack,
  Icon,
  Link,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { FunctionComponent } from "react";
import { FiGithub, FiGlobe, FiMail, FiPhone } from "react-icons/fi";

interface SocialLinkProps {
  icon: any;
  text: string;
  href?: string;
}

const SocialLink: FunctionComponent<SocialLinkProps> = ({
  icon,
  text,
  href,
}) => {
  const iconColor = useColorModeValue("blue.500", "blue.300");

  return (
    <Link href={href || "#"} isExternal _hover={{ textDecoration: "none" }}>
      <HStack spacing={2} align="center">
        <Icon as={icon} color={iconColor} boxSize={4} />
        <Text fontSize="sm" color="gray.500">
          {text}
        </Text>
      </HStack>
    </Link>
  );
};

interface ProfileProps {}

const Profile: FunctionComponent<ProfileProps> = () => {
  const nameGradient = useColorModeValue(
    "linear(to-r, blue.500, purple.500)",
    "linear(to-r, blue.300, purple.400)"
  );
  const subtitleColor = useColorModeValue("gray.700", "gray.300");
  const roleColor = useColorModeValue("gray.600", "gray.400");
  const avatarBorderColor = useColorModeValue("blue.400", "blue.300");
  const avatarShadow = useColorModeValue(
    "0 4px 14px rgba(66, 153, 225, 0.3)",
    "0 4px 14px rgba(99, 179, 237, 0.5)"
  );

  return (
    <Flex width="100%" flexDirection={["column", "column", "row"]}>
      {/* Left side - Avatar and Name */}
      <Flex align="center" flexDirection={["column", "row"]}>
        <Avatar
          size={["xl", "xl", "2xl"]}
          name="Tadeu Tupinambá"
          src="https://github.com/tupizz.png"
          borderWidth="3px"
          borderColor={avatarBorderColor}
          bg="transparent"
          boxShadow={avatarShadow}
        />

        <Box ml={["0", "6"]} mt={["4", "0"]} textAlign={["center", "left"]}>
          <Heading
            as="h1"
            fontSize={["3xl", "4xl", "5xl"]}
            fontWeight="800"
            letterSpacing="-0.03em"
            bgGradient={nameGradient}
            bgClip="text"
            lineHeight="1.1"
            mb={2}
          >
            Tadeu Tupinambá
          </Heading>

          <Text fontSize={["lg", "lg"]} fontWeight="600" color={subtitleColor}>
            Software Craftsman with over 10+ years of experience
          </Text>

          <Text color={roleColor} fontSize="sm" mt={1}>
            Full stack Developer (Node.js, Golang, React, SQL & NoSQL Databases)
          </Text>
        </Box>
      </Flex>

      {/* Right side - Contact info in horizontal layout for larger screens */}
      <Flex
        mt={[6, 6, 0]}
        ml={[0, 0, "auto"]}
        justify={["center", "center", "flex-end"]}
        align={["center", "center", "flex-start"]}
        pt={[0, 0, 4]}
        gap={1}
        flexDirection={["row", "row", "column"]}
        flexWrap={["wrap", "wrap", "nowrap"]}
      >
        <SocialLink
          icon={FiPhone}
          text="+55 (17) 996161451"
          href="tel:+5517996161451"
        />

        <SocialLink
          icon={FiMail}
          text="tadeu.tupiz@gmail.com"
          href="mailto:tadeu.tupiz@gmail.com"
        />

        <SocialLink
          icon={FiGithub}
          text="tupizz"
          href="https://github.com/tupizz"
        />

        <SocialLink
          icon={FiGlobe}
          text="www.tadeutupinamba.com.br"
          href="https://www.tadeutupinamba.com.br"
        />
      </Flex>
    </Flex>
  );
};

export default Profile;
