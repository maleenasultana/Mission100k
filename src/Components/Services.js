'use client'

import {
  Box,
  Text,
  chakra,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
  useColorModeValue,
  Link,
  Button,
  Stack,
} from '@chakra-ui/react'
import { color } from 'framer-motion'

function StatsCard({ title, stat }) {
  return (
    <Stat
      px={{ base: 4, md: 8 }}
      py={'5'}
      shadow={'xl'}
      border={'1px solid'}
      borderColor={useColorModeValue('gray.800', 'gray.500')}
      rounded={'lg'}
      _hover={{ bg: 'blue.100'}}
    >
      {/* <StatLabel fontWeight={'medium'} isTruncated>
        {title}
      </StatLabel> */}
      <StatNumber fontSize={'2xl'} fontWeight={'medium'}>
        {title}
      </StatNumber>
    </Stat>
  )
}

export default function BasicStatistics() {
  return (
    <Box maxW="7xl" mx={'auto'} pt={5} px={{ base: 2, sm: 12, md: 17 }}>
      <chakra.h1
        textAlign={'center'}
        fontSize={'4xl'}
        py={10}
        fontWeight={'bold'}
      >
        <Text color={'blue.500'}>Our Services</Text>
      </chakra.h1>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }} >
        <Link href="../schools"><StatsCard title={'Schools/Colleges'} stat={'5k'} /></Link>
        <Link href="../corporates"><StatsCard title={'Corporate/WorkPlaces'} stat={'30K'} /></Link>
        <Link href="../govtschools"><StatsCard title={'Orphanages/Govt Schools'} stat={'100k'} /></Link>
      </SimpleGrid>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }} py={'15px'} boxShadow={'5px'}>
      <Link href="../careercounselling"><StatsCard title={'Career Counselling/Guidance'}/></Link>
      <Link href="../idp"><StatsCard title={'Institution Development Programme'} /></Link>
      <Link href="../onetoone"><StatsCard title={'1 : 1 Counselling'} /></Link>
      </SimpleGrid>
     <Box>
     <Stack spacing={{ base: 4, sm: 6 }} direction={{ base: 'column', sm: 'row' }}>
     <Link href='/enquiryform'>
     <Button
              rounded={'full'}
              size={'lg'}
              fontWeight={'normal'}
              px={6}
              colorScheme={'blue'}
              bg={'blue.400'}
              _hover={{ bg: 'blue.600', transform: 'scale(1.1)' }} gap={'10'} >
            Book Your Session
            </Button>
            </Link>
            <Link href='/psychometrictest'>
            <Button
              rounded={'full'}
              size={'lg'}
              fontWeight={'normal'}
              px={6}
              colorScheme={'blue'}
              bg={'blue.400'}
              _hover={{ bg: 'blue.600', transform: 'scale(1.1)' }} >
            Psychometric Test
            </Button>
            </Link>
             </Stack>
     </Box>
    
    </Box>
  )
}
