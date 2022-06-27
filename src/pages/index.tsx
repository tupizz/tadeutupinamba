import {
  Divider,
  Flex,
  Grid,
  GridItem,
  Icon,
  IconButton,
  useColorMode,
} from "@chakra-ui/react";
import { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import { FiMoon, FiPrinter, FiSun } from "react-icons/fi";
import Header from "../components/Header";
import Main from "../components/Main";
import Nav from "../components/Nav";

export default function Home() {
  const ref = useRef();
  const { toggleColorMode, colorMode } = useColorMode();
  const handlePrint = useReactToPrint({
    content: () => ref.current,
    bodyClass: "printBody",
  });

  return (
    <>
      <Flex direction="column" h="100vh" ref={ref}>
        <Flex w={["100%"]} my="6" maxW={1280} mx="auto" px={["2", "4", "6"]}>
          <Grid
            w="100%"
            templateAreas={[
              // mobile screen
              ` "preheader"
                "header"
                "nav"
                "main"
                "footer"`,
              // medium screen
              `"preheader"
                "header"
                "nav"
                "main"
                "footer"`,
              // large screen
              `"preheader preheader"
                "header header"
                "nav main"
                "footer footer"`,
            ]}
            // gridTemplateRows={"auto"}
            gridTemplateColumns={["1fr", "1fr", "200px 1fr", "300px 1fr"]}
            gap="2"
          >
            <GridItem pl="2" area={"preheader"}>
              <Flex justifyContent={"end"}>
                <IconButton
                  aria-label="Open Navigation"
                  variant="unstyled"
                  className="hide-on-print"
                  fontSize={24}
                  mr={2}
                  _hover={{ color: "gray.300" }}
                  onClick={handlePrint}
                  icon={<Icon as={FiPrinter} />}
                ></IconButton>
                <IconButton
                  aria-label="Open Navigation"
                  variant="unstyled"
                  className="hide-on-print"
                  fontSize={24}
                  mr={2}
                  _hover={{ color: "gray.300" }}
                  onClick={toggleColorMode}
                  icon={<Icon as={colorMode === "light" ? FiMoon : FiSun} />}
                ></IconButton>
              </Flex>
            </GridItem>
            <GridItem pl="2" area={"header"}>
              <Header />
              <Divider py="2" />
            </GridItem>
            <GridItem pl="2" area={"nav"}>
              <Nav />
            </GridItem>
            <GridItem pl="2" area={"main"}>
              <Main />
            </GridItem>
            <GridItem pl="2" area={"footer"}>
              {/* Footer */}
            </GridItem>
          </Grid>
        </Flex>
      </Flex>
    </>
  );
}
