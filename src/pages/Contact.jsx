import { Box, Button, Container, FormControl, FormLabel, Input, Textarea, VStack, Heading, Text, Link, HStack, Icon } from "@chakra-ui/react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link as RouterLink } from "react-router-dom";

const Contact = () => {
  return (
    <Container maxW="container.md" py={10}>
      <VStack spacing={6} align="stretch">
        <Heading as="h1" size="xl" textAlign="center">Contact Us</Heading>

        <Box>
          <img 
            src="http://stock.calucid.com/fetch/calucid/the-goosemen/restaurant-exterior" 
            alt="Restaurant Exterior" 
            width="100%" 
            height="250px"
            style={{ objectFit: "cover", borderRadius: "8px" }}
          />
        </Box>

        <Box textAlign="center">
          <Text fontSize="lg" fontWeight="bold">The Goosemen</Text>
          <Text>102 W 4th St, Bethlehem, PA 18015, USA</Text>
          <Text>Phone: <Link href="tel:+16108680176">(610) 868-0176</Link></Text>
          <Text>Email: <Link href="mailto:contact@thegoosemen.com">contact@thegoosemen.com</Link></Text>
        </Box>

        <HStack spacing={4} justify="center">
          <Link href="https://facebook.com/thegoosemen" isExternal>
            <Icon as={FaFacebook} boxSize={6} />
          </Link>
          <Link href="https://instagram.com/thegoosemen" isExternal>
            <Icon as={FaInstagram} boxSize={6} />
          </Link>
          <Link href="https://twitter.com/thegoosemen" isExternal>
            <Icon as={FaTwitter} boxSize={6} />
          </Link>
        </HStack>

        <Box as="form">
          <VStack spacing={4}>
            <FormControl isRequired>
              <FormLabel>Name</FormLabel>
              <Input placeholder="Your Name" />
            </FormControl>

            <FormControl isRequired>
              <FormLabel>Email</FormLabel>
              <Input type="email" placeholder="Your Email" />
            </FormControl>

            <FormControl isRequired>
              <FormLabel>Message</FormLabel>
              <Textarea placeholder="Your Message" />
            </FormControl>

            <Button colorScheme="blue" type="submit">Send Message</Button>
          </VStack>
        </Box>

        <HStack justify="center" spacing={6} mt={6}>
          <Link as={RouterLink} to="/">Home</Link>
          <Link as={RouterLink} to="/about">About</Link>
          <Link as={RouterLink} to="/menu">Menu</Link>
          <Link as={RouterLink} to="/visit">Visit</Link>
        </HStack>
      </VStack>
    </Container>
  );
};

export default Contact;