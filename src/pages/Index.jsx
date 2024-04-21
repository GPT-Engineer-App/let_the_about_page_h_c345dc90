import React from "react";
import { ChakraProvider, Box, Flex, Heading, Text, VStack, HStack, IconButton, useColorMode, useColorModeValue, Container, Image, Stack, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { FaMoon, FaSun, FaBars, FaTimes, FaNewspaper, FaBook, FaEnvelope, FaInfoCircle, FaLink, FaBell } from "react-icons/fa";

const Index = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <ChakraProvider>
      <Box position="relative" bg={useColorModeValue("gray.100", "gray.900")} minH="calc(100vh - 80px)">
        <Flex as="header" width="full" align="center" justify="space-between" p={4} borderBottomWidth="1px">
          <Button as={Link} to="/" variant="ghost" _hover={{ textDecoration: "none" }} p={0} color={useColorModeValue("gray.800", "white")}>
            <Heading as="h1" size="lg" letterSpacing={"tighter"} color={useColorModeValue("gray.800", "white")}>
              RaqmiyaCrypto
            </Heading>
          </Button>

          <HStack spacing={4}>
            <IconButton icon={colorMode === "light" ? <FaMoon color="gray.800" /> : <FaSun />} onClick={toggleColorMode} variant="ghost" />
            <IconButton icon={<FaBars />} display={{ md: "none" }} />
            <HStack spacing={4} display={{ base: "none", md: "flex" }}>
              <Button as={Link} to="/raqmiya-digest" variant="ghost" color={useColorModeValue("gray.800", "white")}>
                Latest News
              </Button>
              <Button as={Link} to="/guides" variant="ghost" color={useColorModeValue("gray.800", "white")}>
                Guides
              </Button>
              <Button as={Link} to="/about" variant="ghost" color={useColorModeValue("gray.800", "white")}>
                About Us
              </Button>
            </HStack>
          </HStack>
        </Flex>

        <Container maxW="container.lg" p={8}>
          <Stack direction={{ base: "column", md: "row" }} spacing={6} align="center" justify="space-between">
            <VStack align="left" maxW="lg" spacing={4}>
              <Heading as="h2" size="xl">
                Stay Updated with the Latest Crypto News & Guides
              </Heading>
              <Text fontSize="lg" color={useColorModeValue("gray.600", "gray.200")}>
                Your premier source for cryptocurrency news in the Middle East.
              </Text>
              <Button as={Link} to="/raqmiya-digest" leftIcon={<FaNewspaper />} colorScheme="teal" variant="solid">
                Latest News
              </Button>
              <Button as={Link} to="/subscribe" leftIcon={<FaBell />} colorScheme="green" variant="solid">
                Subscribe
              </Button>
              <Button as={Link} to="/guides" leftIcon={<FaBook />} colorScheme="orange" variant="solid">
                Crypto Guides
              </Button>
            </VStack>
            <Box w={{ base: "full", md: "40%" }} textAlign="center">
              <Image borderRadius="md" src="https://images.unsplash.com/photo-1627570120184-7aec90f5613a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjcnlwdG9jdXJyZW5jeSUyMG5ld3N8ZW58MHx8fHwxNzA0NTczNjQxfDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Cryptocurrency News" />
            </Box>
          </Stack>
        </Container>

        <Flex as="footer" position="relative" left="0" direction={{ base: "column", md: "row" }} width="full" justify="space-between" p={4} borderTopWidth="1px">
          <VStack spacing={4} align="start">
            <Text fontSize="sm">&copy; {new Date().getFullYear()} RaqmiyaCrypto. All rights reserved.</Text>
            <Text fontSize="sm">Contact us: raqmiyacrypto@gmail.com</Text>
          </VStack>
          <HStack spacing={4}>
            <Button as="a" href="mailto:raqmiyacrypto@gmail.com" leftIcon={<FaEnvelope />} colorScheme="teal" variant="outline">
              Contact Us
            </Button>
            <Button as={Link} to="/about" leftIcon={<FaInfoCircle />} colorScheme="teal" variant="outline">
              About Us
            </Button>
            {/* Additional links can be added here */}
            <Button as="a" href="#" leftIcon={<FaLink />} colorScheme="teal" variant="outline">
              Other Links
            </Button>
          </HStack>
        </Flex>
      </Box>
    </ChakraProvider>
  );
};

export default Index;
