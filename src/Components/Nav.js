import React, { useState, useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Box,
  Flex,
  Link,
  Stack,
  Image,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  useDisclosure,
  Button,
  HStack,
  VStack,
  Collapse,
  useColorModeValue,
  useColorMode,
} from '@chakra-ui/react';
import { HamburgerIcon, ChevronDownIcon, CloseIcon } from '@chakra-ui/icons';

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode } = useColorMode(); // For light/dark mode support
  const [navbarBg, setNavbarBg] = useState('transparent'); // Default background for navbar
  const [boxShadow, setBoxShadow] = useState('none');

  // Function to change navbar background color on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setNavbarBg('blue.500'); // Change to blue when scrolled
        setBoxShadow('md'); // Add shadow when scrolling down
      } else {
        setNavbarBg('transparent'); // Transparent when at the top
        setBoxShadow('none'); // Remove shadow at the top
      }
    };

    // Listen to scroll events
    window.addEventListener('scroll', handleScroll);

    return () => {
      // Cleanup listener on component unmount
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Box
  bg="gray.400"
  // opacity={'10%'}
  transition="background-color 0.3s ease" // Smooth transition for background change
  px={{ base: 2, md: 4, lg: 8 }} // Responsive padding
  boxShadow={boxShadow} // Dynamic shadow based on scroll
  position="fixed" // Fixed navbar on top
  width="100%" // Full width for navbar
 // Responsive max width
  mx="auto" // Center the navbar horizontally
  zIndex={10} // Ensure navbar stays on top of other elements
  h={{ base: '50px', md: '65px' }} 
  alignItems={'center'}// Responsive height for the navbar
>


  <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
    {/* Logo */}
    <Box 
    display={{ base: 'flex', md: 'block' }} // Use flex on small screens, block on medium and up
    justifyContent="center" // Centers horizontally on small screens
    alignItems="center" // Centers vertically on small screens
    h={{ base: '60px', md: 'auto' }} // Adjust height for the container on small screens
>
    {/* <Image 
        src={'../../../logo.png'} 
        w={{ base: '100px', md: '200px' }} // Responsive logo width
     
        h={{ base: '40px', md: '50px' }} // Responsive logo height
        alt={'Logo'} 
        // py={1}
    /> */}
</Box>


    {/* Desktop Navigation */}
    <HStack as={'nav'} spacing={8} display={{ base: 'none', md: 'flex' }}>
      <Button
        as={RouterLink}
        to="/"
        color="white"
        bg="transparent"
        _hover={{
          bg: 'white',
          color: 'black',
          border: '1px solid',
          borderColor: 'blue.500',
        }}
      >
        Home
      </Button>
      <Button
        as={RouterLink}
        to="/about"
        color="white"
        bg="transparent"
        _hover={{
          bg: 'white',
          color: 'black',
          border: '1px solid',
          borderColor: 'blue.500',
        }}
      >
        About Us
      </Button>

      <Menu>
        <MenuButton
          color="white"
          as={Button}
          rightIcon={<ChevronDownIcon />}
          bg="transparent"
          _hover={{
            bg: 'white',
            color: 'black',
            border: '1px solid',
            borderColor: 'blue.500',
          }}
        >
          Services
        </MenuButton>
        <MenuList>
          <MenuItem as={RouterLink} to="/schools">School/Colleges</MenuItem>
          <MenuItem as={RouterLink} to="/corporates">Corporates/Workplaces</MenuItem>
          <MenuItem as={RouterLink} to="/govtschools">Orphanages/Govt Schools</MenuItem>
          <MenuItem as={RouterLink} to="/careercounselling">Career Counselling & Guidance</MenuItem>
          <MenuItem as={RouterLink} to="/idp">Institution Development Program</MenuItem>
          <MenuItem as={RouterLink} to="/onetoone">1:1 Counselling</MenuItem>
        </MenuList>
      </Menu>

      <Button
        as={RouterLink}
        to="/psychometrictest"
        color="white"
        bg="transparent"
        _hover={{
          bg: 'white',
          color: 'black',
          border: '1px solid',
          borderColor: 'blue.500',
        }}
      >
        Psychometric Test
      </Button>

      <Button as={RouterLink} to="/signin" fontWeight={600}>
        Sign In
      </Button>
      <Button as={RouterLink} to="/signup" colorScheme="blue" fontWeight={600}>
        Sign Up
      </Button>
    </HStack>

    {/* Mobile Hamburger Menu */}
    <IconButton
    mr={45}
    size={'md'}
    icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
    aria-label={'Toggle Navigation'}
    position="absolute" // Use absolute positioning
    top={1}
    mx={20} // Adjust this value for vertical positioning
    left={40} // Adjust this value for horizontal positioning
    onClick={isOpen ? onClose : onOpen}
    display={{ base: 'flex', md: 'none' }} // Show only on small screens
/>

  </Flex>

  {/* Mobile Navigation */}
  <Collapse in={isOpen} animateOpacity>
    <Box pb={4} p={'15px'}display={{ md: 'none' }} bgColor={'purple.500'}>
      <VStack as={'nav'} spacing={4} alignItems="flex-left">
        <Link as={RouterLink} to="/" onClick={onClose}>
          Home
        </Link>
        <Link as={RouterLink} to="/about" onClick={onClose}>
          About Us
        </Link>

        <Menu>
          <MenuButton as={RouterLink} rightIcon={<ChevronDownIcon />} >
            Services
          </MenuButton>
          <MenuList>
            <MenuItem as={RouterLink} to="/schools" onClick={onClose}>
              School/Colleges
            </MenuItem>
            <MenuItem as={RouterLink} to="/corporates" onClick={onClose}>
              Corporates/Workplaces
            </MenuItem>
            <MenuItem as={RouterLink} to="/govtschools" onClick={onClose}>
              Orphanages/Govt Schools
            </MenuItem>
            <MenuItem as={RouterLink} to="/careercounselling" onClick={onClose}>
              Career Counselling & Guidance
            </MenuItem>
            <MenuItem as={RouterLink} to="/idp" onClick={onClose}>
              Institution Development Program
            </MenuItem>
            <MenuItem as={RouterLink} to="/onetoone" onClick={onClose}>
              1:1 Counselling
            </MenuItem>
          </MenuList>
        </Menu>

        <Link as={RouterLink} to="/psychometrictest" onClick={onClose}>
          Psychometric Test
        </Link>
        <Link as={RouterLink} to="/signin" onClick={onClose}>
          Sign In
        </Link>
        <Button as={RouterLink} to="/signup" colorScheme="blue" w="full" onClick={onClose}>
          Sign Up
        </Button>
      </VStack>
    </Box>
  </Collapse>
</Box>

  );
};

export default Navbar;