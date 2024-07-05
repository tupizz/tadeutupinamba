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
            Data Analytics & Artificial Intelligence
          </Text>
          <Text fontWeight="bold" color="green.400">
            2023 - 2025
          </Text>
          <Text fontWeight="bold" color={lightColor}>
            FIAP - Master of Business Administration - MBA
          </Text>
          <Text color={color}>
            <ul style={{ padding: "10px 20px" }}>
              <li>
                <strong>Foundations:</strong> Mastery in statistical analysis,
                data visualization, and predictive modeling using Python, R,
                SQL, Tableau, and PowerBI.
              </li>
              <li>
                <strong>AI Applications:</strong> Knowledge of AI & ML
                algorithms, practical applications across sectors like finance
                and marketing, and emphasis on AI ethics and biases.
              </li>
              <li>
                <strong>Data Strategy:</strong> Expertise in integrating data
                analytics into business decisions, enhancing customer
                experience, and driving innovation.
              </li>
              <li>
                <strong>Big Data:</strong> Proficiency in big data platforms,
                handling unstructured data, real-time analytics, and cloud
                computing.
              </li>
              <li>
                <strong>AI Project Management:</strong> Experience in AI project
                implementation, stakeholder management, and ROI calculation.
              </li>
              <li>
                <strong>Ethics & Law:</strong> In-depth understanding of data
                privacy, GDPR, and ethical considerations in AI deployments.
              </li>
            </ul>
          </Text>
        </ListItem>

        <ListItem>
          <Text fontWeight="bold">
            <ListIcon as={MdBook} color="green.500" />
            MBA in Software Design and Architecture
          </Text>
          <Text fontWeight="bold" color="green.400">
            2023 - 2024
          </Text>
          <Text fontWeight="bold" color={lightColor}>
            Full Cycle - Master of Business Administration - MBA
          </Text>
          <Text color={color}>
            <ul style={{ padding: "10px 20px" }}>
              <li>
                <strong>Software Principles:</strong> Comprehensive knowledge of
                software design principles, patterns, and best practices.
              </li>
              <li>
                <strong>Architectural Styles:</strong> Proficiency in different
                architectural styles including microservices, monolithic,
                serverless, and event-driven architectures.
              </li>
              <li>
                <strong>Design Techniques:</strong> Expertise in UML, system
                decomposition, API design, and component modularity.
              </li>
              <li>
                <strong>Systems Integration:</strong> Mastery in integrating
                heterogeneous systems, legacy system modernization, and API
                integrations.
              </li>
              <li>
                <strong>Project Management:</strong> Skills in leading software
                projects, stakeholder management, and Agile methodologies.
              </li>
              <li>
                <strong>Security & Compliance:</strong> Knowledge in ensuring
                system security, data privacy, and adherence to regulatory
                standards.
              </li>
            </ul>
            <p>
              Designed to equip professionals with both the technical depth and
              managerial strategies essential for leading software design
              projects and teams.
            </p>
          </Text>
        </ListItem>

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
