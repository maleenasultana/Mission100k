"use client";

import {
  Box,
  Image,
  Text,
  VStack,
  chakra,
  Container,
  Flex,
} from "@chakra-ui/react";

const ArticleList = () => {
  return (
    <Container maxW={"5xl"} p="12">
      {/* Responsive Flex container for images */}
      <Flex
        direction={{ base: "column", md: "row" }} // Column on small screens, row on larger
        alignItems="center"
        alignContent={'center'}
        wrap="wrap"
        gap={3} // Gap between images
      >
        <Image
          src="../../../lo-removebg.png"
          alt="logo1"
          height={{ base: "80px", md: "90px" }} // Adjust sizes for responsiveness
          width={{ base: "120px", md: "160px" }}
        
        />
        <Image
          src="../../../logo2.png"
          alt="logo2"
          height={{ base: "120px", md: "160px" }}
          width={{ base: "150px", md: "180px" }}
        />
        <Image
          src="../../../logo3.png"
          alt="logo3"
          height={{ base: "120px", md: "160px" }}
          width={{ base: "150px", md: "180px" }}
        />
        <Image
          src="../../../logo4.png"
          alt="logo4"
          height={{ base: "120px", md: "160px" }}
          width={{ base: "150px", md: "180px" }}
        />
      </Flex>

      <VStack paddingTop="20px" spacing="2" alignItems="flex-start">
        <Text as="p" fontSize="lg">
          Mission 100K is a project that aims to improve the emotional and
          occupational health of individuals in India. Understanding that mental
          health significantly influences an individual's ability to advance. We
          want to make emotional well-being accessible to every individual in
          our Country.
        </Text>
        <chakra.h1
          textAlign={"center"}
          fontSize={"2xl"}
          py={3}
          fontWeight={"bold"}
          fontFamily="Amaranth, sans-serif"
        >
          <Text color={"blue.500"}>Our Vision</Text>{" "}
        </chakra.h1>
        <Text as="p" fontSize="lg">
          Creating an environment across India that enhances emotional
          well-being & career opportunities for every individual that helps them
          reach their personal & professional goals amidst the opportunities &
          resources.
        </Text>
        <chakra.h1
          textAlign={"center"}
          fontSize={"2xl"}
          py={3}
          fontWeight={"bold"}
          fontFamily="Amaranth, sans-serif"
        >
          <Text color={"blue.500"}>Our Mission</Text>{" "}
        </chakra.h1>
        <Text as="p" fontSize="lg">
          Mission 100K focuses on delivering the required emotional well-being
          and career counselling to 100,000 more people. We want to create a
          comprehensive environment in which mental health awareness is fostered
          and people's critical practical skills and career directions are
          learnt. Our approach is tailored to each client, with a focus on
          instilling self-confidence, resilience, and tenacity through
          counselling, workshops, and Individual-community-based projects.
        </Text>{" "}
        <br />
        <br />
        <Text
          textAlign={"center"}
          fontSize="25px"
          fontWeight="500"
          color={"grey.500"}
          fontFamily={"Exo, sans-serif"}
        >
          JOIN US IN THE JOURNEY OF ENLIGHTEN MINDS, ENHANCE LIVES AND EMPOWER
          FUTURES. BE A PART OF MISSION 100K AND HELP CREATE A MORE EMOTIONALLY
          RESILIENT AND SUCCESSFUL INDIA.
        </Text>
      </VStack>
    </Container>
  );
};

export default ArticleList;
