import { Box, Stack } from "@chakra-ui/react";
import { FunctionComponent } from "react";
import Education from "./Education";
import Experiences from "./Experiences";
import Summary from "./Summary";

interface MainProps {}

const Main: FunctionComponent<MainProps> = () => {
  return (
    <Box maxW="100%" overflow="hidden">
      <Stack spacing={16} my={4}>
        <Summary />
        <Experiences />
        <Education />
        <Box height="50px" />
      </Stack>
    </Box>
  );
};

export default Main;
