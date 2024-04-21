import React from "react";
import { Link } from "react-router-dom";
import { HStack, Button } from "@chakra-ui/react";

const Navigation = (props) => {
  return (
    <HStack as="nav" spacing={4} {...props}>
      <Button as={Link} to="/" variant="ghost">
        Home
      </Button>
      <Button as={Link} to="/about-us" variant="ghost">
        About Us
      </Button>
      <Button as={Link} to="/raqmiya-digest" variant="ghost">
        Raqmiya Digest
      </Button>
      <Button as={Link} to="/subscribe" variant="ghost">
        Subscribe
      </Button>
      {/* Additional navigation links can be added here */}
      <Button as={Link} to="/contact" variant="ghost">
        Contact Us
      </Button>
    </HStack>
  );
};

export default Navigation;
