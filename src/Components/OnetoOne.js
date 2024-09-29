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
      personalized counselling service


      </chakra.h1>
      <Box display="flex"
          flex="1"
          flexDirection="column"
          justifyContent="center"
          marginTop={{ base: '3', sm: '0' }}>
      <Text>At Mission 100K we aim to ensure that all emotional well-being services are provided at an affordable price by experts

Improve overall emotional well-being with Mission 100K’s 1:1 personalized counselling service

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
       100% confidential & secure


       </Text></Box>   
       <Box borderRadius={'50%'} bg={'blue.100'}  
       textAlign={'center'} mt={'20px'} 
       height={{ base: "150px", md: "200px", lg: "250px" }} 
       width={{ base: "150px", md: "200px", lg: "350px" }}
       pt={{ base: "40px", md: "60px", lg: "80px" }}>
       <Text fontSize={{ base: "12px", md: "16px", lg: "18px" }}> 99.9% uptime
       </Text></Box>

       <Box borderRadius={'50%'} bg={'blue.100'}  
       textAlign={'center'} mt={'20px'} 
       height={{ base: "150px", md: "200px", lg: "250px" }} 
       width={{ base: "150px", md: "200px", lg: "350px" }}
       pt={{ base: "40px", md: "60px", lg: "80px" }}>
        <Text fontSize={{ base: "12px", md: "16px", lg: "18px" }}>Ease of access
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
          <Text fontSize={{ base: "12px", md: "16px", lg: "18px" }}>Trust & Integrity
          </Text></Box>

          <Box borderRadius={'50%'} bg={'blue.100'}  
       textAlign={'center'} mt={'20px'} 
       height={{ base: "150px", md: "200px", lg: "250px" }} 
       width={{ base: "150px", md: "200px", lg: "350px" }}
       pt={{ base: "40px", md: "60px", lg: "80px" }}>
       <Text fontSize={{ base: "12px", md: "16px", lg: "18px" }}>Built with empathy   </Text></Box>
       <Box borderRadius={'50%'} bg={'blue.100'}  
       textAlign={'center'} mt={'20px'} 
       height={{ base: "150px", md: "200px", lg: "250px" }} 
       width={{ base: "150px", md: "200px", lg: "350px" }}
       pt={{ base: "40px", md: "60px", lg: "80px" }}>
       <Text fontSize={{ base: "12px", md: "16px", lg: "18px" }}>  Inclusive    </Text></Box>

       <Box borderRadius={'50%'} bg={'blue.100'}  
       textAlign={'center'} mt={'20px'} 
       height={{ base: "150px", md: "200px", lg: "250px" }} 
       width={{ base: "150px", md: "200px", lg: "350px" }}
       pt={{ base: "40px", md: "60px", lg: "80px" }}>
       <Text fontSize={{ base: "12px", md: "16px", lg: "18px" }}>     Unbiased           </Text></Box>

       <Box borderRadius={'50%'} bg={'blue.100'}  
       textAlign={'center'} mt={'20px'} 
       height={{ base: "150px", md: "200px", lg: "250px" }} 
       width={{ base: "150px", md: "200px", lg: "350px" }}
       pt={{ base: "40px", md: "60px", lg: "80px" }}>
       <Text fontSize={{ base: "12px", md: "16px", lg: "18px" }}>  Practical Approach    </Text></Box>


      </Flex>
      <Box p={5}>
      <Text fontSize="2xl" fontWeight="bold" mb={4}>
      We provide holistic mental health through a variety of interventions.


      </Text>
      <Box borderRadius={'50%'} bg={'blue.100'}  
       textAlign={'center'} mt={'20px'} 
       height={{ base: "150px", md: "200px", lg: "250px" }} 
       width={{ base: "150px", md: "200px", lg: "350px" }}
       pt={{ base: "40px", md: "60px", lg: "80px" }}>
       <Text fontSize={{ base: "12px", md: "16px", lg: "18px" }}>  Depression   </Text></Box>

      <Text fontSize="2xl" fontWeight="bold" mb={4}>
      One in 20 Indians suffers from depression

      
<Link>Know More...</Link>
Signs to look out for
      </Text>

      <UnorderedList
        spacing={3}
        pl={5}
        styleType="disc" // You can use 'circle' or 'square' for other bullet styles
      >
        <ListItem fontSize="lg">
      


        </ListItem>
        <ListItem fontSize="lg">
        Persistent sadness
 
      
        </ListItem>
        
        <ListItem fontSize="lg">
        Lack of Interest 

        </ListItem>
        <ListItem fontSize="lg">
        Constant fatigue

        </ListItem>
        <ListItem fontSize="lg">
        Lack of energy
        </ListItem>
        <ListItem fontSize="lg">
        Feeling worthless, hopeless or guilty

        </ListItem>
        <ListItem fontSize="lg">
        Difficulty concentrating

        </ListItem>
        <ListItem fontSize="lg">
        Irregular sleeping & eating patterns


        </ListItem>
       
      </UnorderedList>
    </Box>
    <Box borderRadius={'50%'} bg={'blue.100'}  
       textAlign={'center'} mt={'20px'} 
       height={{ base: "150px", md: "200px", lg: "250px" }} 
       width={{ base: "150px", md: "200px", lg: "350px" }}
       pt={{ base: "40px", md: "60px", lg: "80px" }}>
       <Text fontSize={{ base: "12px", md: "16px", lg: "18px" }}>  Anxiety  </Text></Box>
       <Text fontSize="2xl" fontWeight="bold" mb={4}>
       3.5% of India's population has an anxiety-related disorder


      
<Link>Know More...</Link>
Are you experiencing the below mentioned??

      </Text>

      <UnorderedList
        spacing={3}
        pl={5}
        styleType="disc" // You can use 'circle' or 'square' for other bullet styles
      >
        <ListItem fontSize="lg">
      


        </ListItem>
        <ListItem fontSize="lg">
        
Uncontrollable worry 

 
      
        </ListItem>
        
        <ListItem fontSize="lg">
        Feeling Restless


        </ListItem>
        <ListItem fontSize="lg">
        Unable to focus on a single task

        </ListItem>
        <ListItem fontSize="lg">
        Trouble sleeping

        </ListItem>
        <ListItem fontSize="lg">
        Feeling fatigued


        </ListItem>
        <ListItem fontSize="lg">
        Tense muscles 


        </ListItem>
        <ListItem fontSize="lg">
        Getting irritated easily 


        </ListItem>
       
      </UnorderedList>
<Stack spacing={{ base: 4, sm: 6 }} direction={{ base: 'column', sm: 'row' }} py={'20pxs'}>
     <Link  href="/enquiryform">
     <Button
              rounded={'full'}
              size={'lg'}
              fontWeight={'normal'}
              px={9}
              colorScheme={'blue'}
              bg={'blue.400'}
              _hover={{ bg: 'blue.600', transform: 'scale(1.1)' }} gap={'10'}
              py={'20px'}
              >
          
           Enquire Now
            </Button>
           </Link>
             </Stack>
    </Box>
  )
}
