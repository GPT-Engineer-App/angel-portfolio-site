import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Box, Flex, Link, Image } from '@chakra-ui/react';
import Index from "./pages/Index.jsx";

function App() {
  return (
    <>
      <Box as="header" bg="brand.800" w="100%" p={4} color="white">
        <Flex align="center" justify="space-between" maxW="1200px" mx="auto">
          <Image src="/logo.png" h="30px" alt="Company Logo" />
          <Flex>
            <Link href="/" p={3} _hover={{ textDecoration: 'none', bg: 'brand.800' }} fontWeight="bold">Home</Link>
            <Link href="/about" p={3} _hover={{ textDecoration: 'none', bg: 'brand.800' }} fontWeight="bold">About Us</Link>
            <Link href="/portfolio" p={3} _hover={{ textDecoration: 'none', bg: 'brand.800' }} fontWeight="bold">Portfolio</Link>
            <Link href="/contact" p={3} _hover={{ textDecoration: 'none', bg: 'brand.800' }} fontWeight="bold">Contact</Link>
          </Flex>
        </Flex>
      </Box>
      <Router>
        <Routes>
          <Route exact path="/" element={<Index />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;