import {
  Divider,
  Heading,
  List,
  ListIcon,
  ListItem,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { FunctionComponent } from "react";
import { MdBook } from "react-icons/md";

interface EducationProps {}

const Education: FunctionComponent<EducationProps> = () => {
  const color = useColorModeValue("gray.500", "gray.200");
  const lightColor = useColorModeValue("gray.400", "gray.100");

  return (
    <Stack>
      <Heading>Education</Heading>
      <Divider />
      <List spacing={3}>
        <ListItem>
          <Text fontWeight="bold">
            <ListIcon as={MdBook} color="green.500" />
            B.S. in Computer Science and Engineering
          </Text>
          <Text fontWeight="bold" color="green.400">
            2013 - 2017
          </Text>
          <Text fontWeight="bold" color={lightColor}>
            UNESP - São José do Rio Preto/SP
          </Text>
          <Text color={color}>
            Scientific research around enviromental problems using Digital Image
            Processing and distributed processing technologies like Hadoop and
            Hadoop Image Processing Interface on a cluster of machines deployed
            at AWS.
          </Text>
        </ListItem>

        <ListItem>
          <Text>
            <ListIcon as={MdBook} color="green.500" />
            Technician, Electronics technician
          </Text>
          <Text fontWeight="bold" color="green.400">
            2009 - 2011
          </Text>
          <Text fontWeight="bold" color={lightColor}>
            CEFET - Araxá/MG
          </Text>
          <Text color={color}>
            Programming Language C/Assembly, programming and definition of
            microprocessor and microcontrollers
          </Text>
        </ListItem>
      </List>
    </Stack>
  );
};

export default Education;
