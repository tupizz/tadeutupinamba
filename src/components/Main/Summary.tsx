import { Divider, Heading, Stack, Text } from "@chakra-ui/react";
import { FunctionComponent } from "react";

interface SummaryProps {}

const Summary: FunctionComponent<SummaryProps> = () => {
  return (
    <Stack>
      <Heading>Summary</Heading>
      <Divider />
      <Stack color={"gray.200"}>
        <Text>
          I am a Brazilian guy, passionate about solving problem using
          technology, working as Software Engineer at Demand.io (Los Angeles/CA
          - USA).
        </Text>
        <Text>
          For more than eight years of working with software development, I have
          pursued and successfully build Web Systems, APIs, mobile applications,
          and web applications following software programming best practices,
          design patterns, and industry standards. I’m really into agile
          methodologies and believe that we need to build and deliver
          incrementally. I feel very comfortable and motivated to lead and help
          software development teams to deliver great products.
        </Text>
        <Text>
          Also already designed and worked in app and webapps projects using
          technologies like Javascript, Flutter, Node.js, Golang, Python, Java,
          spring MVC, spring boot, angular, ionic, react, redux, Next.js and
          python for machine learning and data analysis projects. I see all of
          these technologies as a group of tools that can best suits me on some
          problem solving.
        </Text>
      </Stack>
    </Stack>
  );
};

export default Summary;
