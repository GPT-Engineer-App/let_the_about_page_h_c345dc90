import React from "react";
import { Flex, Button, Heading, HStack, IconButton, useColorMode, Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { FaMoon, FaSun, FaBars } from "react-icons/fa";
import { useState } from "react";
import BitcoinPrice from "./BitcoinPrice";
import Navigation from "./Navigation";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex as="header" width="full" align="center" justify="space-between" p={4} borderBottomWidth="1px">
      <Button as={Link} to="/" variant="ghost" _hover={{ textDecoration: "none" }} p={0}>
        <Heading as="h1" size="lg" letterSpacing={"tighter"} display={{ base: "none", md: "block" }}>
          RaqmiyaCrypto
        </Heading>
        <Heading as="h1" size="lg" letterSpacing={"tighter"} display={{ base: "block", md: "none" }}>
          RC
        </Heading>
      </Button>
      <HStack spacing={4} display={{ base: "flex", md: "flex" }}>
        <BitcoinPrice />
        <IconButton icon={colorMode === "light" ? <FaMoon /> : <FaSun />} onClick={toggleColorMode} variant="ghost" />
        {/* Hide Navigation component on mobile view and replace with a hamburger menu */}
        <IconButton aria-label="Open menu" fontSize="20px" display={{ md: "none" }} icon={<FaBars />} onClick={() => setIsMenuOpen(!isMenuOpen)} />
        {isMenuOpen && (
          <Box pb={4} display={{ md: "none" }}>
            <Navigation />
          </Box>
        )}
        <Navigation display={{ base: "none", md: "block" }} />
      </HStack>
    </Flex>
  );
};

export default Header;
