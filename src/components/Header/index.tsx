import { Flex } from "@chakra-ui/react";
import { FunctionComponent } from "react";
import Profile from "./Profile";
import SocialMedias from "./SocialMedias";

interface HeaderProps {}

const Header: FunctionComponent<HeaderProps> = () => {
  return (
    <Flex
      id="header-profile"
      align="center"
      justifyContent={["space-between"]}
      flexDirection={["column", "column", "row"]}
    >
      <Profile />
      <SocialMedias />
    </Flex>
  );
};

export default Header;
