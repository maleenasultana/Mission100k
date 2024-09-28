'use client'

import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
  Text,
  Textarea,
  Tooltip,
  useClipboard,
  VStack,
  useColorModeValue,
  chakra
} from '@chakra-ui/react';
import { BsGithub, BsLinkedin, BsTwitter, BsPerson } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';

const ContactForm = () => {
  const { hasCopied, onCopy } = useClipboard('your-email@example.com');
  
  return (
    <Box>
        <chakra.h1
        textAlign={'center'}
        fontSize={'4xl'}
        py={10}
        fontWeight={'bold'}
      >
        <Text color={'blue.500'}>Contact Us</Text>
      </chakra.h1>
   
    <Flex
      align="center"
      justify="center"
      id="contact"
      bg={useColorModeValue('gray.100', 'gray.900')}
      p={10}
    >
      <Box
        bg={useColorModeValue('white', 'gray.800')}
        borderRadius="lg"
        p={8}
        color={useColorModeValue('gray.700', 'whiteAlpha.900')}
        shadow="base"
        maxW="600px"
        w="full"
      >
        <Heading fontSize="2xl" mb={4}>Get in Touch</Heading>

        <Stack spacing={4}>
          {/* Name Field */}
          <FormControl id="name">
            <FormLabel>Name</FormLabel>
            <InputGroup>
              <InputLeftElement>
                <BsPerson />
              </InputLeftElement>
              <Input type="text" placeholder="Your Name" />
            </InputGroup>
          </FormControl>

          {/* Email Field */}
          <FormControl id="email">
            <FormLabel>Email</FormLabel>
            <InputGroup>
              <InputLeftElement>
                <MdEmail />
              </InputLeftElement>
              <Input type="email" placeholder="Your Email" />
            </InputGroup>
          </FormControl>

          {/* Message Field */}
          <FormControl id="message">
            <FormLabel>Message</FormLabel>
            <Textarea placeholder="Your Message" rows={6} resize="none" />
          </FormControl>

          {/* Submit Button */}
          <Button colorScheme="blue" mt={4} size="lg">
            Send Message
          </Button>

          {/* Social Icons */}
          <VStack mt={10} spacing={3}>
            <Text>Connect with me:</Text>
            <Stack direction="row" spacing={6}>
              <Tooltip label="GitHub" fontSize="md">
                <IconButton
                  as="a"
                  href="https://github.com/your-profile"
                  target="_blank"
                  variant="ghost"
                  aria-label="GitHub"
                  icon={<BsGithub />}
                />
              </Tooltip>
              <Tooltip label="LinkedIn" fontSize="md">
                <IconButton
                  as="a"
                  href="https://linkedin.com/in/your-profile"
                  target="_blank"
                  variant="ghost"
                  aria-label="LinkedIn"
                  icon={<BsLinkedin />}
                />
              </Tooltip>
              <Tooltip label="Twitter" fontSize="md">
                <IconButton
                  as="a"
                  href="https://twitter.com/your-profile"
                  target="_blank"
                  variant="ghost"
                  aria-label="Twitter"
                  icon={<BsTwitter />}
                />
              </Tooltip>
            </Stack>
          </VStack>
        </Stack>
      </Box>
    </Flex> 
    </Box>
  );
};

export default ContactForm;
