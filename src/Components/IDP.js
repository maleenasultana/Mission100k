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
      border={"1px solid"}
      borderColor={useColorModeValue("gray.800", "gray.500")}
      rounded={"lg"}
    >
      <StatLabel fontWeight={"medium"} isTruncated>
        {title}
      </StatLabel>
      <StatNumber fontSize={"2xl"} fontWeight={"medium"}>
        {stat}
      </StatNumber>
    </Stat>
  );
}
export default function BasicStatistics({ title, stat }) {
  return (
    <Box
      maxW="9xl"
      mx={"auto"}
      pt={5}
      px={{ base: 2, sm: 12, md: 17 }}
      borderRadius={"40%"}
    >
      <chakra.h1
        textAlign={"center"}
        fontSize={"4xl"}
        py={10}
        fontWeight={"bold"}
      >
        IDP- Institution Development Programme
      </chakra.h1>
      <Box
        display="flex"
        flex="1"
        flexDirection="column"
        justifyContent="center"
        marginTop={{ base: "3", sm: "0" }}
      >
        <Text
          fontFamily={"sans-serif"}
          fontWeight={600}
          mx={"auto"}
          fontSize={"x-large"}
        >
         Are you seeking advice from an expert on collaborating with your institution’s vision and mission?

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
          revenue model for educational Institutions While we strive towards
          impacting the lives of 100K people, our aim is also to empower the
          education institutions to be successful in their noble mission of
          providing the best quality education to the students
        </Text>
      </Box>

      <Box p={5} justifyContent={'center'}>
        <Text fontSize="2xl" fontWeight="bold" mb={4}>
          Our IDS program involves 
        </Text>

        <UnorderedList
          spacing={3}
          pl={5}
          styleType="disc" // You can use 'circle' or 'square' for other bullet styles
        >
          <ListItem fontSize="lg">
          Operations
          </ListItem>
          <UnorderedList>
          <ListItem fontSize="lg">Internal Quality audits–Monthly & Quarterly</ListItem>
          <ListItem fontSize="lg">Complete set up of Operations team
          </ListItem>
          <ListItem fontSize="lg">Efficiency of Service Triangle
          </ListItem>
          </UnorderedList>

          <ListItem fontSize="lg">
           Training & Development

          </ListItem>
          <UnorderedList>
          <ListItem fontSize="lg">Training of Admin Team</ListItem>
          <ListItem fontSize="lg">Training of Bus drivers and Support Staff

          </ListItem>
          <ListItem fontSize="lg">Training of Teachers

          </ListItem>
          <ListItem fontSize="lg">Psychometric Assessments of all internal staff


          </ListItem>
          </UnorderedList>

          <ListItem fontSize="lg">Admissions & Marketing
</ListItem>
<UnorderedList>
  <ListItem>Data Analytics & Insights
  </ListItem>
  <ListItem>Training of Admission team
  </ListItem>
  <ListItem>Suggesting admission related communication strategies
  </ListItem>
  <ListItem>Admission strategies and audit of implementation
  </ListItem>
  <ListItem>Branding strategies formulation
  </ListItem>
  <ListItem>External Audit of admissions
  </ListItem>
  <ListItem>Digital marketing strategies & calendar
  </ListItem>
  <ListItem>Quarterly Integrated marketing calendar
  </ListItem>
</UnorderedList>

          <ListItem fontSize="lg">
          Retention
          </ListItem>
          <UnorderedList>
            <ListItem>Parent Satisfaction Survey
            </ListItem>
            <ListItem>Employee Satisfaction Survey</ListItem>
          </UnorderedList>

          <ListItem fontSize="lg">
External Analysis
</ListItem>
<UnorderedList>
  <ListItem>Competitor analysis
  </ListItem>
  <ListItem fontSize="lg">External Audits of entire service</ListItem>
          <ListItem fontSize="lg">
          STP–Segmentation, Targeting & Positioning Strategies

          </ListItem>
          <ListItem>Media and PR strategies
          </ListItem>
</UnorderedList>
          
        </UnorderedList>
      </Box>
      <chakra.h1
        textAlign={"center"}
        fontSize={"4xl"}
        py={10}
        fontWeight={"bold"}
      >
        Please note we help in the complete strategy formulation. Implementation of the strategies is the responsibility of the Institution. Audit of the strategy implementation will be done for review the progress


      </chakra.h1>
      <chakra.h1
        textAlign={"center"}
        fontSize={"4xl"}
        py={10}
        fontWeight={"bold"}
      >
       Complete package of IDP–Rs.4.5lakhs per 1 year



      </chakra.h1>

      <Box maxW="6xl" mx={"auto"} pt={5} px={{ base: 2, sm: 12, md: 17 }}>
        <chakra.h1
          textAlign={"center"}
          fontSize={"4xl"}
          py={10}
          fontWeight={"bold"}
        >
          Why choose us
        </chakra.h1>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }}>
          <StatsCard
            title={"15+years of experience In education industry   "}
            
          />
          <StatsCard title={"Renowned educators And Marketing professionals"} />
          <StatsCard title={"Result-Driven Approach"}  />
          <StatsCard title={"Always in Sync with Institution Vision  "} />
          <StatsCard title={"Affordable price"}  />
        </SimpleGrid>
        
      </Box>
      <Text textAlign={"center"} fontSize={"xl"} py={10} fontWeight={"bold"}>
        {" "}
        Let us begin our collaboration toward a fulfilling Journey
      </Text>
      <Text textAlign={"center"} fontSize={"xl"} py={10} fontWeight={"bold"}>
        Book your Free Consultation with our expert team
      </Text>

      <Box py={10} display="flex" justifyContent="center" alignItems="center" mt={'20px'}>
  <Stack spacing={6} direction={{ base: "column", sm: "row" }} alignItems="center">
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
