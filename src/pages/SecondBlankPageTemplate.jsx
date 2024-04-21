import React from "react";
import { Box, Container, Heading, Text, Image } from "@chakra-ui/react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const SecondBlankPageTemplate = () => {
  return (
    <Box position="relative" minH="100vh">
      <Header />
      <Container maxW="container.lg" p={8}>
        <Heading as="h1" size="xl" textAlign="center" my={10}>
          Second Page Title
        </Heading>
        <Text mb={10} textAlign="center">
          This is the first placeholder for page content.
        </Text>
        <Image src="https://via.placeholder.com/600x400" alt="Placeholder" mb={10} w="full" maxW={{ base: "90vw", sm: "80vw", md: "70vw", lg: "60vw", xl: "50vw" }} h="auto" />
        <Text mb={10} textAlign="center">
          This is the second placeholder for page content.
        </Text>
        <Image src="https://via.placeholder.com/600x400" alt="Placeholder" mb={10} w="full" maxW={{ base: "90vw", sm: "80vw", md: "70vw", lg: "60vw", xl: "50vw" }} h="auto" />
        <Text mb={10} textAlign="center">
          This is the third placeholder for page content.
        </Text>
      </Container>
      <Footer />
    </Box>
  );
};

export default SecondBlankPageTemplate;
