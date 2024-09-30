'use client'

import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Icon,
  Stack,
  Text,
  useColorModeValue,
  chakra,
  ListIcon,ListItem,UnorderedList, Link,
} from '@chakra-ui/react'
import { FcAbout, FcAssistant, FcCollaboration, FcDonate, FcManager } from 'react-icons/fc'
const Card = ({ heading, description, icon, href }) => {
  return (
   
    <Box
      maxW={{ base: 'full', md: '275px' }}
      w={'full'}
      
      overflow="hidden"
      p={5}>
      <Stack align={'center'} spacing={2}>
        <Flex
          w={16}
          h={16}
          align={'center'}
          justify={'center'}
          color={'white'}
          rounded={'full'}
          bg={useColorModeValue('gray.100', 'gray.700')}>
          {icon}
        </Flex>
        <Box mt={2}>
          <Heading textAlign="center" size="md">{heading}</Heading>
          <Text mt={1} fontSize={'sm'} textAlign={'center'}>
            {description}
          </Text>
        </Box>
        <Button variant={'link'} colorScheme={'blue'} size={'sm'}>
          Learn more
        </Button>
      </Stack>
    
    </Box>
  )
}

export default function BasicStatistics() {
  return (
    <Box maxW="9xl" mx={'auto'} pt={5} px={{ base: 2, sm: 12, md: 17 }} borderRadius={'40%'} >
      <chakra.h1 textAlign={'center'} fontSize={'4xl'} py={10} fontWeight={'bold'}>
     Corporates /Work Places

      </chakra.h1>
      <Box display="flex"
          flex="1"
          flexDirection="column"
          justifyContent="center"
          marginTop={{ base: '3', sm: '0' }}>
      <Text fontFamily={'san-sarif'} fontSize={'x-large'} fontWeight={'700'} pb={'20px'}>We help businesses create healthier workplaces by offering accessible, stigma-free mental health support. Our services aim to reduce stress, boost employee engagement, and improve overall satisfaction.



</Text></Box>
<Flex flexWrap="wrap" gridGap={8} justify="center">
          <Card
            heading={'Gallup, 2020'}
            icon={<Icon as={FcAssistant} w={25} h={15} />}
            description={'57% of employees experience workplace stress, .'}
            href={'#'}
          />
          <Card
            heading={'Mental Health America, 2021'}
            icon={<Icon as={FcCollaboration} w={10} h={10} />}
            description={'Only 1 in 10 employees seek mental health support.'}
            href={'#'}
          />
          <Card
            heading={'World Health Organization, 2021'}
            icon={<Icon as={FcDonate} w={10} h={10} />}
            description={'40% of employees show no obvious signs of mental distress .'}
            href={'#'}
          />
          <Card
            heading={'Join us'}
            icon={<Icon as={FcManager} w={10} h={10} />}
            description={'Join us to create a mentally healthy workplace!'}
            href={'#'}
          />
          {/* <Card
            heading={'Heading'}
            icon={<Icon as={FcAbout} w={10} h={10} />}
            description={'Lorem ipsum dolor sit amet catetur, adipisicing elit.'}
            href={'#'}
          /> */}
        </Flex>
      <Box p={5}>
      <Text fontSize="2xl" fontWeight="bold" mb={4}>
      What we offer :

      </Text>

      <UnorderedList
        spacing={3}
        pl={5}
        styleType="disc" // You can use 'circle' or 'square' for other bullet styles
      >
        <ListItem fontSize="lg">
        On-demand personalized counselling.

        </ListItem>
        <ListItem fontSize="lg">
        Interactive group sessions.

      
        </ListItem>
        
        <ListItem fontSize="lg">
        Live webinars and expert-led workshops.


        </ListItem>
        <ListItem fontSize="lg">
        self-help resources.

        </ListItem>
        <ListItem fontSize="lg">
        Expert assessments 
        </ListItem>
        <ListItem fontSize="lg">
        Worksheets for goal setting and progress tracking.

        </ListItem>
        <ListItem fontSize="lg">
        Comprehensive reports and detailed insights

        </ListItem>
       
      </UnorderedList>
    </Box>
   
<Stack spacing={{ base: 4, sm: 6 }} direction={{ base: 'column', sm: 'row' }} py={'20pxs'}>
     <Button
              rounded={'full'}
              size={'lg'}
              fontWeight={'normal'}
              px={9}
              colorScheme={'blue'}
              bg={'blue.400'}
              _hover={{ bg: 'blue.600', transform: 'scale(1.1)' }} gap={'10'}
              py={'20px'} >
            <Link  to="/" >
           Book Your Session Now
          </Link>
            </Button>
           
             </Stack>
    </Box>
  )
}
