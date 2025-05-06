import { Box, Flex } from "@chakra-ui/react";
import { FunctionComponent } from "react";
import Profile from "./Profile";

interface HeaderProps {}

const Header: FunctionComponent<HeaderProps> = () => {
  return (
    <Box py={4}>
      <Profile />
    </Box>
  );
};

export default Header;