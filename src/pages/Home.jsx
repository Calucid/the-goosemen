import { Box, Button, Flex, Heading, Image, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Box w="100%" minH="100vh" bg="gray.50" p={4}>
      {/* Hero Section */}
      <Flex direction={{ base: "column", md: "row" }} align="center" justify="center" py={10}>
        <Box flex="1" textAlign={{ base: "center", md: "left" }} p={4}>
          <Heading as="h1" size="2xl" mb={4} color="gray.800">
            Welcome to The Goosemen
          </Heading>
          <Text fontSize="lg" color="gray.600">
            Serving the finest salads, hoagies, soups, and deli sandwiches in Bethlehem, PA.
          </Text>
          <Stack direction={{ base: "column", md: "row" }} spacing={4} mt={6}>
            <Button as={Link} to="/menu" colorScheme="orange" size="lg">
              View Menu
            </Button>
            <Button as={Link} to="/visit" colorScheme="gray" size="lg">
              Visit Us
            </Button>
          </Stack>
        </Box>
        <Box flex="1" display="flex" justifyContent="center">
          <Image
            src="http://stock.calucid.com/fetch/calucid/the-goosemen/deli-sandwich"
            alt="Delicious Sandwich"
            width="500px"
            height="350px"
            borderRadius="md"
            objectFit="cover"
          />
        </Box>
      </Flex>

      {/* Featured Items */}
      <Box textAlign="center" py={10}>
        <Heading as="h2" size="xl" color="gray.800" mb={6}>
          Our Specialties
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6} maxW="1200px" mx="auto">
          <Box bg="white" p={4} boxShadow="md" borderRadius="md">
            <Image
              src="http://stock.calucid.com/fetch/calucid/the-goosemen/fresh-salad"
              alt="Fresh Salad"
              width="100%"
              height="250px"
              borderRadius="md"
              objectFit="cover"
            />
            <Text fontSize="lg" fontWeight="bold" mt={3}>
              Fresh Salads
            </Text>
          </Box>
          <Box bg="white" p={4} boxShadow="md" borderRadius="md">
            <Image
              src="http://stock.calucid.com/fetch/calucid/the-goosemen/hot-soup"
              alt="Hot Soup"
              width="100%"
              height="250px"
              borderRadius="md"
              objectFit="cover"
            />
            <Text fontSize="lg" fontWeight="bold" mt={3}>
              Hot Soups
            </Text>
          </Box>
          <Box bg="white" p={4} boxShadow="md" borderRadius="md">
            <Image
              src="http://stock.calucid.com/fetch/calucid/the-goosemen/hoagie"
              alt="Hoagie"
              width="100%"
              height="250px"
              borderRadius="md"
              objectFit="cover"
            />
            <Text fontSize="lg" fontWeight="bold" mt={3}>
              Delicious Hoagies
            </Text>
          </Box>
        </SimpleGrid>
      </Box>

      {/* Call to Action */}
      <Box textAlign="center" py={10} bg="orange.100" borderRadius="md" p={6} mt={10}>
        <Heading as="h2" size="xl" color="gray.800">
          Visit Us Today!
        </Heading>
        <Text fontSize="lg" color="gray.700" mt={2}>
          102 W 4th St, Bethlehem, PA 18015, USA
        </Text>
        <Text fontSize="lg" color="gray.700">Call us: (610) 868-0176</Text>
        <Button as={Link} to="/visit" colorScheme="orange" size="lg" mt={4}>
          Get Directions
        </Button>
      </Box>
    </Box>
  );
};

export default Home;