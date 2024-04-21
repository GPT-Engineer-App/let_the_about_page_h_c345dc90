import React from "react";
import { Box, Button, FormControl, FormLabel, Input, VStack, Container } from "@chakra-ui/react";
// Add useState import
import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Subscribe() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to control the visibility of the mobile menu
  return (
    <Box position="relative" minH="100%">
      <Header />
      <Container maxW="container.lg" p={8}>
        <Box p={8} maxWidth="500px" mx="auto">
          <form>
            <VStack spacing={4}>
              <FormControl isRequired>
                <FormLabel htmlFor="email">Email Address</FormLabel>
                <Input type="email" id="email" placeholder="Enter your email" />
              </FormControl>
              <Button type="submit" colorScheme="blue" width="full">
                Subscribe
              </Button>
            </VStack>
          </form>
        </Box>
      </Container>
      <Footer />
    </Box>
  );
}

export default Subscribe;
