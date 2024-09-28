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
    <Container maxW={'7xl'} p="12">
      <Heading as="h1">Mission100K</Heading>
      <Box
        marginTop={{ base: '1', sm: '5' }}
        display="flex"
        flexDirection={{ base: 'column', sm: 'row' }}
        justifyContent="space-between">
        <Box
          display="flex"
          flex="1"
          marginRight="3"
          position="relative"
          alignItems="center">
          <Box
            width={{ base: '100%', sm: '85%' }}
            zIndex="2"
            marginLeft={{ base: '0', sm: '5%' }}
            marginTop="5%">
            <Box textDecoration="none" _hover={{ textDecoration: 'none' }}>
              <Image
                borderRadius="lg"
                src={
                  '../../../logo.png'
                }
                alt="logo image"
                // objectFit="contain"
                width={"250px"}
                height={"250"}
                justifyContent={"center"}
                alignItems={"center"}
              />
            </Box>
          </Box>
          <Box zIndex="1" width="100%" position="absolute" height="100%">
            <Box
              bgGradient={useColorModeValue(
                'radial(orange.600 1px, transparent 1px)',
                'radial(orange.300 1px, transparent 1px)',
              )}
              backgroundSize="20px 20px"
              opacity="0.4"
              height="100%"
            />
          </Box>
        </Box>
        <Box
          display="flex"
          flex="1"
          flexDirection="column"
          justifyContent="center"
          marginTop={{ base: '3', sm: '0' }}>
          <BlogTags tags={['Psychology', 'Well-being']} />
          <Heading marginTop="1">
            <Text textDecoration="none" _hover={{ textDecoration: 'none' }} color={'blue.500'}>
             Enlighten,Enhance,Empower
            </Text>
          </Heading>
          <Text
            as="p"
            marginTop="2"
            color={useColorModeValue('gray.700', 'gray.200')}
            fontSize="lg">
           Mission100k is a trust dedicated to enlightening individuals by spreading knowledge and awareness on critical social issues, aiming to create a more informed and responsible society. The trust seeks to enhance the quality of life for underprivileged communities by providing resources, education, and opportunities that foster personal and communal growth. Ultimately, Mission100k's goal is to empower people to overcome challenges, unlock their full potential, and contribute meaningfully to the world around them.
          </Text>
          {/* <BlogAuthor name="John Doe" date={new Date('2021-04-06T19:01:27Z')} /> */}
        </Box>
      </Box>
     
      <VStack paddingTop="40px" spacing="2" alignItems="flex-start">
        <Heading as="h2" color={'blue.500'}>About Us</Heading>
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
        </Text>
      </VStack>
    </Container>
  )
}

export default ArticleList
