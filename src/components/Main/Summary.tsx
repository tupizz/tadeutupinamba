import {
  Box,
  Heading,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { FunctionComponent } from "react";

interface SummaryProps {}

const Summary: FunctionComponent<SummaryProps> = () => {
  const color = useColorModeValue("gray.700", "gray.300");
  const variantBg = useColorModeValue("gray.50", "gray.800");
  const variantBorder = useColorModeValue("gray.200", "gray.700");

  return (
    <Stack spacing={0}>
      <Heading variant="section" mb={6}>Summary</Heading>
      
      <Box maxW="100%" pt={2}>
        <Text 
          fontSize="md"
          lineHeight="1.8"
          color={color}
          mb={4}
        >
          Based in São Paulo, Brasil, I am a seasoned software engineer with
          over eight years of experience spanning the Americas. I've honed my
          skills at companies like Pray.com, Nok, and Insider Inc., where I've
          delivered complex web systems, APIs, mobile applications, and web
          applications, always adhering to software programming best practices
          and industry standards.
        </Text>
        
        <Text 
          fontSize="md"
          lineHeight="1.8"
          color={color}
          mb={4}
        >
          My work often centers on designing and building from scratch top-notch
          systems written in JavaScript, Node.js, Golang and MySQL, with a
          strong foundation in diverse technologies like Elasticsearch, AWS
          services, and various front-end frameworks. Fluent in both Portuguese
          and English, I am adept at remote collaboration and thrive in agile
          environments.
        </Text>
        
        <Text 
          fontSize="md"
          lineHeight="1.8"
          color={color}
        >
          I have a passion for continuous learning, as evident from my ongoing MBA in 
          Data Analytics & Artificial Intelligence and my extensive certifications in 
          backend software development and Front-end Engineering. I pride myself on my 
          ability to lead software development teams, ensuring timely and quality delivery.
        </Text>
      </Box>
    </Stack>
  );
};

export default Summary;
