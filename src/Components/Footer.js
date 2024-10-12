'use client';

import { PhoneIcon, EmailIcon } from '@chakra-ui/icons';

import React from 'react';
import {
  Box,
  Container,
  SimpleGrid,
  Stack,
  Text,
  Flex,
  Tag,
  useColorModeValue,
} from '@chakra-ui/react';

// const Logo = props => {
//   return (
//     <img
//       src="../../../full-logo.png"
//       alt="logo"
//       className="logo"
//       height={"20px"}
//       width={"20px"}
//       viewBox="0 0 120 28"
//       xmlns=""
//       {...props}
//     />
//   );
// };

const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
      {children}
    </Text>
  );
};

export default function LargeWithLogoCentered() {
  return (
    <Box
      bg={useColorModeValue('gray.100', 'grey.300')}
      color={useColorModeValue('grey.200', 'grey.100')} p={'10px'} m={'30px'}
    >
      <Container as={Stack} maxW={'9xl'} py={10} >
        <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={6}>
        <Stack align={'flex-start'} spacing={4}>  {/* Added spacing to keep items consistently spaced */}
  <ListHeader>Services</ListHeader>
  
  <Box as="a" href={'./schools'}>
    Schools / Colleges
  </Box>

  <Box as="a" href={'./corporates'}>
    Corporates / Workplaces
  </Box>

  <Box as="a" href={'./careercounselling'}>
    Career Counselling
  </Box>

  <Box as="a" href={'./onetoone'}>
    One-to-One Sessions
  </Box>

  <Box as="a" href={'./idp'}>
    Institutional Development Programme
  </Box>
</Stack>

          <Stack align={'flex-start'}>
            <ListHeader>Company</ListHeader>

            <Box as="a" href={'./enquiryform'}>
              Careers
            </Box>
            <Box as="a" href={'./contactus'}>
              Contact Us
            </Box>
            
            <Box as="a" href={'mailto:Director@mission100k.org'}>
              <EmailIcon /> Email Us 
            </Box>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Legal</ListHeader>
            <Box
              as="a"
              href={
                'https://www.wonder.legal/in/modele/website-cookies-policy?msclkid=89102818a8081c0639a34dc16bce4f2e'
              }
            >
              Cookies Policy
            </Box>
            <Box as="a" href={""}>
              Privacy Policy
            </Box>
            <Box as="a" href={'#'}>
              Terms of Service
            </Box>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Follow Us</ListHeader>
            <Box
              as="a"
              href={
                'https://www.facebook.com/profile.php?id=61567043039711&mibextid=ZbWKwL'
              }
            >
              Facebook
            </Box>
            <Box as="a" href={'https://t.co/redirect?url=https%3A%2F%2Fx.com%2FMission100ks&t=1&cn=bG9naW5fbm90aWZpY2F0aW9uX2VtYWls&sig=0d1d2e71b7260c4e65c1ead18a985536c2b135a6&iid=3922c09f048d417082ccd58816e6fccb&uid=1831603482379304960&nid=296+1'}>
              Twitter
            </Box>

            <Box as="a" href={'https://www.instagram.com/mission100ks/'}>
              Instagram
            </Box>
            <Box as="a" href={'https://www.linkedin.com/in/missionwellbeing'}>
              LinkedIn
            </Box>
          </Stack>
        </SimpleGrid>
      </Container>
      <Box py={1}>
        {/* <Flex
          align={'center'}
          _before={{
            content: '""',
            borderBottom: '1px solid',
            borderColor: useColorModeValue('gray.200', 'gray.700'),
            flexGrow: 1,
            mr: 8,
          }}
          _after={{
            content: '""',
            borderBottom: '1px solid',
            borderColor: useColorModeValue('gray.200', 'gray.700'),
            flexGrow: 1,
            ml: 8,
          }}
        >
          <Logo />
        </Flex> */}
        <Text pt={6} fontSize={'sm'} textAlign={'center'}>
          Copyrights © 2024. All rights reserved
        </Text>
      </Box>
    </Box>
  );
}