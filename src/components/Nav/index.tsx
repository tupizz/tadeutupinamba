import { Box, Flex, Heading, Stack, Tag, Text } from "@chakra-ui/react";
import { FunctionComponent } from "react";

interface NavProps {}

const Nav: FunctionComponent<NavProps> = () => {
  return (
    <Stack>
      <Box>
        <Heading size="md" my={4}>
          Back-end
        </Heading>

        <Flex wrap="wrap" direction="row" gap={2}>
          <Tag size="md" variant="solid" colorScheme="blue">
            Clean code & clean architecture
          </Tag>

          <Tag size="md" variant="solid" colorScheme="blue">
            Event driven architecture
          </Tag>

          <Tag size="md" variant="solid" colorScheme="blue">
            REST APIs
          </Tag>

          <Tag size="md" variant="solid" colorScheme="blue">
            Graphql APIs
          </Tag>

          <Tag size="md" variant="solid" colorScheme="blue">
            Design Patterns
          </Tag>

          <Tag size="md" variant="solid" colorScheme="blue">
            SOLID principles
          </Tag>

          <Tag size="md" variant="solid" colorScheme="blue">
            Node.js
          </Tag>

          <Tag size="md" variant="solid" colorScheme="blue">
            Golang
          </Tag>

          <Tag size="md" variant="solid" colorScheme="blue">
            Java
          </Tag>

          <Tag size="md" variant="solid" colorScheme="blue">
            Javascript
          </Tag>

          <Tag size="md" variant="solid" colorScheme="blue">
            Typescript
          </Tag>
        </Flex>
      </Box>

      <Box>
        <Heading size="md" my={4}>
          Front-end
        </Heading>

        <Flex wrap="wrap" direction="row" gap={2}>
          <Tag size="md" variant="solid" colorScheme="blue">
            Clean code & clean architecture
          </Tag>

          <Tag size="md" variant="solid" colorScheme="blue">
            Design Patterns
          </Tag>

          <Tag size="md" variant="solid" colorScheme="blue">
            React.js
          </Tag>

          <Tag size="md" variant="solid" colorScheme="blue">
            Vue.js
          </Tag>

          <Tag size="md" variant="solid" colorScheme="blue">
            Flutter
          </Tag>

          <Tag size="md" variant="solid" colorScheme="blue">
            React Native
          </Tag>
        </Flex>
      </Box>

      <Box>
        <Heading size="md" my={4}>
          Database
        </Heading>

        <Flex wrap="wrap" direction="row" gap={2}>
          <Tag size="md" variant="solid" colorScheme="blue">
            MongoDB
          </Tag>
          <Tag size="md" variant="solid" colorScheme="blue">
            PostgreSQL
          </Tag>

          <Tag size="md" variant="solid" colorScheme="blue">
            MySQL
          </Tag>

          <Tag size="md" variant="solid" colorScheme="blue">
            DynamoDB
          </Tag>

          <Tag size="md" variant="solid" colorScheme="blue">
            Redis
          </Tag>
        </Flex>
      </Box>

      <Box>
        <Heading size="md" my={4}>
          Devops
        </Heading>

        <Flex wrap="wrap" direction="row" gap={2}>
          <Tag size="md" variant="solid" colorScheme="blue">
            Docker
          </Tag>
          <Tag size="md" variant="solid" colorScheme="blue">
            Linux
          </Tag>
          <Tag size="md" variant="solid" colorScheme="blue">
            Kubernetes
          </Tag>
          <Tag size="md" variant="solid" colorScheme="blue">
            Helm
          </Tag>
          <Tag size="md" variant="solid" colorScheme="blue">
            Github actions
          </Tag>
          <Tag size="md" variant="solid" colorScheme="blue">
            Jenkins
          </Tag>
          <Tag size="md" variant="solid" colorScheme="blue">
            AWS
          </Tag>
        </Flex>
      </Box>
    </Stack>
  );
};

export default Nav;
