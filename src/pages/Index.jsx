import { Box, Flex, Heading, Text, VStack, Image, Button, Link } from '@chakra-ui/react';
import { FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';

const Index = () => {
  return (
    <Box as="main" minH="100vh" p={8} bg="gray.50">
      <VStack spacing={10} align="stretch">
        <Box as="section" bg="white" boxShadow="md" p={8} borderRadius="lg">
          <Heading as="h1" size="xl" textAlign="center">Angel Investments</Heading>
          <Text mt={4} fontSize="lg" textAlign="center">
            Discover innovative startups and transformative projects we've invested in.
          </Text>
        </Box>

        <Box as="section" bg="white" boxShadow="md" p={8} borderRadius="lg">
          <Heading as="h2" size="lg">About Us</Heading>
          <Text mt={4} fontSize="md">
            We are committed to supporting early-stage startups with the potential to impact the world positively. Our focus is on technology, sustainability, and social innovation.
          </Text>
        </Box>

        <Box as="section" bg="white" boxShadow="md" p={8} borderRadius="lg">
          <Heading as="h2" size="lg">Portfolio</Heading>
          <Flex wrap="wrap" justify="center" mt={4}>
            <Image src="/images/startup1.jpg" boxSize="250px" borderRadius="md" m={2} alt="Startup 1"/>
            <Image src="/images/startup2.jpg" boxSize="250px" borderRadius="md" m={2} alt="Startup 2"/>
            <Image src="/images/startup3.jpg" boxSize="250px" borderRadius="md" m={2} alt="Startup 3"/>
          </Flex>
        </Box>

        <Box as="section" bg="white" boxShadow="md" p={8} borderRadius="lg">
          <Heading as="h2" size="lg">Contact</Heading>
          <VStack spacing={3} mt={4}>
            <Button leftIcon={<FaLinkedin />} colorScheme="blue" variant="solid">
              <Link href="https://www.linkedin.com" isExternal>LinkedIn</Link>
            </Button>
            <Button leftIcon={<FaEnvelope />} colorScheme="green" variant="solid">
              <Link href="mailto:info@angelinvestments.com" isExternal>Email Us</Link>
            </Button>
            <Button leftIcon={<FaPhone />} colorScheme="red" variant="solid">
              +123 456 7890
            </Button>
          </VStack>
        </Box>
      </VStack>
    </Box>
  );
};

export default Index;