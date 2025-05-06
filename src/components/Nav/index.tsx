import {
  Box,
  Flex,
  Heading,
  Stack,
  Tag,
  useColorModeValue,
} from "@chakra-ui/react";
import { FunctionComponent } from "react";

interface NavProps {}

// Define a skill tag component for reuse
const SkillTag = ({ children }: { children: React.ReactNode }) => {
  const tagColor = useColorModeValue("white", "white");
  const tagGradient = useColorModeValue(
    "linear(to-r, blue.500, purple.500)",
    "linear(to-r, blue.700, purple.800)"
  );
  const tagHoverGradient = useColorModeValue(
    "linear(to-r, blue.600, purple.600)",
    "linear(to-r, blue.500, purple.500)"
  );
  const boxShadowColor = useColorModeValue(
    "rgba(66, 153, 225, 0.3)",
    "rgba(66, 153, 225, 0.4)"
  );

  return (
    <Tag
      size="md"
      borderRadius="full"
      bgGradient={tagGradient}
      color={tagColor}
      fontWeight="medium"
      px={3}
      py={1.5}
      m="1"
      _hover={{
        transform: "translateY(-1px)",
        boxShadow: `0 4px 6px ${boxShadowColor}`,
        bgGradient: tagHoverGradient,
      }}
      transition="all 0.2s ease-in-out"
    >
      {children}
    </Tag>
  );
};

// Skills section component
const SkillCategory = ({
  title,
  skills,
}: {
  title: string;
  skills: string[];
}) => {
  const headingColor = useColorModeValue("blue.600", "blue.300");

  return (
    <Box mb={4}>
      <Heading
        size="sm"
        mb={3}
        fontWeight="600"
        color={headingColor}
        textTransform="uppercase"
        letterSpacing="0.05em"
      >
        {title}
      </Heading>

      <Flex wrap="wrap" direction="row" margin="-0.5">
        {skills.map((skill, index) => (
          <SkillTag key={index}>{skill}</SkillTag>
        ))}
      </Flex>
    </Box>
  );
};

const Nav: FunctionComponent<NavProps> = () => {
  // Define all skills by category
  const skills = {
    backend: [
      "Clean code & clean architecture",
      "Event driven architecture",
      "REST APIs",
      "Graphql APIs",
      "Design Patterns",
      "SOLID principles",
      "Node.js",
      "Golang",
      "Java",
      "Javascript",
      "Typescript",
    ],
    frontend: [
      "Clean code & clean architecture",
      "Design Patterns",
      "React.js",
      "Vue.js",
      "Flutter",
      "React Native",
    ],
    database: ["MongoDB", "PostgreSQL", "MySQL", "DynamoDB", "Redis"],
    devops: [
      "Docker",
      "Linux",
      "Kubernetes",
      "Helm",
      "Github actions",
      "Jenkins",
      "AWS",
    ],
  };

  return (
    <Stack spacing={7} py={2}>
      <SkillCategory title="Back-end" skills={skills.backend} />
      <SkillCategory title="Front-end" skills={skills.frontend} />
      <SkillCategory title="Database" skills={skills.database} />
      <SkillCategory title="DevOps" skills={skills.devops} />
    </Stack>
  );
};

export default Nav;
