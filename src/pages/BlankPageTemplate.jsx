import React from "react";
import { Box, Container, Heading, Text } from "@chakra-ui/react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const BlankPageTemplate = () => {
  return (
    <Box position="relative" minH="100vh">
      <Header />
      <Container maxW="container.lg" p={8}>
        <Heading as="h1" size="xl" textAlign="center" my={10}>
          Page Title
        </Heading>
        <Text mb={10} textAlign="center">
          This is a placeholder for page content.
        </Text>
      </Container>
      <Footer />
    </Box>
  );
};

export default BlankPageTemplate;
