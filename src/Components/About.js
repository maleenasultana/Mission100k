'use client'

import {
  Box,
  Heading,
  Image,
  Text,
  Divider,
  HStack,
  Tag,
  Wrap,
  WrapItem,
  useColorModeValue,
  Container,
  VStack,
  chakra,
} from '@chakra-ui/react'

const BlogTags = (props) => {
  const { marginTop = 0, tags } = props

  return (
    <HStack spacing={2} marginTop={marginTop}>
      {tags.map((tag) => {
        return (
          <Tag size={'md'} variant="solid" colorScheme="orange" key={tag}>
            {tag}
          </Tag>
        )
      })}
    </HStack>
  )
}

const BlogAuthor = (props) => {
  return (
    <HStack marginTop="2" spacing="2" display="flex" alignItems="center">
      <Image
        borderRadius="full"
        boxSize="40px"
        src="https://100k-faces.glitch.me/random-image"
        alt={`Avatar of ${props.name}`}
      />
      <Text fontWeight="medium">{props.name}</Text>
      <Text>—</Text>
      <Text>{new Date(props.date).toLocaleDateString()}</Text>
    </HStack>
  )
}

const ArticleList = () => {
  return (
    <Container maxW={'4xl'} p="12">
      
     
      <Box display="flex" alignItems="center" >
  <Image src="../../../logo1.png" alt="logo1" height="90px" width="160px" />
  <Image src="../../../logo2.png" alt="logo2" height="160px" width="250px" px={8} />
  <Image src="../../../logo3.png" alt="logo3" height="160px" width="250px" />
  <Image src="../../../logo4.png" alt="logo4" height="180px" width="250px" pt={5} />
</Box>

     
      <VStack paddingTop="20px" spacing="2" alignItems="flex-start">
      
        <Text as="p" fontSize="lg">
        Mission 100K is a project that aims to improve the emotional and occupational health of individuals in India. Understanding that mental health significantly influences an individual's ability to advance. We want to make emotional well-being accessible to every individual in our Country.

        </Text>
        <chakra.h1
        textAlign={"center"}
        fontSize={"2xl"}
        py={3}
        fontWeight={"bold"}
        fontFamily="Amaranth, sans-serif"
      >
        <Text color={"blue.500"}>Our Vision</Text> </chakra.h1>
        <Text as="p" fontSize="lg">
        Creating an environment across India that enhances emotional well-being & career opportunities for every individual that helps them reach their personal & professional goals amidst the opportunities & resources.

        </Text>
        <chakra.h1
        textAlign={"center"}
        fontSize={"2xl"}
        py={3}
        fontWeight={"bold"}
        fontFamily="Amaranth, sans-serif"
      >
        <Text color={"blue.500"}>Our Mission</Text> </chakra.h1>
        <Text as="p" fontSize="lg">
        Mission 100K focuses on delivering the required emotional well-being and career counselling to 100,000 more people. We want to create a comprehensive environment in which mental health awareness is fostered and people's critical practical skills and career directions are learnt. Our approach is tailored to each client, with a focus on instilling self-confidence, resilience, and tenacity through counselling, workshops, and Individual-community-based projects. 
        </Text> <br/><br/>
        <Text textAlign={'center'} fontSize="30px" fontWeight="500" color={'grey.500'} fontFamily={'Exo, sans-serif'}>JOIN US IN THE JOURNEY OF ENLIGHTEN MINDS, ENHANCE LIVES AND EMPOMER FUTURES. BE A PART OF MISSION 100K AND HELP CREATE A MORE EMOTIONALLY RESILIENT AND SUCCESSFUL INDIA.</Text>
      </VStack>
    </Container>
  )
}

export default ArticleList
