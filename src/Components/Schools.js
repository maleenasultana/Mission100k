'use client'

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
  Link,
} from '@chakra-ui/react'


export default function BasicStatistics() {
  return (
    <Box maxW="9xl" mx={'auto'} pt={5} px={{ base: 2, sm: 12, md: 17 }} borderRadius={'40%'} >
      <chakra.h1 textAlign={'center'} fontSize={'4xl'} py={10} fontWeight={'bold'}>
      Student Wellbeing Program

      </chakra.h1>
      <Box display="flex"
          flex="1"
          flexDirection="column"
          justifyContent="center"
          marginTop={{ base: '3', sm: '0' }}>
      <Text>We offer professional counselling services at campus aimed at helping students improve their emotional well-being. Our platform connects them with experienced counsellors who guide them in managing stress, academic pressure, behavioural challenges, personal challenges, and students' overall well-being.

We aim to provide a healthy and balanced campus environment where students can thrive emotionally, mentally, and academically.
</Text></Box>
<Flex
      justify="center"
      wrap="wrap" // Makes the circles wrap in smaller screens
      gap={6} // Adds space between the circles
      mt="20px"
    >
<Box borderRadius={'20%'} bg={'white'}  borderBottom="5px solid" 
  borderRight="5px solid" 
  borderColor="grey.100" 
  boxShadow="2px 2px 2px 2px" 
       textAlign={'center'} mt={'20px'} 
       height={{ base: "150px", md: "200px", lg: "250px" }} 
       width={{ base: "150px", md: "200px", lg: "350px" }}
       pt={{ base: "40px", md: "60px", lg: "80px" }}>
       <Text py={'5px'} fontSize={{ base: "12px", md: "16px", lg: "18px" }}>
  <Text as="span" color="red">50%</Text> of mental health conditions begin by age 14 (World Health Organization, 2021)
</Text>
</Box>   
       <Box borderRadius={'20%'} bg={'white'}  borderBottom="5px solid" 
  borderRight="5px solid" 
  borderColor="grey.100" 
  boxShadow="2px 2px 2px 2px" 
       textAlign={'center'} mt={'20px'} 
       height={{ base: "150px", md: "200px", lg: "250px" }} 
       width={{ base: "150px", md: "200px", lg: "350px" }}
       pt={{ base: "40px", md: "60px", lg: "80px" }}>
       <Text fontSize={{ base: "12px", md: "16px", lg: "18px" }}>Students who receive school-based mental health support are <Text as="span" color="#08fb00">60%</Text> less likely to drop out (National Center for School Mental Health, 2020)</Text></Box>

       <Box borderRadius={'20%'} bg={'white'}  borderBottom="5px solid" 
  borderRight="5px solid" 
  borderColor="grey.100" 
  boxShadow="2px 2px 2px 2px" 
       textAlign={'center'} mt={'20px'} 
       height={{ base: "150px", md: "200px", lg: "250px" }} 
       width={{ base: "150px", md: "200px", lg: "350px" }}
       pt={{ base: "40px", md: "60px", lg: "80px" }}>
        <Text fontSize={{ base: "12px", md: "16px", lg: "18px" }}>Students receiving mental health support show a <Text as="span" color="#08fb00">13%</Text>increase in academic success (APA, 2019)</Text></Box>
</Flex>
<Flex
      justify="center"
      wrap="wrap" // Makes the circles wrap in smaller screens
      gap={6} // Adds space between the circles
      mt="20px"
    >
        <Box borderRadius={'20%'} bg={'white'}  borderBottom="5px solid" 
  borderRight="5px solid" 
  borderColor="grey.100" 
  boxShadow="2px 2px 2px 2px" 
       textAlign={'center'} mt={'20px'} 
       height={{ base: "150px", md: "200px", lg: "250px" }} 
       width={{ base: "150px", md: "200px", lg: "350px" }}
       pt={{ base: "40px", md: "60px", lg: "80px" }}>
          <Text fontSize={{ base: "12px", md: "16px", lg: "18px" }}><Text as="span" color="red">1</Text> in 7 adolescents experiences mental health disorders (WHO, 2021)</Text></Box>

          <Box borderRadius={'20%'}  bg={'white'} borderBottom="5px solid" 
  borderRight="5px solid" 
  borderColor="grey.100" 
  boxShadow="2px 2px 2px 2px" 
       textAlign={'center'} mt={'20px'} 
       height={{ base: "150px", md: "200px", lg: "250px" }} 
       width={{ base: "150px", md: "200px", lg: "350px" }}
       pt={{ base: "40px", md: "60px", lg: "80px" }}>
       <Text fontSize={{ base: "12px", md: "16px", lg: "18px" }}>Talk therapy reduces anxiety by <Text as="span" color="#08fb00">70%</Text> in treated individuals (National Institute for Health and Care Excellence, 2020)</Text></Box>
      </Flex>
      <Box p={5}>
      <Text fontSize="2xl" fontWeight="bold" mb={4}>
        We offer a holistic approach to student well-being:
      </Text>

      <UnorderedList
        spacing={3}
        pl={5}
        styleType="disc" // You can use 'circle' or 'square' for other bullet styles
      >
        <ListItem fontSize="lg">
          One-on-one counseling sessions for personal and academic support.
        </ListItem>
        <ListItem fontSize="lg">
          Group workshops on stress management and emotional skills.
        </ListItem>
        <ListItem fontSize="lg">
          Roleplays for practical problem-solving.
        </ListItem>
        <ListItem fontSize="lg">
          Assessments to evaluate emotional well-being and progress.
        </ListItem>
        <ListItem fontSize="lg">
          Worksheets to help students set goals and track their growth.
        </ListItem>
        <ListItem fontSize="lg">
          Reference materials for continuous learning.
        </ListItem>
        <ListItem fontSize="lg">
          Self-help tools to promote independent development.
        </ListItem>
        <ListItem fontSize="lg">
          Career counseling for future guidance.
        </ListItem>
        <ListItem fontSize="lg">
          Parental guidance sessions to support overall well-being.
        </ListItem>
      </UnorderedList>
    </Box>
    <chakra.h1 textAlign={'center'} fontSize={'4xl'} py={10} fontWeight={'bold'}>
    Early Childhood Well-being Support for pre-school
      </chakra.h1>
      <Text>We believe that emotional well-being starts early. Our program for preschool children focuses on creating a nurturing environment where kids can develop emotional skills, manage behaviour, and build resilience.
We also offer guidance for parents, equipping them with the tools to support their child's emotional growth, ensuring a strong foundation for their overall well-being.
</Text>
<Stack spacing={{ base: 4, sm: 6 }} direction={{ base: 'column', sm: 'row' }} py={'20pxs'}>
    <Link href="/enquiryform">
     <Button
              rounded={'full'}
              size={'lg'}
              fontWeight={'normal'}
              px={9}
              colorScheme={'blue'}
              bg={'blue.400'}
              _hover={{ bg: 'blue.600', transform: 'scale(1.1)' }} gap={'10'}
              py={'20px'} >
            Book Your Session Now
            </Button>
            </Link>
             </Stack>
    </Box>
  )
}
