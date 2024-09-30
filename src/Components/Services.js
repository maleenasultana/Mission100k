import {
  Box,
  Text,
  chakra,
  SimpleGrid,
  Stat,
  StatNumber,
  useColorModeValue,
  Link,
  Button,
  Stack,
} from '@chakra-ui/react';

function StatsCard({ title, stat, bgColor }) {
  return (
    <Stat
      px={{ base: 4, md: 8 }}
      py={'5'}
      shadow={'xl'}
      bg={bgColor}
    borderRadius={'20px'}
    bgGradient="linear(to-r, peachpuff, lightyellow)"
      transition="all 0.3s ease"
      _hover={{
        transform: 'scale(1.05)',
        boxShadow: 'xl',
        borderColor: 'blue.400',
      }}
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="200px"
    >
      <StatNumber fontSize={'3xl'} fontWeight={'bold'} fontFamily="Poppins">
        {title}
      </StatNumber>
      <Text fontSize="xl" color="blue.500" fontFamily="Poppins">
        {stat}
      </Text>
    </Stat>
  );
}

export default function BasicStatistics() {
  return (
    <Box maxW="7xl" mx={'auto'} pt={5} px={{ base: 2, sm: 12, md: 17 }}>
      <chakra.h1 textAlign={'center'} fontSize={'4xl'} py={10} fontWeight={'bold'}>
        <Text color={'blue.500'} fontFamily="Poppins">Our Services</Text>
      </chakra.h1>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }}>
        <Link href="../schools"><StatsCard title={'Schools/Colleges'} stat={'5k'} bgColor="pastelPink" /></Link>
        <Link href="../corporates"><StatsCard title={'Corporate/Workplaces'} stat={'30K'} bgColor="pastelBlue" /></Link>
        <Link href="../govtschools"><StatsCard title={'Orphanages/Govt Schools'} stat={'100k'} bgColor="pastelGreen" /></Link>
      </SimpleGrid>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }} py={'15px'}>
        <Link href="../careercounselling"><StatsCard title={'Career Counselling'} stat={''} bgColor="pastelYellow" /></Link>
        <Link href="../idp"><StatsCard title={'Institution Development Programme'} stat={''} bgColor="pastelLavender" /></Link>
        <Link href="../onetoone"><StatsCard title={'1 : 1 Counselling'} stat={''} bgColor="pastelOrange" /></Link>
      </SimpleGrid>
      <Box py={10}>
        <Stack spacing={6} direction={{ base: 'column', sm: 'row' }}>
          <Link href="/enquiryform">
            <Button
              rounded={'full'}
              size={'lg'}
              fontWeight={'normal'}
              px={6}
              colorScheme={'blue'}
              bg={'blue.400'}
              _hover={{ bg: 'blue.600', transform: 'scale(1.1)' }}
            >
              Book Your Session
            </Button>
          </Link>
          <Link href="/psychometrictest">
            <Button
              rounded={'full'}
              size={'lg'}
              fontWeight={'normal'}
              px={6}
              colorScheme={'blue'}
              bg={'blue.400'}
              _hover={{ bg: 'blue.600', transform: 'scale(1.1)' }}
            >
              Psychometric Test
            </Button>
          </Link>
         <Link href="/psychometrictest">
            <Button
              rounded={'full'}
              size={'lg'}
              fontWeight={'normal'}
              px={6}
              colorScheme={'blue'}
              bg={'blue.400'}
              _hover={{ bg: 'blue.600', transform: 'scale(1.1)' }}
            >
            Skill & Learning Test
            </Button>
          </Link>
        </Stack>
      </Box>
    </Box>
  );
}
