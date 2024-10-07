"use client";

import {
  Box,
  chakra,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
  useColorModeValue,
  Text,
  Flex,
  UnorderedList,
  ListItem,
  Stack,
  Button,
  Image,
  Link,
} from "@chakra-ui/react";

function StatsCard({ title, stat }) {
  return (
    <Stat
    px={{ base: 4, md: 8 }}
    py={"5"}
    shadow={"xl"}
    backgroundColor={'blue.100'}
    border={"1px solid"}
    borderColor={useColorModeValue("gray.800", "gray.500")}
    rounded={"lg"}
    transition="all 0.3s ease"  // Smooth transition for hover effects
    _hover={{
      boxShadow: "lg",          // Add a larger shadow on hover
      transform: "translateY(-5px)", // Move the card slightly upward on hover
    }}
  >
    <StatLabel fontWeight={900} fontSize={"xl"} isTruncated>
      {title}
    </StatLabel>
    <StatNumber fontSize={"2xl"} fontWeight={"medium"}>
      {stat}
    </StatNumber>
  </Stat>
  );
}

export default function BasicStatistics() {
  return (
    <Box
      maxW="9xl"
      mx={"auto"}
      px={{ base: 2, sm: 12, md: 17 }}
      borderRadius={"40%"}
    >
      <chakra.h1
        textAlign={"center"}
        fontSize={{ base: "2xl", md: "4xl" }}
        py={10}
        fontWeight={"bold"}
      >
        IDP - Institution Development Programme
      </chakra.h1>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        marginTop={{ base: "3", sm: "0" }}
      >
        <Text
          fontFamily={"sans-serif"}
          fontWeight={600}
          mx={"auto"}
          fontSize={{ base: "lg", md: "x-large" }}
        >
          Are you seeking advice from an expert on collaborating with your
          institution’s vision and mission?
        </Text>
      </Box>
      <Box maxW="lg" mx="auto" mt={10} p={6} borderColor="gray.300">
        <Image
          alt={"Hero Image"}
          fit={"cover"}
          align={"center"}
          w={"100%"}
          h={"90%"}
          src={"../../../idp.png"}
        />
        <Text fontSize={{ base: "md", lg: "lg" }} color={"gray.900"}>
          Mission 100K is super excited to announce our collaboration with the
          top educators and marketing professionals to provide a sustainable
          revenue model for educational Institutions. While we strive towards
          impacting the lives of 100K people, our aim is also to empower the
          education institutions to be successful in their noble mission of
          providing the best quality education to the students.
        </Text>
      </Box>

      <Box p={5} justifyContent={"center"}>
        <Text fontSize="2xl" fontWeight="bold" mb={4} textAlign="center">
          Our IDS program involves
        </Text>

        <Flex
          justify="center"
          align="center"
          direction="column"
          height="auto"
          bgColor="gray.50"
          p={5}
        >
          <Box
            bg="white"
            borderRadius="lg"
            boxShadow="md"
            p={2}
            maxWidth={{ base: "90%", sm: "80%", md: "600px" }}
            width="full"
          >
            <Text fontSize="xl" fontWeight="bold" mb={4} textAlign="center">
              Key Areas of Focus
            </Text>
            <UnorderedList p={5} spacing={4} pl={2} styleType="disc">
              <ListItem fontSize="lg" fontWeight="semibold">
                Operations
                <UnorderedList spacing={3} pl={5}>
                  <ListItem fontSize="lg">
                    Internal Quality audits – Monthly & Quarterly
                  </ListItem>
                  <ListItem fontSize="lg">
                    Complete setup of Operations team
                  </ListItem>
                  <ListItem fontSize="lg">
                    Efficiency of Service Triangle
                  </ListItem>
                </UnorderedList>
              </ListItem>

              <ListItem fontSize="lg" fontWeight="semibold">
                Training & Development
                <UnorderedList spacing={1} pl={5}>
                  <ListItem fontSize="lg">Training of Admin Team</ListItem>
                  <ListItem fontSize="lg">
                    Training of Bus Drivers and Support Staff
                  </ListItem>
                  <ListItem fontSize="lg">Training of Teachers</ListItem>
                  <ListItem fontSize="lg">
                    Psychometric Assessments of all internal staff
                  </ListItem>
                </UnorderedList>
              </ListItem>

              <ListItem fontSize="lg" fontWeight="semibold">
                Admissions & Marketing
                <UnorderedList spacing={1} pl={5}>
                  <ListItem fontSize="lg">Data Analytics & Insights</ListItem>
                  <ListItem fontSize="lg">Training of Admission Team</ListItem>
                  <ListItem fontSize="lg">
                    Suggesting Admission Related Communication Strategies
                  </ListItem>
                  <ListItem fontSize="lg">
                    Admission Strategies and Audit of Implementation
                  </ListItem>
                  <ListItem fontSize="lg">
                    Branding Strategies Formulation
                  </ListItem>
                  <ListItem fontSize="lg">
                    External Audit of Admissions
                  </ListItem>
                  <ListItem fontSize="lg">
                    Digital Marketing Strategies & Calendar
                  </ListItem>
                  <ListItem fontSize="lg">
                    Quarterly Integrated Marketing Calendar
                  </ListItem>
                </UnorderedList>
              </ListItem>

              <ListItem fontSize="lg" fontWeight="semibold">
                Retention
                <UnorderedList spacing={1} pl={5}>
                  <ListItem fontSize="lg">Parent Satisfaction Survey</ListItem>
                  <ListItem fontSize="lg">
                    Employee Satisfaction Survey
                  </ListItem>
                </UnorderedList>
              </ListItem>

              <ListItem fontSize="lg" fontWeight="semibold">
                External Analysis
                <UnorderedList spacing={1} pl={5}>
                  <ListItem fontSize="lg">Competitor Analysis</ListItem>
                  <ListItem fontSize="lg">
                    External Audits of Entire Service
                  </ListItem>
                  <ListItem fontSize="lg">
                    STP – Segmentation, Targeting & Positioning Strategies
                  </ListItem>
                  <ListItem fontSize="lg">Media and PR Strategies</ListItem>
                </UnorderedList>
              </ListItem>
            </UnorderedList>
          </Box>
        </Flex>
      </Box>

      <chakra.h1
        textAlign={"center"}
        fontSize={{ base: "lg", md: "2xl" }}
        py={10}
        fontWeight={"bold"}
      >
        Please note we help in the complete strategy formulation. Implementation
        of the strategies is the responsibility of the Institution. Audit of the
        strategy implementation will be done for review the progress.
      </chakra.h1>

      <chakra.h1
        textAlign={"center"}
        fontSize={{ base: "lg", md: "2xl" }}
        py={10}
        fontWeight={"bold"}
      >
        Complete package of IDP – Rs.4.5 lakhs per year.
      </chakra.h1>

      <Box maxW="5xl" mx={"auto"} pt={5} px={{ base: 2, sm: 12, md: 17 }}>
  <chakra.h1
    textAlign={"center"}
    fontSize={{ base: "lg", md: "2xl" }}
    py={10}
    fontWeight={"bold"}
  >
    Why choose us
  </chakra.h1>
  <SimpleGrid columns={{ base: 1, md: 1 }} alignItems={'center'} spacing={{ base: 10, lg: 8 }}>
    <StatsCard title={"15+ years of experience in the education industry"} />
    <StatsCard title={"Renowned educators and marketing professionals"} />
    <StatsCard title={"Result-Driven Approach"} />
    <StatsCard title={"Always in Sync with Institution Vision"} />
    <StatsCard title={"Affordable price"} />
  </SimpleGrid>
</Box>

      <Text
        textAlign={"center"}
        fontSize={{ base: "lg", md: "xl" }}
        py={10}
        fontWeight={"bold"}
      >
        Let us begin our collaboration toward a fulfilling Journey
      </Text>
      <Text
        textAlign={"center"}
        fontSize={{ base: "lg", md: "xl" }}
        py={10}
        fontWeight={"bold"}
      >
        Book your Free Consultation with our expert team
      </Text>

      <Box
        py={10}
        display="flex"
        justifyContent="center"
        alignItems="center"
        mt={"20px"}
      >
        <Stack
          spacing={6}
          direction={{ base: "column", sm: "row" }}
          alignItems="center"
        >
          <Link href="/enquiryform">
            <Button
              rounded={"full"}
              size={"lg"}
              fontWeight={"normal"}
              px={6}
              colorScheme={"blue"}
              bg={"blue.400"}
              _hover={{ bg: "blue.600", transform: "scale(1.1)" }}
            >
              Book Your Session
            </Button>
          </Link>
        </Stack>
      </Box>
    </Box>
  );
}
