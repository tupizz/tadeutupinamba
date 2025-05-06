import {
  Box,
  Divider,
  Flex,
  Grid,
  GridItem,
  Icon,
  IconButton,
  useColorMode,
  useColorModeValue,
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
  
  const dividerColor = useColorModeValue("gray.200", "gray.700");
  const bgColor = useColorModeValue("white", "gray.900");

  return (
    <Box minH="100vh" ref={ref} bg={bgColor}>
      <Flex 
        direction="column"
        maxW={1200} 
        mx="auto" 
        px={["4", "6", "8"]}
        py={4}
      >
        <Flex justifyContent="flex-end" mb={2}>
          <IconButton
            aria-label="Print resume"
            variant="ghost"
            className="hide-on-print"
            size="md"
            rounded="full"
            mr={2}
            _hover={{ bg: useColorModeValue("gray.100", "gray.700") }}
            onClick={handlePrint}
            icon={<Icon as={FiPrinter} />}
          />
          <IconButton
            aria-label="Toggle color mode"
            variant="ghost"
            className="hide-on-print"
            size="md"
            rounded="full"
            _hover={{ bg: useColorModeValue("gray.100", "gray.700") }}
            onClick={toggleColorMode}
            icon={<Icon as={colorMode === "light" ? FiMoon : FiSun} />}
          />
        </Flex>
        
        <Box 
          mb={8} 
          pb={6}
          position="relative"
        >
          <Header />
          <Divider mt={6} borderColor={dividerColor} />
        </Box>

        <Grid
          templateColumns={["1fr", "1fr", "280px 1fr", "300px 1fr"]}
          gap={[8, 8, 12]}
        >
          <GridItem>
            <Nav />
          </GridItem>
          
          <GridItem>
            <Main />
          </GridItem>
        </Grid>
        
        <Box mt={10} mb={6} textAlign="center" fontSize="sm" color="gray.500" className="hide-on-print">
          © {new Date().getFullYear()} Tadeu Tupinambá. All rights reserved.
        </Box>
      </Flex>
    </Box>
  );
}
