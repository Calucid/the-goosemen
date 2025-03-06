import { Box, Heading, Text, Image, VStack, HStack, Link, Container } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const About = () => {
  return (
    <Container maxW="container.lg" py={10}>
      <VStack spacing={8} align="stretch">
        <Box textAlign="center">
          <Heading as="h1" size="2xl">About The Goosemen</Heading>
          <Text fontSize="lg" mt={4}>
            Welcome to The Goosemen, your go-to destination for fresh salads, hearty hoagies, delicious soups, and classic deli sandwiches.
            Located in the heart of Bethlehem, PA, we take pride in serving high-quality, flavorful meals made with the freshest ingredients.
          </Text>
        </Box>

        <Image 
          src="http://stock.calucid.com/fetch/calucid/the-goosemen/restaurant-interior" 
          alt="Restaurant Interior" 
          width="100%" 
          height="300px" 
          objectFit="cover"
          borderRadius="md"
        />

        <Box>
          <Heading as="h2" size="xl" mb={4}>Our Story</Heading>
          <Text fontSize="md">
            The Goosemen was founded with a simple mission: to provide our community with delicious, high-quality food in a welcoming atmosphere.
            With a menu inspired by classic deli favorites and fresh ingredients, we’ve been serving up satisfaction one bite at a time.
          </Text>
        </Box>

        <HStack spacing={4} flexWrap="wrap" justify="center">
          <Image 
            src="http://stock.calucid.com/fetch/calucid/the-goosemen/fresh-salad" 
            alt="Fresh Salad" 
            width="250px" 
            height="200px" 
            objectFit="cover"
            borderRadius="md"
          />
          <Image 
            src="http://stock.calucid.com/fetch/calucid/the-goosemen/deli-sandwich" 
            alt="Deli Sandwich" 
            width="250px" 
            height="200px" 
            objectFit="cover"
            borderRadius="md"
          />
          <Image 
            src="http://stock.calucid.com/fetch/calucid/the-goosemen/hot-soup" 
            alt="Hot Soup" 
            width="250px" 
            height="200px" 
            objectFit="cover"
            borderRadius="md"
          />
        </HStack>

        <Box textAlign="center">
          <Heading as="h2" size="lg" mb={2}>Visit Us</Heading>
          <Text fontSize="md">
            102 W 4th St, Bethlehem, PA 18015, USA <br />
            Call us: <Link href="tel:+16108680176" color="teal.500">(610) 868-0176</Link>
          </Text>
        </Box>

        <Box textAlign="center">
          <HStack spacing={6} justify="center">
            <Link as={RouterLink} to="/" fontSize="lg" color="teal.500">Home</Link>
            <Link as={RouterLink} to="/menu" fontSize="lg" color="teal.500">Menu</Link>
            <Link as={RouterLink} to="/visit" fontSize="lg" color="teal.500">Visit</Link>
            <Link as={RouterLink} to="/contact" fontSize="lg" color="teal.500">Contact</Link>
          </HStack>
        </Box>
      </VStack>
    </Container>
  );
};

export default About;