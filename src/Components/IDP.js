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
  Image,
  Link
} from '@chakra-ui/react'

function StatsCard({ title, stat }) {
  return (
    <Stat
      px={{ base: 4, md: 8 }}
      py={'5'}
      shadow={'xl'}
      border={'1px solid'}
      borderColor={useColorModeValue('gray.800', 'gray.500')}
      rounded={'lg'}>
      <StatLabel fontWeight={'medium'} isTruncated>
        {title}
      </StatLabel>
      <StatNumber fontSize={'2xl'} fontWeight={'medium'}>
        {stat}
      </StatNumber>
    </Stat>
  );
}
export default function BasicStatistics({ title, stat }) {
  return (
    <Box maxW="9xl" mx={'auto'} pt={5} px={{ base: 2, sm: 12, md: 17 }} borderRadius={'40%'} >
      <chakra.h1 textAlign={'center'} fontSize={'4xl'} py={10} fontWeight={'bold'}>
      IDP- Institution Development Programme


      </chakra.h1>
      <Box display="flex"
          flex="1"
          flexDirection="column"
          justifyContent="center"
          marginTop={{ base: '3', sm: '0' }}>
      <Text fontFamily={'sans-serif'} fontWeight={600}>Are you looking for an expert’s advice to collaborate with your institution’s vision and Mission?

</Text></Box>
<Box>
<Image
              alt={'Hero Image'}
              fit={'cover'}
              align={'center'}
              w={'100%'}
              h={'100%'}
              src={
                "../../../children.jpg"
              }
            />
             <Text>Mission 100K is super excited to announce our collaboration with the top educators and marketing professionals to provide a sustainable revenue model for educational Institutions

While we strive towards impacting the lives of 100K people, our aim is also to empower the education institutions to be successful in their noble mission of providing the best quality education to the students

</Text>
</Box>

      <Box p={5}>
      <Text fontSize="2xl" fontWeight="bold" mb={4}>
      Our IDS program involves (This can be in the form of bullet points)

      </Text>

      <UnorderedList
        spacing={3}
        pl={5}
        styleType="disc" // You can use 'circle' or 'square' for other bullet styles
      >
        <ListItem fontSize="lg">
        Holistic marketing approach, ATL, PR and Media

        </ListItem>
        <ListItem fontSize="lg">
        Building core brand equity
        </ListItem>
        <ListItem fontSize="lg">
        Teachers workshops

        </ListItem>
        <ListItem fontSize="lg">
        Training of Front line staff

        </ListItem>
        <ListItem fontSize="lg">
        Comprehensive digital marketing support

        </ListItem>
        <ListItem fontSize="lg">
        Market Intelligence survey
        </ListItem>
        <ListItem fontSize="lg">
        Comprehensive parent satisfaction survey

        </ListItem>
        <ListItem fontSize="lg">
        Improve admission conversion ratio

        </ListItem>
        <ListItem fontSize="lg">
        Support to set up new schools

        </ListItem>
        <ListItem fontSize="lg">
        Industry partnership with value addition program


        </ListItem>
      </UnorderedList>
    </Box>
    <chakra.h1 textAlign={'center'} fontSize={'4xl'} py={10} fontWeight={'bold'}>
    Early Childhood Well-being Support for pre-school
      </chakra.h1>
      <Text>We believe that emotional well-being starts early. Our program for preschool children focuses on creating a nurturing environment where kids can develop emotional skills, manage behaviour, and build resilience.
We also offer guidance for parents, equipping them with the tools to support their child's emotional growth, ensuring a strong foundation for their overall well-being.
</Text>

          

    <Box maxW="7xl" mx={'auto'} pt={5} px={{ base: 2, sm: 12, md: 17 }}>
      <chakra.h1 textAlign={'center'} fontSize={'4xl'} py={10} fontWeight={'bold'}>
      Why choose us
      </chakra.h1>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }}>
        <StatsCard title={'Experience in education Industry'} stat={'15+ years '} />
        <StatsCard title={'Schools'} stat={'20+'} />
        <StatsCard title={'Educator/Marketing professionals'} stat={'A+'} />
      </SimpleGrid>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }} py={'10px'}>
        <StatsCard title={'Result-Driven Approach  '} stat={'100% '} />
        <StatsCard title={'Always in Sync with your Vision '} stat={'A+'} />
        <StatsCard title={'Affordable price'} stat={'100%'} />
      </SimpleGrid>
    </Box>   
    <Text textAlign={'center'} fontSize={'xl'} py={10} fontWeight={'bold'}> Let us begin our collaboration toward a fulfilling Journey
    </Text>
    <Text textAlign={'center'} fontSize={'xl'} py={10} fontWeight={'bold'}>Book your Free Consultation with our expert team
    </Text>
    
    <Stack spacing={{ base: 4, sm: 6 }} direction={{ base: 'column', sm: 'row' }} py={'20px'}>
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
          Contact Form
            </Button>
           </Link>
             </Stack>
    </Box>
   

  )
}



    
