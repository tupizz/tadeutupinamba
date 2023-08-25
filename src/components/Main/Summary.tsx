import {
  Divider,
  Heading,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { FunctionComponent } from "react";

interface SummaryProps {}

const Summary: FunctionComponent<SummaryProps> = () => {
  const color = useColorModeValue("gray.500", "gray.200");

  return (
    <Stack>
      <Heading>Summary</Heading>
      <Divider />
      <Stack color={color}>
        <Text mt={2}>
          Based in São Paulo, Brasil, I am a seasoned software engineer with
          over eight years of experience spanning the Americas. I've honed my
          skills at companies like Pray.com, Nok, and Insider Inc., where I've
          delivered complex web systems, APIs, mobile applications, and web
          applications, always adhering to software programming best practices
          and industry standards.
        </Text>
        <Text>
          My work often centers on designing and building from scratch top-notch
          systems written in JavaScript, Node.js, Golang and MySQL, with a
          strong foundation in diverse technologies like Elasticsearch, AWS
          services, and various front-end frameworks. Fluent in both Portuguese
          and English, I am adept at remote collaboration and thrive in agile
          environments. I also have a passion for continuous learning, as
          evident from my ongoing MBA in Data Analytics & Artificial
          Intelligence and my extensive certifications in backend software
          development and Front-end Engineering. I pride myself on my ability to
          lead software development teams, ensuring timely and quality delivery.
        </Text>
      </Stack>
    </Stack>
  );
};

export default Summary;
