import {
  Box,
  Divider,
  Flex,
  Heading,
  List,
  ListItem,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { FunctionComponent } from "react";
import { FiBook as MdBook } from "react-icons/fi";

interface EducationProps {}

const Education: FunctionComponent<EducationProps> = () => {
  const color = useColorModeValue("gray.700", "gray.300");
  const lightColor = useColorModeValue("gray.600", "gray.400");
  const accentColor = useColorModeValue("blue.600", "blue.300");
  const dividerColor = useColorModeValue("gray.200", "gray.700");

  return (
    <Stack spacing={0}>
      <Heading variant="section" mb={5}>
        Education
      </Heading>

      <List spacing={6}>
        <ListItem>
          <Flex alignItems="flex-start">
            <Box color={accentColor} mt={1.5} mr={3} flexShrink={0}>
              <MdBook size={18} />
            </Box>
            <Box maxW="100%">
              <Heading size="md" fontWeight="600" mb={1}>
                Data Analytics & Artificial Intelligence
              </Heading>
              <Flex alignItems="center" mb={2} wrap="wrap" gap={1}>
                <Text fontSize="sm" color={accentColor} fontWeight="medium">
                  2023 - 2025
                </Text>
                <Text
                  fontSize="sm"
                  mx={1}
                  color="gray.500"
                  display="inline-block"
                >
                  •
                </Text>
                <Text fontSize="sm" color={lightColor}>
                  FIAP - Master of Business Administration - MBA
                </Text>
              </Flex>

              <Text color={color} fontSize="sm" lineHeight="tall">
                Advanced studies in statistical analysis, data visualization,
                predictive modeling, AI/ML algorithms, data strategy, and big
                data technologies. Focus on integrating data analytics into
                business decisions and AI ethics.
              </Text>
            </Box>
          </Flex>
        </ListItem>

        <Divider borderColor={dividerColor} opacity={0.6} />

        <ListItem>
          <Flex alignItems="flex-start">
            <Box color={accentColor} mt={1.5} mr={3} flexShrink={0}>
              <MdBook size={18} />
            </Box>
            <Box maxW="100%">
              <Heading size="md" fontWeight="600" mb={1}>
                MBA in Software Design and Architecture
              </Heading>
              <Flex alignItems="center" mb={2} wrap="wrap" gap={1}>
                <Text fontSize="sm" color={accentColor} fontWeight="medium">
                  2023 - 2024
                </Text>
                <Text
                  fontSize="sm"
                  mx={1}
                  color="gray.500"
                  display="inline-block"
                >
                  •
                </Text>
                <Text fontSize="sm" color={lightColor}>
                  Full Cycle - Master of Business Administration - MBA
                </Text>
              </Flex>

              <Text color={color} fontSize="sm" lineHeight="tall">
                Comprehensive education in software design principles,
                architectural styles (microservices, serverless, event-driven),
                design techniques, systems integration, and project management.
                Focus on equipping professionals with technical depth and
                managerial strategies.
              </Text>
            </Box>
          </Flex>
        </ListItem>

        <Divider borderColor={dividerColor} opacity={0.6} />

        <ListItem>
          <Flex alignItems="flex-start">
            <Box color={accentColor} mt={1.5} mr={3} flexShrink={0}>
              <MdBook size={18} />
            </Box>
            <Box maxW="100%">
              <Heading size="md" fontWeight="600" mb={1}>
                B.S. in Computer Science and Engineering
              </Heading>
              <Flex alignItems="center" mb={2} wrap="wrap" gap={1}>
                <Text fontSize="sm" color={accentColor} fontWeight="medium">
                  2013 - 2017
                </Text>
                <Text
                  fontSize="sm"
                  mx={1}
                  color="gray.500"
                  display="inline-block"
                >
                  •
                </Text>
                <Text fontSize="sm" color={lightColor}>
                  UNESP - São José do Rio Preto/SP
                </Text>
              </Flex>

              <Text color={color} fontSize="sm" lineHeight="tall">
                Scientific research focused on environmental problems using
                Digital Image Processing and distributed processing technologies
                like Hadoop and Hadoop Image Processing Interface on AWS
                clusters.
              </Text>
            </Box>
          </Flex>
        </ListItem>

        <Divider borderColor={dividerColor} opacity={0.6} />

        <ListItem>
          <Flex alignItems="flex-start">
            <Box color={accentColor} mt={1.5} mr={3} flexShrink={0}>
              <MdBook size={18} />
            </Box>
            <Box maxW="100%">
              <Heading size="md" fontWeight="600" mb={1}>
                Technician, Electronics technician
              </Heading>
              <Flex alignItems="center" mb={2} wrap="wrap" gap={1}>
                <Text fontSize="sm" color={accentColor} fontWeight="medium">
                  2009 - 2011
                </Text>
                <Text
                  fontSize="sm"
                  mx={1}
                  color="gray.500"
                  display="inline-block"
                >
                  •
                </Text>
                <Text fontSize="sm" color={lightColor}>
                  CEFET - Araxá/MG
                </Text>
              </Flex>

              <Text color={color} fontSize="sm" lineHeight="tall">
                Specialized training in C/Assembly programming languages,
                microprocessor and microcontroller programming and architecture.
              </Text>
            </Box>
          </Flex>
        </ListItem>
      </List>
    </Stack>
  );
};

export default Education;
