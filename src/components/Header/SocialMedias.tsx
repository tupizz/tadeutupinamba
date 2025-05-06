import {
  Box,
  Flex,
  HStack,
  Icon,
  Link,
  Text,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";
import { FunctionComponent } from "react";
import { 
  FiMail, 
  FiPhone, 
  FiGithub, 
  FiGlobe 
} from "react-icons/fi";

interface SocialLinkProps {
  icon: any;
  text: string;
  href?: string;
}

const SocialLink: FunctionComponent<SocialLinkProps> = ({ icon, text, href }) => {
  const linkColor = useColorModeValue("blue.500", "blue.300");
  const hoverColor = useColorModeValue("blue.600", "blue.400");
  const iconColor = useColorModeValue("blue.500", "blue.300");
  
  const content = (
    <HStack spacing={2} align="center">
      <Icon as={icon} color={iconColor} boxSize={4} />
      <Text 
        fontSize="sm" 
        color={href ? linkColor : "gray.500"}
        fontWeight={href ? "medium" : "normal"}
        transition="color 0.2s ease"
        _hover={{
          color: href ? hoverColor : "gray.500"
        }}
      >
        {text}
      </Text>
    </HStack>
  );

  if (href) {
    return (
      <Link href={href} isExternal _hover={{ textDecoration: "none" }}>
        {content}
      </Link>
    );
  }

  return content;
};

interface SocialMediasProps {}

const SocialMedias: FunctionComponent<SocialMediasProps> = () => {
  return (
    <VStack 
      spacing={2} 
      align="flex-start"
      justify="center"
    >
      <SocialLink 
        icon={FiPhone} 
        text="+55 (17) 996161451" 
        href="tel:+5517996161451" 
      />
      
      <SocialLink 
        icon={FiMail} 
        text="tadeu.tupiz@gmail.com" 
        href="mailto:tadeu.tupiz@gmail.com" 
      />
      
      <SocialLink 
        icon={FiGithub} 
        text="tupizz" 
        href="https://github.com/tupizz" 
      />
      
      <SocialLink 
        icon={FiGlobe} 
        text="www.tadeutupinamba.com.br" 
        href="https://www.tadeutupinamba.com.br" 
      />
    </VStack>
  );
};

export default SocialMedias;