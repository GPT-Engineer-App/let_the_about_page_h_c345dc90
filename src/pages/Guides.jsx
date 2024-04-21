import React from "react";
import { SimpleGrid, Box, Text, Container, Flex, Button, Heading, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Guides = () => {
  // Placeholder cards array
  const cards = [1, 2, 3]; // This can be replaced with actual data

  return (
    <Box position="relative" minH="100vh">
      <Header />
      <Container maxW="container.lg" p={8}>
        <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={10}>
          {cards.map((card) => (
            <Box key={card} p="5" shadow="md" borderWidth="1px">
              <Image borderRadius="md" src="YOUR_NEW_IMAGE_URL_HERE" alt="Guide Image" mb={4} />
              <Text fontSize="xl">Guide {card}</Text>
              {/* Content of the guide */}
              <Text mt={4}>This is a placeholder for guide content.</Text>
            </Box>
          ))}
        </SimpleGrid>
      </Container>
      <Footer />
    </Box>
  );
};

export default Guides;
