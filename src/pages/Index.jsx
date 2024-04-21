// Complete the Index page component for remoteearningshub.com
import { Box, Container, Heading, SimpleGrid, Text, Image, Button, VStack, Icon } from "@chakra-ui/react";
import { FaMoneyBillWave, FaLaptop, FaMobileAlt, FaChartLine } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <VStack spacing={8} as="header">
        <Image borderRadius="full" boxSize="150px" src="https://images.unsplash.com/photo-1498661694102-0a3793edbe74?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxoYXBweSUyMHdvbWFuJTIwdXNpbmclMjBsYXB0b3B8ZW58MHx8fHwxNzEzNzE1NjU4fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Happy Woman" mb={4} />
        <Heading as="h1" size="xl" textAlign="center">
          Welcome to Remote Earnings Hub
        </Heading>
        <Text fontSize="lg" textAlign="center">
          Discover the best tools and apps to earn money online, right from the comfort of your home!
        </Text>
      </VStack>

      <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10} py={10}>
        <ToolCard icon={FaLaptop} title="Freelancing Platforms" description="Explore top freelancing websites to find jobs that suit your skills." />
        <ToolCard icon={FaMobileAlt} title="Survey Apps" description="Earn by sharing your opinions through mobile survey applications." />
        <ToolCard icon={FaMoneyBillWave} title="Cashback Apps" description="Get money back on your purchases with the best cashback apps available." />
        <ToolCard icon={FaChartLine} title="Investment Tools" description="Invest smartly with user-friendly apps and grow your wealth over time." />
      </SimpleGrid>

      <Box textAlign="center" py={10}>
        <Button colorScheme="pink" size="lg">
          Join Us Today
        </Button>
      </Box>
    </Container>
  );
};

const ToolCard = ({ icon, title, description }) => (
  <VStack p={5} boxShadow="md" border="1px" borderColor="gray.200" borderRadius="lg" align="center" bg="white">
    <Icon as={icon} w={10} h={10} color="pink.400" />
    <Heading as="h3" size="md" fontWeight="bold" my={2}>
      {title}
    </Heading>
    <Text textAlign="center" fontSize="sm">
      {description}
    </Text>
  </VStack>
);

export default Index;
