import {
  Box,
  Divider,
  Heading,
  List,
  ListItem,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import dynamic from "next/dynamic";
import { FunctionComponent } from "react";

interface ExperiencesProps {}

// Using experience items as data
const experienceItems = [
  {
    id: "primer",
    title: "Staff Software Engineer",
    period: "January 2025 - present",
    company: "Primer (San Francisco, United States)",
    about:
      "Primer is a B2B audience intelligence platform that eliminates wasted ad spend by enabling marketers to precisely target ideal customers across all major advertising channels. The platform integrates first-party customer data with premium third-party business intelligence to create hyper-targeted audience segments that sync seamlessly with LinkedIn, Google, Meta, and other major ad platforms.",
    achievements: [
      "Advanced Data Engineering: Engineered and maintained the core data pipeline that processes and integrates large-scale datasets from multiple third-party providers into ClickHouse, ensuring data integrity and freshness that powers precise audience targeting.",
      "Cross-Platform Audience Delivery: Developed robust API integrations that seamlessly synchronize custom audience segments across Google Ads, Meta Ads, and LinkedIn Ads, enabling omnichannel targeting of high-value prospects.",
      "Performance Optimization: Redesigned the connection integration framework, achieving a 70% efficiency improvement that dramatically reduced latency and enhanced real-time audience delivery across all advertising platforms.",
      "Operational Intelligence System: Architected and deployed an internal monitoring portal visualizing live events and queue statuses across microservices, increasing system transparency, accelerating issue resolution, and strengthening cross-functional collaboration throughout the organization.",
    ],
  },
  {
    id: "pray",
    title: "Staff Software Engineer",
    period: "December 2022 - January 2025",
    company: "Pray.com (Los Angeles, United States)",
    about:
      "Pray.com is the world's #1 app for faith and prayer, bringing spiritual content to users' fingertips through daily prayer plans, inspirational audio content, and a private social network. The platform delivers religious content and technical services to a global audience through a mobile application that seamlessly integrates personalized faith-based experiences.",
    achievements: [
      "Multilingual Platform Expansion: Launched an innovative translation and voice synthesis platform that significantly expanded service offerings into multiple new languages including Portuguese, Italian, and Japanese, increasing global accessibility and user engagement.",
      "AI Content Generation Pipeline: Developed a pioneering AI system that autonomously generates daily devotionals from RSS feeds, implementing cutting-edge technologies with cost-effective architecture and user-centric design principles.",
      "Database Architecture Transformation: Spearheaded a comprehensive database migration initiative that enhanced schema structure and dramatically improved system performance while maintaining uninterrupted service continuity.",
      "Video Content Management Enhancement: Led the successful integration of Zype CMS, significantly upgrading video content management capabilities and creating a more streamlined experience for both internal stakeholders and end users.",
      "Performance Optimization: Implemented critical system optimizations that reduced query response times from over two minutes to under one second, dramatically improving user experience and operational efficiency.",
      "DevOps Infrastructure Innovation: Created an Ephemeral/QA environment that accelerated feature delivery cycles and streamlined development processes, while implementing advanced caching strategies and comprehensive DataDog monitoring to enhance system reliability.",
    ],
  },
  {
    id: "nok",
    title: "Senior Software Engineer",
    period: "March 2022 - December 2022",
    company: "Nok (Los Angeles, United States)",
    about:
      "Nok is a comprehensive reverse logistics platform that unifies and streamlines returns management for brands. The company integrates into existing processes to simplify returns handling, maintain brand integrity, generate new revenue streams through optimized resale strategies, and provide unprecedented data visibility across the entire product lifecycle.",
    achievements: [
      "E-commerce Feature Development: Designed and implemented critical e-commerce functionality including payment processing, shipping logistics, returns management, and innovative order handling features like multiple order items tryout and keep, working across the full technology stack to deliver seamless customer experiences.",
      "Data Architecture Optimization: Proposed and implemented scalable solutions to address technical debt, integrating caching mechanisms and Elasticsearch on top of DynamoDB databases, significantly improving performance and data access while maintaining system integrity.",
      "Synchronization System Engineering: Developed a robust synchronization mechanism to ensure real-time consistency between Elasticsearch indexes and primary database schemas, enabling reliable search functionality and accurate data representation across platforms.",
      "Database Migration Framework: Created and optimized an efficient migration process to seamlessly update records whenever new properties were introduced at the database level, minimizing downtime and ensuring data consistency during schema evolutions.",
      "Full-Stack Technical Expertise: Leveraged diverse technology stack including Node.js, JavaScript, TypeScript, React, DynamoDB, Elasticsearch, AWS Cognito, AWS Amplify with AppSync, and AWS Lambda to build and maintain scalable, high-performance applications supporting the company's reverse logistics operations.",
    ],
  },
  {
    id: "demand",
    title: "Senior Software Engineer",
    period: "December 2021 - April 2022",
    company: "Demand.io (Los Angeles, United States)",
    about:
      "Demand.io is an AI-powered e-commerce accelerator that connects consumers with products they'll love. The company maintains a comprehensive product database and delivers personalized shopping experiences through AI-driven apps and interfaces, pioneering the transition from traditional screen-based shopping to conversational commerce.",
    achievements: [
      "Massive Data Pipeline Engineering: Architected and implemented a sophisticated ETL pipeline leveraging network affiliatizers to import, process, and load over 20 million product records into the company infrastructure, utilizing Node.js, MongoDB with Mongoose, Nest.js, and Bull + Redis for efficient queue management.",
      "AI-Powered Product Clustering System: Developed an innovative text clustering strategy that intelligently groups similar products, enabling price optimization and enhancing user experience by presenting comparable product models throughout the customer journey across multiple platforms.",
      "Microservices Architecture Development: Built robust Nest.js microservices that facilitated seamless communication between internal services and exposed optimized coupon and product data to front-end applications, creating a cohesive ecosystem across the platform.",
      "Cloud Infrastructure Collaboration: Worked closely with infrastructure teams on Kubernetes-based systems deployed on Google Cloud Platform, ensuring scalability, reliability, and performance optimization for all services.",
      "Full-Stack Technical Implementation: Leveraged diverse technology stack including Node.js, JavaScript, TypeScript, Nest.js, Fastify, MySQL, Docker, Kubernetes, Sentry.io, Elasticsearch, and containerization technologies to deliver high-performance, scalable solutions supporting the company's AI-driven commerce platform.",
    ],
  },
  {
    id: "insider",
    title: "Senior Software Engineer",
    period: "July 2020 - December 2021",
    company: "Insider, Inc. (New York, United States)",
    about:
      "Business Insider is a leading multinational financial and business news website headquartered in New York City. The platform delivers original reporting and aggregated content to millions of readers through multiple international editions, combining traditional journalism with modern digital publishing strategies.",
    achievements: [
      "Revenue Attribution System: Designed and implemented a comprehensive page-level revenue attribution (PRA) system that processed over 1 million stories/posts, providing data-driven insights on content performance and revenue generation, built using Node.js, Elasticsearch, Redis, and MongoDB with Nest.js and Bull frameworks.",
      "Reader Experience Optimization: Contributed to the Helpfulness team to significantly enhance performance and user experience for millions of readers, implementing technical improvements that increased engagement and satisfaction across the platform.",
      "Internal Tools Development: Created and maintained essential internal applications and services using a diverse tech stack including TypeScript, Node.js, Angular, and Go, enabling more efficient content management and business operations.",
      "Platform Modernization: Successfully migrated an existing product platform to Vue.js technologies, improving maintainability, performance, and developer experience while ensuring seamless transition for end users.",
      "DevOps Implementation: Built fully automated CI/CD pipelines with GitHub Actions and implemented containerized applications using Docker, streamlining deployment processes and increasing development efficiency.",
      "API Architecture: Developed multiple high-performance APIs and applications in Node.js that supported critical business functions, enhancing content delivery capabilities and internal data accessibility.",
      "SEO Enhancement: Implemented technical SEO optimizations that improved content discoverability and search engine rankings, contributing to increased organic traffic and broader audience reach.",
    ],
  },
  {
    id: "bv",
    title: "Software Engineer",
    period: "June 2019 - July 2020",
    company: "BV Bank (São Paulo, Brazil)",
    about:
      "Banco BV is a major Brazilian financial institution known for its significant market presence in vehicle financing, where it positioned itself as the second-largest player with 22% market share in 2011. The bank offers a wide range of financial products and services to individuals and businesses across Brazil.",
    achievements: [
      "Innovation Lab Development: Contributed to Banco BV's Innovation Lab (BV Lab), designing and implementing projects that successfully automated processes and routine integrations with the bank's strategic partners, enhancing operational efficiency and service delivery.",
      "Internet Banking Transformation: Played a key role in improving the user experience of the bank's Internet Banking platform and assisted in the critical process of migrating legacy systems to modern technology stacks, ensuring seamless transition and enhanced customer satisfaction.",
      "Blockchain Innovation: Participated in a prestigious blockchain project under LIFT (Technological Financial Innovations Laboratory of Brazil Central Bank), where I helped design and develop a P2P lending application using Hyperledger Fabric technology, which was showcased in the LIFT 2019 edition and recognized by Brazil's Central Bank.",
      "Augmented Reality Implementation: Leveraged AR.js and Unity with Vuforia to create augmented reality projects that provided innovative customer experiences and differentiated banking services in the competitive financial technology landscape.",
      "Cross-Platform Development: Built and maintained diverse applications using multiple technologies including Java with Spring Boot for APIs, Node.js for backend services, Angular and React for web applications, and Flutter for mobile applications, demonstrating versatility across the full technology stack.",
    ],
  },
  {
    id: "field",
    title: "Software Engineer",
    period: "January 2018 - June 2019",
    company: "Field Control (São José do Rio Preto, Brazil)",
    about:
      "Field Control is a leading field service management software company that transforms how businesses manage external service teams. The platform optimizes maintenance and installation services, improving productivity and service quality for over 2,000 companies and 40,000 technicians across Brazil daily.",
    achievements: [
      "Product Module Development: Created and implemented new product modules for the Field Control platform, expanding functionality and enhancing the core service management capabilities for thousands of business users and field technicians.",
      "Banking Integration Engineering: Successfully developed and deployed an integration with Bradesco, one of Brazil's largest and most respected banking institutions, enabling seamless financial transactions and improving operational workflows for service businesses.",
      "Database Optimization: Engineered and implemented migration, synchronization, and cleanup scripts using Node.js, significantly improving database performance and data integrity across the platform.",
      "API Architecture: Led development and maintenance of RESTful APIs in Node.js following JavaScript design patterns, creating robust backend services that power the platform's core functionality.",
      "Cross-Platform Application Development: Built responsive applications using multiple front-end technologies including Ionic, Angular 2+, AngularJS, and React, ensuring consistent user experiences across different devices and interfaces.",
      "Serverless Implementation: Leveraged AWS Lambda for API exposure, optimizing resource utilization and improving scalability while reducing operational overhead.",
      "Authentication Security: Implemented Amazon Cognito for user authentication across multiple projects, enhancing security protocols and streamlining user management within the platform.",
    ],
  },
  {
    id: "cnpq",
    title: "Graduate Research Intern",
    period: "June 2016 - January 2018",
    company: "CNPq (São José do Rio Preto, Brazil)",
    about:
      "The National Council for Scientific and Technological Development (CNPq) is a prestigious Brazilian government entity connected to the Ministry of Science, Technology and Innovation. Established to foster scientific research and technological advancement in Brazil, CNPq provides critical funding and support for research initiatives across numerous scientific disciplines.",
    achievements: [
      "Environmental Research Innovation: Conducted advanced scientific research focused on environmental challenges using sophisticated Digital Image Processing techniques and distributed computing technologies.",
      'Big Data Framework Architecture: Designed and developed a specialized framework architecture that significantly enhanced the review and analysis processes for environmental remote sensing images, addressing the "rich data, poor information" paradox in the field.',
      "Distributed Processing Implementation: Leveraged Hadoop and Hadoop Image Processing Interface to create efficient methods for processing massive image datasets, enabling more effective extraction of critical environmental information from remote sensing data.",
      "Environmental Monitoring Solutions: Created technical solutions for monitoring vital natural resources including water bodies, mineral deposits, and green areas through advanced image processing algorithms.",
      "Research Infrastructure Development: Established programming classes and methods specifically optimized for the distributed processing of large-scale image datasets, contributing to the technological capabilities of Brazil's scientific research community.",
    ],
  },
  {
    id: "unesp",
    title: "Software Engineer",
    period: "January 2014 - December 2017",
    company: "UNESP - GBD (São José do Rio Preto, Brazil)",
    about:
      "GBD – Grupo de Banco de Dados is a research group founded in 1989. GBD specializes in database modeling and management technologies for both conventional and non-conventional data, covering systems such as DBMS, GIS, hypermedia applications, data integration, warehousing, cleaning, and mining.",
    achievements: [
      "Engineered web applications for health and education domains using Java with Spring MVC 4.x and JPA/Hibernate, delivering dynamic, data-driven user interfaces.",
      "Designed and optimized PostgreSQL database schemas and complex SQL queries to support efficient storage, retrieval, and visualization of research datasets.",
      "Integrated HTML5, CSS3, JavaScript and public JS visualization libraries to create interactive dashboards and reports for academic users.",
      "Developed large-scale image-processing pipelines with the Hadoop Image Processing Interface (HIPI), enabling high-throughput analysis of extensive biomedical and educational image datasets.",
      "Deployed and managed Hadoop clusters on Amazon Web Services, ensuring scalable, reliable infrastructure for big-data workflows and batch processing.",
    ],
  },
];

const ExperienceItem: FunctionComponent<{
  title: string;
  period: string;
  company: string;
  achievements: string[];
  about?: string;
}> = ({ title, period, company, achievements, about }) => {
  const color = useColorModeValue("gray.600", "gray.300");
  const lightColor = useColorModeValue("gray.500", "gray.400");
  const aboutBgColor = useColorModeValue("gray.50", "gray.800");
  const borderColor = useColorModeValue("gray.200", "gray.700");

  return (
    <ListItem mb={10} position="relative">
      {/* Timeline dot and line */}
      <Box
        position="absolute"
        left="-10px"
        top="8px"
        width="10px"
        height="10px"
        borderRadius="full"
        bg="green.400"
        zIndex={1}
      />
      <Box
        position="absolute"
        left="-5px"
        top="18px"
        bottom="-20px"
        width="1px"
        bg={borderColor}
        zIndex={0}
      />

      {/* Content */}
      <Box pl={6}>
        <Heading as="h3" size="md" fontWeight="600">
          {title}
        </Heading>

        <Text color="green.500" fontSize="sm" mt={1} mb={1} fontWeight="500">
          {period}
        </Text>

        <Text color={lightColor} fontSize="sm" mb={3}>
          {company}
        </Text>

        {about && (
          <Text
            fontSize="sm"
            color={color}
            mb={4}
            lineHeight="taller"
            borderLeft="2px solid"
            borderColor="green.200"
            pl={3}
            py={1}
          >
            {about}
          </Text>
        )}

        <Box mt={4}>
          <List spacing={2}>
            {achievements.map((achievement, idx) => (
              <ListItem
                key={idx}
                display="flex"
                fontSize="sm"
                color={color}
                lineHeight="tall"
              >
                <Text as="span" color="green.400" mr={2} fontSize="sm">
                  •
                </Text>
                <Text>{achievement}</Text>
              </ListItem>
            ))}
          </List>
        </Box>
      </Box>
    </ListItem>
  );
};

ExperienceItem.displayName = "ExperienceItem";

const ExperiencesComponent: FunctionComponent<ExperiencesProps> = () => {
  return (
    <Stack spacing={8}>
      <Heading as="h2" size="lg" letterSpacing="tight">
        Experiences
      </Heading>
      <Divider />
      <List spacing={0} position="relative" pl={4}>
        {experienceItems.map((item) => (
          <ExperienceItem
            key={item.id}
            title={item.title}
            period={item.period}
            company={item.company}
            achievements={item.achievements}
            about={item.about}
          />
        ))}
      </List>
    </Stack>
  );
};

ExperiencesComponent.displayName = "ExperiencesComponent";

// Use dynamic import with SSR disabled to avoid hydration issues
const Experiences = dynamic(() => Promise.resolve(ExperiencesComponent), {
  ssr: false,
});

export default Experiences;
