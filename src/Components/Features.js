import { Box, Image, Text, SimpleGrid, Heading,Flex } from "@chakra-ui/react";

export default function CardGrid() {
  return (
    <SimpleGrid columns={[1, 2, 4]} spacing={8} p={5}>
      {/* Card 1 */}
      <Box textAlign="center">
      <Flex justify="center" align="center" mb={4}>
        <Image
          src="../../../sound.svg"
          alt="Sample Image"
          borderRadius="full"
          height="60px"
          width="60px"
        />
      </Flex>
      <Heading size="md" mb={2}>
        Holistic Approach
      </Heading>
      <Text fontSize="sm" color="gray.600">
        We integrate emotional well-being with career counselling, ensuring
        comprehensive support for personal and professional growth.
      </Text>
    </Box>

      {/* Card 2 */}
      <Box textAlign="center">
      <Flex justify="center" align="center" mb={4}>
        <Image
          src="../../../thumbs-up.svg"
          alt="Sample Image"
          borderRadius="full"
          height="60px"
          width="60px"
        />
        </Flex>
        <Heading size="md" mb={2}>
        Tailored Programs
        </Heading>
        <Text fontSize="sm" color="gray.600">
        Our services are customized to meet the unique needs of each individual, from students to corporate employees.

        </Text>
      </Box>

      {/* Card 3 */}
      <Box textAlign="center">
      <Flex justify="center" align="center" mb={4}>
        <Image
          src="../../../collect.svg"
          alt="Sample Image"
          borderRadius="full"
          height="60px"
          width="60px"
        />
        </Flex>
        <Heading size="md" mb={2}>
        Community Focus
        </Heading>
        <Text fontSize="sm" color="gray.600">
        We emphasize community-based projects and workshops, fostering a supportive environment for collective growth
        </Text>
      </Box>

      {/* Card 4 */}
      <Box textAlign="center">
      <Flex justify="center" align="center" mb={4}>
        <Image
          src="../../../gift.svg"
          alt="Sample Image"
          borderRadius="full"
          height="60px"
          width="60px"
        />
        </Flex>
        <Heading size="md" mb={2}>
        Wide Reach
        </Heading>
        <Text fontSize="sm" color="gray.600">
        Our initiatives span schools, universities, orphanages, and workplaces, making mental health resources accessible to diverse groups across India.

        </Text>
      </Box>
    </SimpleGrid>
  );
}
