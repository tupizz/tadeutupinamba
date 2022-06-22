import {
  Avatar,
  Box,
  Divider,
  Flex,
  Grid,
  GridItem,
  SimpleGrid,
  Text,
  theme,
} from "@chakra-ui/react";
import Header from "../components/Header";

export default function Home() {
  return (
    <Flex direction="column" h="100vh">
      <Flex w={["100%"]} my="6" maxW={1280} mx="auto" px={["2", "4", "6"]}>
        <Grid
          w="100%"
          templateAreas={[
            // mobile
            `"header"
           "nav"
           "main"
           "footer"`,
            //  medium up
            `"header header"
           "nav main"
           "footer footer"`,
          ]}
          // gridTemplateRows={"auto"}
          gridTemplateColumns={["1fr", "200px 1fr"]}
          gap="2"
        >
          <GridItem pl="2" area={"header"}>
            <Header />
            <Divider py="2" />
          </GridItem>
          <GridItem pl="2" bg="pink.300" area={"nav"}>
            Nav
          </GridItem>
          <GridItem pl="2" bg="green.300" area={"main"}>
            Main
          </GridItem>
          <GridItem pl="2" bg="blue.300" area={"footer"}>
            Footer
          </GridItem>
        </Grid>
      </Flex>
    </Flex>
  );
}