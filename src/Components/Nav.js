import React from 'react';
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
} from '@chakra-ui/react';
import { HamburgerIcon, ChevronDownIcon, CloseIcon } from '@chakra-ui/icons';

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box 
      bg={useColorModeValue('rgba(255, 255, 255, 0.8)', 'rgba(50, 50, 50, 0.8)')} // Semi-transparent background for visibility
      px={4} 
      boxShadow="sm"
      backgroundImage="url('../../../bg-nav.png')" // Replace with your image path
      backgroundSize="cover" // Cover the entire navbar
      backgroundPosition="center" // Center the image
      zIndex={-1}
    >
      <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
        {/* Logo */}
        <Image src={'../../../logo.png'}  alt={'Logo'} height={'50px'} width={'170px'} objectFit={'cover'} />

        {/* Desktop Navigation */}
        <HStack as={'nav'} spacing={8} display={{ base: 'none', md: 'flex' }} >

        <Button as={RouterLink} to="/" color="white" 
        bg="transparent"
        _hover={{
          bg: "white", // Background color on hover
          color: "black", // Text color on hover
          border: "1px solid", // Optional border on hover
          borderColor: "blue.500" // Border color on hover
        }} 
        >
          Home
          </Button>
          <Button as={RouterLink} to="/about" color="white"   bg="transparent"
        _hover={{
          bg: "white", // Background color on hover
          color: "black", // Text color on hover
          border: "1px solid", // Optional border on hover
          borderColor: "blue.500" // Border color on hover
        }}>
           About Us
          </Button>

          <Menu>
            <MenuButton color="white" as={Button} rightIcon={<ChevronDownIcon />}  bg="transparent"
        _hover={{
          bg: "white", // Background color on hover
          color: "black", // Text color on hover
          border: "1px solid", // Optional border on hover
          borderColor: "blue.500" // Border color on hover
        }}>
              Services
            </MenuButton>
            <MenuList>
              <MenuItem as={RouterLink} to="/schools">
                School/Colleges
              </MenuItem>
              <MenuItem as={RouterLink} to="/corporates">
                Corporates/Workplaces
              </MenuItem>
              <MenuItem as={RouterLink} to="/govtschools">
                Orphanages/Govt Schools
              </MenuItem>
              <MenuItem as={RouterLink} to="/careercounselling">
                Career Counselling & Guidance
              </MenuItem>
              <MenuItem as={RouterLink} to="/idp">
                Institution Development Program
              </MenuItem>
              <MenuItem as={RouterLink} to="/onetoone">
                1:1 Counselling
              </MenuItem>
            </MenuList>
          </Menu>

        <Button as={RouterLink} to="/psychometrictest" color="white"  bg="transparent"
        _hover={{
          bg: "white", // Background color on hover
          color: "black", // Text color on hover
          border: "1px solid", // Optional border on hover
          borderColor: "blue.500" // Border color on hover
        }}>
            Psychometric test
          </Button>
          <Button as={RouterLink} to="/signin" fontWeight={600} >
            Sign In
          </Button>
          <Button
            as={RouterLink}
            to="/signup"
            colorScheme="blue"
            fontWeight={600}
          >
            Sign Up
          </Button>
        </HStack>

        {/* Mobile Hamburger Menu */}
        <IconButton
          size={'md'}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label={'Toggle Navigation'}
          display={{ md: 'none' }}
          onClick={isOpen ? onClose : onOpen}
        />
      </Flex>

      {/* Mobile Navigation */}
      <Collapse in={isOpen} animateOpacity>
        <Box pb={4} display={{ md: 'none' }}>
          <VStack as={'nav'} spacing={4} alignItems="flex-start">
            <Link as={RouterLink} to="/" onClick={onClose}>
              Home
            </Link>
            <Link as={RouterLink} to="/about" onClick={onClose}>
              About Us
            </Link>
            
            <Menu>
              <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
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
              Psychometric test
            </Link>
            <Link as={RouterLink} to="/gallery1" onClick={onClose}>
              Gallery1
            </Link>
            <Link as={RouterLink} to="/signin" onClick={onClose}>
              Sign In
            </Link>
            <Button
              as={RouterLink}
              to="/signup"
              colorScheme="blue"
              w="full"
              onClick={onClose}
            >
              Sign Up
            </Button>
          </VStack>
        </Box>
      </Collapse>
    </Box>
  );
};

export default Navbar;
