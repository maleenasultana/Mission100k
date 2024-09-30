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
      Empowerment and Wellbeing Initiative

      </chakra.h1>
      <Box display="flex"
          flex="1"
          flexDirection="column"
          justifyContent="center"
          marginTop={{ base: '3', sm: '0' }}>
      <Text>We are committed to promoting emotional well-being for every student, regardless of their background. Our professional counselling services are designed to support students in orphanages and government schools, connecting them with experienced counsellors who guide stress management, personal challenges, and overall mental health.

Our mission is to ensure that all students have access to the well-being services they deserve, creating an inclusive environment where everyone can thrive emotionally, mentally, and academically.

</Text></Box>
<Flex
      justify="center"
      wrap="wrap" // Makes the circles wrap in smaller screens
      gap={6} // Adds space between the circles
      mt="20px"
    >
<Box borderRadius={'50%'} bg={'gray.100'}  borderBottom="5px solid" 
  borderRight="5px solid" 
  borderColor="grey.100" 
  boxShadow="2px 2px 2px 2px" 
       textAlign={'center'} mt={'20px'} 
       height={{ base: "150px", md: "200px", lg: "250px" }} 
       width={{ base: "150px", md: "200px", lg: "350px" }}
       pt={{ base: "40px", md: "60px", lg: "80px" }}>

       <Text py={'5px'} fontSize={{ base: "12px", md: "16px", lg: "18px" }}>
Over <Text as="span" color="red">50%</Text> of children in <br/> orphanages experience mental health <br/>issues (Children's Rights Alliance, 2021)


       </Text></Box>   
       <Box borderRadius={'50%'}  bg={'gray.100'}   borderBottom="5px solid" 
  borderRight="5px solid" 
  borderColor="grey.100" 
  boxShadow="2px 2px 2px 2px" 
       textAlign={'center'} mt={'20px'} 
       height={{ base: "150px", md: "200px", lg: "250px" }} 
       width={{ base: "150px", md: "200px", lg: "350px" }}
       pt={{ base: "40px", md: "60px", lg: "80px" }}>
       <Text fontSize={{ base: "12px", md: "16px", lg: "18px" }}>Students in low-income schools are <Text as="span" color="green.300">50%</Text> more likely to report emotional distress (National Center for Children in Poverty, 2020)
       </Text></Box>

       <Box borderRadius={'50%'}  bg={'gray.100'}   borderBottom="5px solid" 
  borderRight="5px solid" 
  borderColor="grey.100" 
  boxShadow="2px 2px 2px 2px" 
       textAlign={'center'} mt={'20px'} 
       height={{ base: "150px", md: "200px", lg: "250px" }} 
       width={{ base: "150px", md: "200px", lg: "350px" }}
       pt={{ base: "40px", md: "60px", lg: "80px" }}>
        <Text fontSize={{ base: "12px", md: "16px", lg: "18px" }}>Children with access to mental health services show improved academic performance by 20% (The Child Mind Institute, 2019)
        </Text></Box>
</Flex>
<Flex
      justify="center"
      wrap="wrap" // Makes the circles wrap in smaller screens
      gap={6} // Adds space between the circles
      mt="20px"
    >
        <Box borderRadius={'50%'} bg={'gray.100'}  borderBottom="5px solid" 
  borderRight="5px solid" 
  borderColor="grey.100" 
  boxShadow="2px 2px 2px 2px" 
       textAlign={'center'} mt={'20px'} 
       height={{ base: "150px", md: "200px", lg: "250px" }} 
       width={{ base: "150px", md: "200px", lg: "350px" }}
       pt={{ base: "40px", md: "60px", lg: "80px" }}>
          <Text fontSize={{ base: "12px", md: "16px", lg: "18px" }}>Approximately 1 in 5 students in low-income areas experience significant mental health challenges (SAMHSA, 2021)
          </Text></Box>

          <Box borderRadius={'50%'}  bg={'gray.100'}  borderBottom="5px solid" 
  borderRight="5px solid" 
  borderColor="grey.100" 
  boxShadow="2px 2px 2px 2px" 
       textAlign={'center'} mt={'20px'} 
       height={{ base: "150px", md: "200px", lg: "250px" }} 
       width={{ base: "150px", md: "200px", lg: "350px" }}
       pt={{ base: "40px", md: "60px", lg: "80px" }}>
       <Text fontSize={{ base: "12px", md: "16px", lg: "18px" }}>School-based mental health programs can reduce behavioural issues by up to 40% (National Institute of Mental Health, 2020)</Text></Box>
      </Flex>
      <Box p={5}>
      <Text fontSize="2xl" fontWeight="bold" mb={4} justifyContent={'center'} display={'flex'}>
      Our Holistic Approach to Student Well-being:

      </Text>

      <UnorderedList
        spacing={3}
        pl={5}
        styleType="disc" // You can use 'circle' or 'square' for other bullet styles
      >
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
       
      </UnorderedList>
    </Box>
   
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
            Enquire Now
            </Button>
           </Link>
             </Stack>
    </Box>
  )
}
