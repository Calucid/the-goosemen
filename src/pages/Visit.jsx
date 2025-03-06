import { Box, Text, Image, VStack, HStack, Link, Button, Divider } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Visit = () => {
  return (
    <Box maxW="1200px" mx="auto" p={4}>
      <VStack spacing={6} align="stretch">
        <Box textAlign="center">
          <Text fontSize="4xl" fontWeight="bold">Visit The Goosemen</Text>
          <Text fontSize="lg" color="gray.600">Experience the best deli sandwiches, hoagies, and soups in Bethlehem, PA.</Text>
        </Box>

        <Image
          src="http://stock.calucid.com/fetch/calucid/the-goosemen/restaurant exterior"
          alt="The Goosemen Exterior"
          width="100%"
          height="300px"
          objectFit="cover"
          borderRadius="md"
        />

        <Box textAlign="center">
          <Text fontSize="2xl" fontWeight="bold">Our Location</Text>
          <Text fontSize="lg">102 W 4th St, Bethlehem, PA 18015, USA</Text>
          <Text fontSize="lg">Phone: (610) 868-0176</Text>
        </Box>

        <Box>
          <iframe
            title="Google Maps"
            width="100%"
            height="300px"
            style={{ border: 0, borderRadius: "8px" }}
            loading="lazy"
            allowFullScreen
            src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyCZfNxROLqjeHORHMSc28B1mvxbvKHlukU&q=102+W+4th+St,+Bethlehem,+PA+18015`}
          ></iframe>
        </Box>

        <Box textAlign="center">
          <Text fontSize="2xl" fontWeight="bold">Hours of Operation</Text>
          <VStack spacing={1}>
            <Text fontSize="lg">Monday - Friday: 10:00 AM - 8:00 PM</Text>
            <Text fontSize="lg">Saturday: 11:00 AM - 9:00 PM</Text>
            <Text fontSize="lg">Sunday: Closed</Text>
          </VStack>
        </Box>

        <Divider />

        <Box textAlign="center">
          <Text fontSize="2xl" fontWeight="bold">Explore Our Menu</Text>
          <Image
            src="http://stock.calucid.com/fetch/calucid/the-goosemen/deli sandwiches"
            alt="Deli Sandwiches"
            width="100%"
            height="250px"
            objectFit="cover"
            borderRadius="md"
          />
          <Button as={RouterLink} to="/menu" colorScheme="teal" mt={4}>
            View Menu
          </Button>
        </Box>

        <Divider />

        <HStack justify="center" spacing={4}>
          <Button as={RouterLink} to="/" colorScheme="gray">
            Home
          </Button>
          <Button as={RouterLink} to="/about" colorScheme="gray">
            About
          </Button>
          <Button as={RouterLink} to="/contact" colorScheme="gray">
            Contact
          </Button>
        </HStack>
      </VStack>
    </Box>
  );
};

export default Visit;