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
     Corporates /Work Places

      </chakra.h1>
      <Box display="flex"
          flex="1"
          flexDirection="column"
          justifyContent="center"
          marginTop={{ base: '3', sm: '0' }}>
      <Text>We help businesses create healthier workplaces by offering accessible, stigma-free mental health support. Our services aim to reduce stress, boost employee engagement, and improve overall satisfaction.



</Text></Box>
<Flex
      justify="center"
      wrap="wrap" // Makes the circles wrap in smaller screens
      gap={6} // Adds space between the circles
      mt="20px"
    >
<Box borderRadius={'50%'} bg={'blue.100'}  
       textAlign={'center'} mt={'20px'} 
       height={{ base: "150px", md: "200px", lg: "250px" }} 
       width={{ base: "150px", md: "200px", lg: "350px" }}
       pt={{ base: "40px", md: "60px", lg: "80px" }}>

       <Text py={'5px'} fontSize={{ base: "12px", md: "16px", lg: "18px" }}>
       57% of employees experience workplace stress, (Gallup, 2020).



       </Text></Box>   
       <Box borderRadius={'50%'} bg={'blue.100'}  
       textAlign={'center'} mt={'20px'} 
       height={{ base: "150px", md: "200px", lg: "250px" }} 
       width={{ base: "150px", md: "200px", lg: "350px" }}
       pt={{ base: "40px", md: "60px", lg: "80px" }}>
       <Text fontSize={{ base: "12px", md: "16px", lg: "18px" }}>Only 1 in 10 employees seek mental health support (Mental Health America, 2021).


       </Text></Box>

       <Box borderRadius={'50%'} bg={'blue.100'}  
       textAlign={'center'} mt={'20px'} 
       height={{ base: "150px", md: "200px", lg: "250px" }} 
       width={{ base: "150px", md: "200px", lg: "350px" }}
       pt={{ base: "40px", md: "60px", lg: "80px" }}>
        <Text fontSize={{ base: "12px", md: "16px", lg: "18px" }}>40% of employees show no obvious signs of mental distress (World Health Organization, 2021).

        </Text></Box>
</Flex>
<Flex
      justify="center"
      wrap="wrap" // Makes the circles wrap in smaller screens
      gap={6} // Adds space between the circles
      mt="20px"
    >
        <Box borderRadius={'50%'} bg={'blue.100'}  
       textAlign={'center'} mt={'20px'} 
       height={{ base: "150px", md: "200px", lg: "250px" }} 
       width={{ base: "150px", md: "200px", lg: "350px" }}
       pt={{ base: "40px", md: "60px", lg: "80px" }}>
          <Text fontSize={{ base: "12px", md: "16px", lg: "18px" }}>Join us to create a mentally healthy workplace!

          </Text></Box>

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
