'use client';
import About from "../Components/About"
import { Link as RouterLink } from 'react-router-dom'; 
import {
  Box,
  Flex,
  Text,
  Image,
  HStack,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  Link,
} from '@chakra-ui/react';
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from '@chakra-ui/icons';
import { px } from 'framer-motion';

export default function WithSubnavigation() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box>
      <Flex
        bg={useColorModeValue('white', 'gray.800')}
        color={useColorModeValue('gray.600', 'white')}
        minH={'60px'}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.900')}
        align={'center'}
        _hover={{bg: 'grey. 900'}}>
        <Flex
          flex={{ base: 1, md: 'auto' }}
          ml={{ base: -2 }}
          display={{ base: 'flex', md: 'none' }}>
          <IconButton
            onClick={onToggle}
            icon={isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />}
            variant={'ghost'}
            aria-label={'Toggle Navigation'}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
          {/* <Text
            textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
            fontFamily={'heading'}
            color={useColorModeValue('gray.800', 'white')}>
            Logo
          </Text> */}
       <Image 
    src={'../../../logo.png'} 
    alt={'Logo'} 
    boxSize={'50px'} 
    objectFit={'cover'} 
  />
  {/* <HStack as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }}>
    {Links.map((link) => (
      <NavLink key={link}>{link}</NavLink>
    ))}
  </HStack> */}
          <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
            <DesktopNav />
          </Flex>
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={'flex-end'}
          direction={'row'}
          spacing={6}>
          <Button as={'a'} fontSize={'sm'} fontWeight={600} variant={'link'} href={'#'}>
          <Link as={RouterLink} to="/signin" >
           SignIn
          </Link>
          </Button>
          <Button
            as={'a'}
            display={{ base: 'none', md: 'inline-flex' }}
            fontSize={'sm'}
            fontWeight={600}
            color={'white'}
            bg={'blue.400'}
            href={'#'}
            _hover={{
              bg: 'blue.300',
            }}>
            <Link as={RouterLink} to="/" >
           SignUp
          </Link>
          </Button>
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}

const DesktopNav = () => {
  const linkColor = useColorModeValue('gray.600', 'gray.200');
  const linkHoverColor = useColorModeValue('gray.800', 'white');
  const popoverContentBgColor = useColorModeValue('white', 'gray.800');

  return (
    <Stack direction={'row'} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={'hover'} placement={'bottom-start'}>
            <PopoverTrigger>
              <Box
                as="a"
                p={2}
                href={navItem.href ?? '#'}
                fontSize={'sm'}
                fontWeight={500}
                color={linkColor}
                _hover={{
                  textDecoration: 'none',
                  color: linkHoverColor,
                }}>
                {navItem.label}
              </Box>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={'xl'}
                bg={popoverContentBgColor}
                p={4}
                rounded={'xl'}
                minW={'sm'}>
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const DesktopSubNav = ({ label, href, subLabel }) => {
  return (
    <Box
      as="a"
      href={href}
      role={'group'}
      display={'block'}
      p={2}
      rounded={'md'}
      _hover={{ bg: useColorModeValue('blue.50', 'gray.900') }}>
      <Stack direction={'row'} align={'center'}>
        <Box>
          <Text
            transition={'all .3s ease'}
            _groupHover={{ color: 'blue.400' }}
            fontWeight={500}>
            {label}
          </Text>
          <Text fontSize={'sm'}>{subLabel}</Text>
        </Box>
        <Flex
          transition={'all .3s ease'}
          transform={'translateX(-10px)'}
          opacity={0}
          _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
          justify={'flex-end'}
          align={'center'}
          flex={1}>
          <Icon color={'blue.400'} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Box>
  );
};

const MobileNav = () => {
  return (
    <Stack bg={useColorModeValue('white', 'gray.800')} p={4} display={{ md: 'none' }}>
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Box
        py={2}
        as="a"
        href={href ?? '#'}
        justifyContent="space-between"
        alignItems="center"
        _hover={{
          textDecoration: 'none',
        }}>
        <Text fontWeight={600} color={useColorModeValue('gray.600', 'gray.200')}>
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={'all .25s ease-in-out'}
            transform={isOpen ? 'rotate(180deg)' : ''}
            w={6}
            h={6}
          />
        )}
      </Box>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.700')}
          align={'start'}>
          {children &&
            children.map((child) => (
              <Box as="a" key={child.label} py={2} href={child.href}>
                {child.label}
              </Box>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

const NAV_ITEMS = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: <Link href={About} isExternal>About Us</Link>,
    href: '../Components/About',
  },
  {
    label: <Link href="./Components/Services" isExternal>Services</Link>,
    children: [
      {
        label: 'School/Colleges',
        
        href: '../Components/Schools',
      },
      {
        label: 'Corporates/Work Places',
       
        href: '../Components/Corporates',
      },
      {
        label: 'Orphanages/ Govt Schools',
       
        href: '../Components/GovtSchools',
      },
      {
        label: 'Career Counselling & Guidance',
        
        href: '../Components/CareerCounselling',
      },
      {
        label: 'Institution Development Program',
        
        href: '../Components/IDP',
      },
      {
        label: '1 : 1 Counselling',
       
        href: '../Components/one-to-one',
      },
    ],
  },
  {
    label: <Link href="./Components/About" isExternal>Psychometric Tests</Link>,
    // children: [
    //   {
    //     label: 'Job Board',
    //     subLabel: 'Find your dream design job',
    //     href: '#',
    //   },
    //   {
    //     label: 'Freelance Projects',
    //     subLabel: 'An exclusive list for contract work',
    //     href: '#',
    //   },
    // ],
  },
  {
    label: <Link href="/" isExternal>21st Century life Skill & Learning</Link>,
    // children: [
    //   {
    //     label: 'Job Board',
    //     subLabel: 'Find your dream design job',
    //     href: '#',
    //   },
    //   {
    //     label: 'Freelance Projects',
    //     subLabel: 'An exclusive list for contract work',
    //     href: '#',
    //   },
    // ],
  },
  {
    label: <Link href="./Components/Contactus" isExternal>Contact Us</Link>,
    href: './Components/Contactus',
  }
];