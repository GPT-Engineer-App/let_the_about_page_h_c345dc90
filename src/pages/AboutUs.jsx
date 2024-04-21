import React from "react";
import { Box, Container, Heading } from "@chakra-ui/react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const AboutUs = () => {
  return (
    <>
      <Header />
      <Container maxW="container.lg" p={8}>
        <Heading as="h1" size="xl" textAlign="center" my={10}>
          About Us
        </Heading>
        <Box p={5} shadow="md" borderWidth="1px">
          {/* Placeholder for About Us content */}
          <p>Your content goes here...</p>
        </Box>
      </Container>
      <Footer />
    </>
  );
};

export default AboutUs;
