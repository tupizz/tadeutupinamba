import {
  Box,
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
import { MdArrowRight, MdComputer } from "react-icons/md";

interface ExperiencesProps {}

const Experiences: FunctionComponent<ExperiencesProps> = () => {
  const color = useColorModeValue("gray.500", "gray.200");
  const lightColor = useColorModeValue("gray.400", "gray.100");

  return (
    <Stack>
      <Heading>Experiences</Heading>
      <Divider />
      <List spacing={3}>
      <ListItem>
          <Text fontWeight="bold">
            <ListIcon as={MdComputer} color="green.400" />
            Senior Software Engineer (Full-stack Node.js/React/Golang)
          </Text>
          <Text fontWeight="bold" color="green.400">
            December 2022 - nowadays
          </Text>
          <Text fontWeight="bold" color={lightColor}>
            Pray.com (Los Angeles, California)
          </Text>
          <Box color={color}>
            <List spacing={1}>
              <ListItem>
                <ListIcon as={MdArrowRight} color="gray.500" />
                At Pray.com, as a Software Engineer, I contributed to the development and enhancement of the world's #1 app for faith and prayer. In this role, I collaborated with a team to drive the technological vision, ensuring the platform effectively catered to the needs of its global user base, fostering faith and building a tight-knit community.
              </ListItem>
            </List>
          </Box>
        </ListItem>


        <ListItem>
          <Text fontWeight="bold">
            <ListIcon as={MdComputer} color="green.400" />
            Senior Software Engineer (Full-stack Node.js/React/Golang)
          </Text>
          <Text fontWeight="bold" color="green.400">
            April 2022 - December 2022
          </Text>
          <Text fontWeight="bold" color={lightColor}>
            Nok (Los Angeles, California)
          </Text>
          <Box color={color}>
            <List spacing={1}>
              <ListItem>
                <ListIcon as={MdArrowRight} color="gray.500" />
                Created and supported new features on the e-commerce part,
                including (payment, shipping, returns, keep orders, and tryout
                orders). Working as a full stack software engineer I was able to
                successfully build new features like the multiple order items
                tryout and keep, including the revamp on the data-side part, and
                also on the payment processor.
              </ListItem>
              <ListItem>
                <ListIcon as={MdArrowRight} color="gray.500" />
                Proposed scalable solutions to solve data problems related to
                specific tech debts we had, applying solutions like Cache and
                Elasticsearch on top of our dynamo databases. Also with the sync
                mechanism to keep all the index from Elasticsearch up to date
                with our database schemas.
              </ListItem>
              <ListItem>
                <ListIcon as={MdArrowRight} color="gray.500" />
                Created and optimized the migration process to update records
                every time we had new properties (columns, tables, indexes) on
                the database level.
              </ListItem>
              <ListItem>
                <ListIcon as={MdArrowRight} color="gray.500" />
                Worked on technologies like: Node.js, Javascript, Typescript,
                React, Dynamo, Elasticsearch, AWS Cognito, AWS Amplify with
                App-sync and AWS Lamdas
              </ListItem>
            </List>
          </Box>
        </ListItem>

        <ListItem>
          <Text fontWeight="bold">
            <ListIcon as={MdComputer} color="green.400" />
            Senior Software Engineer (Full-stack Node.js/Vue.js)
          </Text>
          <Text fontWeight="bold" color="green.400">
            December 2021 - April 2022
          </Text>
          <Text fontWeight="bold" color={lightColor}>
            Demand.io (Los Angeles, California)
          </Text>
          <Box color={color}>
            <List spacing={1}>
              <ListItem>
                <ListIcon as={MdArrowRight} color="gray.500" />I have relied on
                different network affiliatizer to import products, merchants,
                and promotions. I've built a pipeline to extract, process, and
                load over 20 million product records into our infrastructure in
                the product import part. For this solution I created over
                Node.js platform using queue and technologies like MongoDB with
                Mongoose, Nest.js, and Bull + Redis for queue management
              </ListItem>
              <ListItem>
                <ListIcon as={MdArrowRight} color="gray.500" />I have also
                worked on a text clustering strategy for grouping products in
                order to present the user the best price product, also in order
                to create solutions to present similar product models for our
                users into their journey inside our platforms
              </ListItem>
              <ListItem>
                <ListIcon as={MdArrowRight} color="gray.500" />
                Built Nest.js micro-services to communicate with our internal
                services and expose our best coupons and products for the
                front-end side on each one for our apps
              </ListItem>
              <ListItem>
                <ListIcon as={MdArrowRight} color="gray.500" />
                Worked close to our infrastructure built in Kubernetes on GCP
                cloud
              </ListItem>
              <ListItem>
                <ListIcon as={MdArrowRight} color="gray.500" />
                Worked on technologies like: Node.js, Javascript, Typescript,
                Nest.js, Fastify, MySql, Docker, Kubernetes,
                [Sentry.io](http://sentry.io/), Elasticsearch, Docker
              </ListItem>
            </List>
          </Box>
        </ListItem>

        <ListItem>
          <Text fontWeight="bold">
            <ListIcon as={MdComputer} color="green.400" />
            Senior Software Engineer (Full-stack Node.js/React/Vue.js/Golang)
          </Text>
          <Text fontWeight="bold" color="green.400">
            January 2021 - December 2021
          </Text>
          <Text fontWeight="bold" color={lightColor}>
            Insider, Inc. (New York)
          </Text>
          <Box color={color}>
            <List spacing={1}>
              <ListItem>
                <ListIcon as={MdArrowRight} color="gray.500" />I worked on a big
                project called page-level revenue attribution (PRA) to
                understand better which posts were generating more revenue.
                Based on some dashboards, delivered a better decision-making
                experience. Yet, to clarify the revenue origin, I built a
                pipeline to load over 1 million stories/posts and products to
                enhance our search speed and find a relationship between stories
                and products faster. This project was built in Node.js using
                Elasticsearch, Redis, and MongoDB, with frameworks and libraries
                such as Mongoose, Nest.js, Bull.
              </ListItem>

              <ListItem>
                <ListIcon as={MdArrowRight} color="gray.500" />
                Remote team collaboration
              </ListItem>

              <ListItem>
                <ListIcon as={MdArrowRight} color="gray.500" />
                SEO optimizations
              </ListItem>

              <ListItem>
                <ListIcon as={MdArrowRight} color="gray.500" />
                Worked inside the Helpfulness team improving the
                experience/performance for millions of readers
              </ListItem>

              <ListItem>
                <ListIcon as={MdArrowRight} color="gray.500" />
                Internal services using Typescript, Node.js, angular, go
              </ListItem>

              <ListItem>
                <ListIcon as={MdArrowRight} color="gray.500" />
                Worked and developed applications using Docker containers
              </ListItem>

              <ListItem>
                <ListIcon as={MdArrowRight} color="gray.500" />
                Built fully automated CI/CD pipelines with Github actions.
              </ListItem>

              <ListItem>
                <ListIcon as={MdArrowRight} color="gray.500" />
                Implemented several API microservices in Node.js.
              </ListItem>

              <ListItem>
                <ListIcon as={MdArrowRight} color="gray.500" />
                Migrated an existing product platform to start using Vue.js
                technologies
              </ListItem>
            </List>
          </Box>
        </ListItem>

        <ListItem>
          <Text fontWeight="bold">
            <ListIcon as={MdComputer} color="green.400" />
            Senior Software Engineer (Back-end Node.js/AWS)
          </Text>
          <Text fontWeight="bold" color="green.400">
            July 2020 - December 2020
          </Text>
          <Text fontWeight="bold" color={lightColor}>
            Kovi (São Paulo, Brazil)
          </Text>
          <Box color={color}>
            <List spacing={1}>
              <ListItem>
                <ListIcon as={MdArrowRight} color="gray.500" />I worked on a big
                Design and developed new features on main Kovi's platform.
              </ListItem>

              <ListItem>
                <ListIcon as={MdArrowRight} color="gray.500" />
                Javascript and Typescript on top of Node.js
              </ListItem>

              <ListItem>
                <ListIcon as={MdArrowRight} color="gray.500" />
                Internal services in GraphQL
              </ListItem>

              <ListItem>
                <ListIcon as={MdArrowRight} color="gray.500" />
                TDD in most task dones (unit and integration)
              </ListItem>

              <ListItem>
                <ListIcon as={MdArrowRight} color="gray.500" />
                AWS Services with Serverless framework to handle and maintain it
                (lambda handlers, workers, triggers, dynamodb, sqs, sns)
              </ListItem>

              <ListItem>
                <ListIcon as={MdArrowRight} color="gray.500" />
                Worked and developed applications using Docker containers
              </ListItem>

              <ListItem>
                <ListIcon as={MdArrowRight} color="gray.500" />
                Built fully automated CI/CD pipelines with Github actions.
              </ListItem>
            </List>
          </Box>
        </ListItem>

        <ListItem>
          <Text fontWeight="bold">
            <ListIcon as={MdComputer} color="green.400" />
            Mid Software Engineer (Full-stack Java and
            Node.js/React/Angular/Flutter)
          </Text>
          <Text fontWeight="bold" color="green.400">
            July 2019 - June 2020
          </Text>
          <Text fontWeight="bold" color={lightColor}>
            BV Bank (São Paulo, Brazil)
          </Text>
          <Box color={color}>
            <List spacing={1}>
              <ListItem>
                <ListIcon as={MdArrowRight} color="gray.500" />
                Worked inside Bank's innovation Lab (BV Lab), creating and
                developing projects to automatizate process and routine
                integrations with BV's partners. Also worked in a project which
                the main objective was to improve the user experience of
                Internet Banking, and helped in the process of migrating the
                legacy system.
              </ListItem>

              <ListItem>
                <ListIcon as={MdArrowRight} color="gray.500" />
                In another opportunity I had joined in blockchain project on
                LIFT (Technological Financial Innovations Laboratory of Brazil
                Central Bank - https://www.bcb.gov.br/) which we designed and
                developed a p2p lending blockchain application - using
                Hyperledger Fabric technology - business case to use with
                showcase in the LIFT 2019 edition.
                https://www.bcb.gov.br/en/pressdetail/2308/nota The project name
                was: P2P LENDING WITH BLOCKCHAIN (bank of issue from Brazil)
              </ListItem>

              <ListItem>
                <ListIcon as={MdArrowRight} color="gray.500" />
                Worked with technologies like Java, Node.js, Angular, React,
                Flutter.
              </ListItem>
            </List>
          </Box>
        </ListItem>

        <ListItem>
          <Text fontWeight="bold">
            <ListIcon as={MdComputer} color="green.400" />
            Mid Software Engineer (Full-stack Node.js/React/Angular/AWS)
          </Text>
          <Text fontWeight="bold" color="green.400">
            October 2018 - June 2019
          </Text>
          <Text fontWeight="bold" color={lightColor}>
            Field Control (São José do Rio Preto, Brazil)
          </Text>
          <Box color={color}>
            <List spacing={1}>
              <ListItem>
                <ListIcon as={MdArrowRight} color="gray.500" />
                Field Control product development and maintenance. Worked on
                creating new product modules and integration with Bradesco (one
                of the largest and most respected banks in Brazil). On a
                day-to-day basis, use the following scope technologies:
              </ListItem>

              <ListItem>
                <ListIcon as={MdArrowRight} color="gray.500" />
                Front-end: React.js, React native, Angular.
              </ListItem>

              <ListItem>
                <ListIcon as={MdArrowRight} color="gray.500" />
                Migration, synchronization, and database cleanup scripts with
                Node.js
              </ListItem>

              <ListItem>
                <ListIcon as={MdArrowRight} color="gray.500" />
                AWS web services usage: Cognito, SQS, SNS, Lambdas, RDS,
                Serverless framework, DynamoDB
              </ListItem>

              <ListItem>
                <ListIcon as={MdArrowRight} color="gray.500" />
                Worked and lead on a project with an integration with one of the
                biggest banks on Brazil (Bradesco), where we had to consume
                their API with some locations to process and load into our
                database. Built from top to bottom all the tech resources for
                making the integration possible (mobile application, server, ETL
                data pipeline process to process)
              </ListItem>
            </List>
          </Box>
        </ListItem>

        <ListItem>
          <Text fontWeight="bold">
            <ListIcon as={MdComputer} color="green.400" />
            Jr. Software Engineer (Full-stack Java Spring/JSF/JSP/Node.js)
          </Text>
          <Text fontWeight="bold" color="green.400">
            January 2018 - December 2018
          </Text>
          <Text fontWeight="bold" color="gray.200">
            DXC (São José do Rio Preto, Brazil)
          </Text>
          <Box color={color}>
            <List spacing={1}>
              <ListItem>
                <ListIcon as={MdArrowRight} color="gray.500" />
                Worked on development of enterprise web projects in Petrobras
                (http://www.petrobras.com.br/pt/), using technologies like Java
                EE, SpringMVC, JPA and JSF.
              </ListItem>
            </List>
          </Box>
        </ListItem>

        <ListItem>
          <Text fontWeight="bold">
            <ListIcon as={MdComputer} color="green.400" />
            Software Engineer (Full-stack Java Spring/JSP/Node.js/Front-end)
          </Text>
          <Text fontWeight="bold" color="green.400">
            January 2014 - December 2017
          </Text>
          <Text fontWeight="bold" color="gray.200">
            UNESP - GBD (São José do Rio Preto, Brazil)
          </Text>
          <Box color={color}>
            <List spacing={1}>
              <ListItem>
                <ListIcon as={MdArrowRight} color="gray.500" />
                Project Portal GBD - Concept, develop and maintain a platform to
                show information about Database Group. I worked with Java7,
                Spring MVC, Hibernate/JPA, PostgreSQL, JSP, HTML, CSS,
                JavaScript, jQuery, and Bootstrap.
              </ListItem>

              <ListItem>
                <ListIcon as={MdArrowRight} color="gray.500" />
                Project Portal GBD Lattes - Concept, develop and maintain a
                platform to show information of Unesp's scientific production,
                which are collected from the Lattes Platformwith some
                enhancements when compared to Portal PROPe. I worked with Java7,
                Spring MVC, Hibernate/JPA, PostgreSQL, JSP, HTML, CSS,
                JavaScript, jQuery, and Bootstrap.
              </ListItem>

              <ListItem>
                <ListIcon as={MdArrowRight} color="gray.500" />
                Project Portal PROPe - Develop and maintain a platform to show
                information of Unesp's scientific production, which are
                collected from the Lattes Platform. I worked with Java7, Spring
                MVC, Hibernate/JPA, PostgreSQL, JSP, HTML, CSS, JavaScript,
                jQuery, and Bootstrap.
              </ListItem>

              <ListItem>
                <ListIcon as={MdArrowRight} color="gray.500" />
                Project GEP - Develop and maintain a medical record evaluation
                for patients on Bezerra de Menezes Hospital. I worked with
                Java7, Spring MVC, Hibernate/JPA, PostgreSQL, JSP, HTML, CSS,
                JavaScript, jQuery, and Bootstrap.
              </ListItem>
            </List>
          </Box>
        </ListItem>
      </List>
    </Stack>
  );
};

export default Experiences;
