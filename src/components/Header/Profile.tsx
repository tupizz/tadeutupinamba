import { Avatar, Box, Flex, Text } from "@chakra-ui/react";
import { FunctionComponent } from "react";

interface ProfileProps {}

const Profile: FunctionComponent<ProfileProps> = () => {
  return (
    <Flex align="center" flexDirection={["column", "row"]}>
      <Avatar
        size={["lg", "xl", "2xl"]}
        name="Tadeu Tupinambá"
        src="https://github.com/tupizz.png"
      />

      <Box ml="4" textAlign={["center", "left"]}>
        <Text
          fontWeight="bold"
          fontSize={["large", "x-large", "xx-large", "xxx-large"]}
        >
          Tadeu Tupinambá
        </Text>
        <Text color="gray.300" fontSize={["small", "small", "medium"]}>
          Full stack Javascript Developer (Node.js, React, Database)
        </Text>
        <Text color="gray.300" fontSize={["small", "small", "medium"]}>
          Specialist on Node.js Software engineer
        </Text>
      </Box>
    </Flex>
  );
};

export default Profile;
