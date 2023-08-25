import { Stack } from "@chakra-ui/react";
import { FunctionComponent } from "react";
import Education from "./Education";
import Experiences from "./Experiences";
import Summary from "./Summary";

interface MainProps {}

const Main: FunctionComponent<MainProps> = () => {
  return (
    <Stack spacing={8}>
      <Summary />
      <Education />
      <Experiences />
      <div style={{ height: "50px" }} />
    </Stack>
  );
};

export default Main;
