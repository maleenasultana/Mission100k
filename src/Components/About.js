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
      
     
       
   
     
      <VStack paddingTop="40px" spacing="2" alignItems="flex-start">
      
        <Text as="p" fontSize="lg">
        Mission 100K is a project that aims to improve the emotional and occupational health of individuals in India. Understanding that mental health significantly influences an individual's ability to advance. We want to make emotional well-being accessible to every individual in our Country.

        </Text>
        <Heading as="h2" color={'blue.500'}>Our Vision</Heading>
        <Text as="p" fontSize="lg">
        Creating an environment across India that enhances emotional well-being & career opportunities for every individual that helps them reach their personal & professional goals amidst the opportunities & resources.

        </Text>
        <Heading as="h2" color={'blue.500'}>Our Mission</Heading>
        <Text as="p" fontSize="lg">
        Mission 100K focuses on delivering the required emotional well-being and career counselling to 100,000 more people. We want to create a comprehensive environment in which mental health awareness is fostered and people's critical practical skills and career directions are learnt. Our approach is tailored to each client, with a focus on instilling self-confidence, resilience, and tenacity through counselling, workshops, and Individual-community-based projects. 
        </Text> <br/><br/>
        <Heading as="h2" color={'grey.500'}>JOIN US IN THE JOURNEY OF ENLIGHTEN MINDS, ENHANCE LIVES AND EMPOMER FUTURES. BE A PART OF MISSION 100K AND HELP CREATE A MORE EMOTIONALLY RESILIENT AND SUCCESSFUL INDIA.</Heading>
      </VStack>
    </Container>
  )
}

export default ArticleList
