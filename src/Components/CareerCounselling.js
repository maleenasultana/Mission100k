"use client";

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
  Image,
  Stack,
  Button,
  Heading,
  Link,
  FormControl,
  FormLabel,
  Input,
  Select,
  Textarea,
  VStack,
  Container,
  Icon,
} from "@chakra-ui/react";

import { useState } from "react";

const Card = ({ heading, description, icon, href,bgColor }) => {
  return (
    <Box
      maxW={{ base: 'full', md: '250px' }}
      w={'full'}
      borderWidth="1px"
      borderRadius="lg"
      bg={bgColor}
      overflow="hidden"
      boxShadow={'revert'}
      shadow={'revert-layer'}
      _hover={{
        transform: 'translateY(-5px)',
        boxShadow: 'xl',
        transition: 'all 0.3s ease-in-out',
      }}
      transition="all 0.3s ease-in-out"
      textAlign="center"
      role="group"
      position={'relative'}

     
      p={5}>
      <Stack align={'start'} spacing={2}>
       
        <Box mt={2}>
          {/* <Heading size="md">{heading}</Heading> */}
          <Text mt={1} fontSize={'sm'} fontFamily={'Exo, sans-serif'}fontWeight={600}>
            {description}
          </Text>
        </Box>
        {/* <Button variant={'link'} colorScheme={'blue'} size={'sm'}>
          Learn more
        </Button> */}
      </Stack>
    </Box>
  )
}

const OfferCard = ({ imageSrc, title }) => {
  return (
    <Box
      w={"full"}
      maxW={"300px"}
      p={8}
      py={5}
      // boxShadow={'md'}
      // borderRadius="md"
      display="flex"
      alignItems="center"
      bg={useColorModeValue("white", "gray.800")}
      height={"80px"} // Ensuring uniform height
    >
      {/* Image on the left side */}
      <Image
        src={imageSrc}
        alt={title}
        boxSize={"100px"}
        objectFit={"cover"}
        borderRadius="full"
        mr={6}
        height={"40px"}
        width={"40px"}
      />

      {/* Text on the right side */}
      <Box>
        <Heading fontSize={"lg"}>{title}</Heading>
      </Box>
    </Box>
  );
};
export default function BasicStatistics() {
  const [formData, setFormData] = useState({
    name: "",
    contactNumber: "",
    email: "",
    service: "",
    additionalInfo: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };
  return (
    <Box
      maxW="6xl"
      mx={"auto"}
      px={{ base: 2, sm: 12, md: 17 }}
      borderRadius={"40%"}
    >
      <Box>
        <Image src="../../../logo4-rm.png" height={"350px"} width={"350px"} />
      </Box>
      <Heading
        lineHeight={1.1}
        fontWeight={600}
        fontSize={{ base: "2xl", sm: "3xl", lg: "4xl" }}
      >
        <Flex
          flex={1}
          justify={"center"}
          align={"center"}
          position={"relative"}
          w={"full"}
        >
          <Text as={"span"} color={"blue.500"} textAlign={"center"} pb={20}>
            Empowerment and Wellbeing Initiative
          </Text>
        </Flex>
      </Heading>
      <Flex
        flex={1}
        justify={"center"}
        align={"center"}
        position={"relative"}
        w={"full"}
      >
        <Image
          alt={'Hero Image'}
          objectFit={'cover'}
          align={'center'}
          w={{ base: '100%', md: '550px' }}
          h={{ base: '300px', md: '100%' }}
          src={'../../../c-c.jpg'}
          
        />
      </Flex>

      <Heading
        fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
        textAlign={"center"}
        pb={"20px"}
        pt={{ base: "90", lg: "50px" }}
        margin={"30px"}
        marginTop={"40px"}
      >
        <Text
          color={"blue.400"}
          as={"span"}
          textAlign={"center"}
          marginTop={"50px"}
          pt={"10px"}
        >
          What do we do ?
        </Text>
      </Heading>
      <Flex
        flexWrap="wrap"
        gridGap={16}
        py={8}
        justify="center"
        spacing={{ base: 6, lg: 8 }}
      >
        <OfferCard
          imageSrc="../../../honor.svg"
          title="Help individuals identify strengths, interests, and suitable career paths.
"
        />
        <OfferCard
          imageSrc="../../../data.svg"
          title="Provide tailored guidance based on comprehensive psychometric assessments.
"
        />
        <OfferCard
          imageSrc="../../../3.svg"
          title="Assist students and professionals in making informed education and career decisions.
"
        />
        <OfferCard
          imageSrc="../../../bookmark.svg"
          title="Support professionals in navigating career transitions or breaks confidently.
"
        />
        <OfferCard
          imageSrc="../../../5.svg"
          title="Offer up-to-date insights into industry trends and emerging opportunities.
."
        />
        <OfferCard
          imageSrc="../../../6.svg"
          title="Help individuals avoid common career mistakes by providing clarity on options
"
        />
        <OfferCard
          imageSrc="../../../data.svg"
          title="Guide professionals in enhancing their skills for better career prospects.
"
        />
        <OfferCard
          imageSrc="../../../dial.svg"
          title="Equip career changers with strategies to shift industries or roles smoothly.
"
        />
        <OfferCard
          imageSrc="../../../gift.svg"
          title="Alleviate career-related stress by offering clear, actionable roadmaps.
."
        />

        <OfferCard
          imageSrc="../../../data.svg"
          title="Ensure each individual finds a fulfilling career aligned with their personal goals
"
        />
      </Flex>
      <Box p={4} pt={10}>
      <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
        <Heading fontSize={{ base: '2xl', sm: '4xl' }} color={'blue.500'}fontWeight={'bold'}>
            Why Career Counseling is Required?
          </Heading>
        </Stack>

        <Container maxW={"5xl"} mt={12}>
          <Flex flexWrap="wrap" gridGap={6} justify="center">
            <Card
              heading={"Heading"}
              description={
                "Helps individuals choose a career that aligns with their strengths and market trends."
              }
              bgColor="blue.100"
            />
            <Card
              heading={"Heading"}
              description={
                "Reduces uncertainty and indecision during critical career transitions."
              }
               bgColor="pink.100"
            />
            <Card
              heading={"Heading"}
              description={
                "Provides working professionals with guidance to upskill or pivot into new roles."
              }
               bgColor="orange.100"
            />
            <Card
              heading={"Heading"}
              description={
                "Offers a systematic approach to long-term career satisfaction and success"
              }
               bgColor="red.100"
            />
          </Flex>
        </Container>
      </Box>
      <Box py={10} display="flex" justifyContent="center" alignItems="center" mt={'20px'}>
  <Stack spacing={6} direction={{ base: "column", sm: "row" }} alignItems="center">
    <Link href="/psychometrictest">
      <Button
        rounded={"full"}
        size={"lg"}
        fontWeight={"normal"}
        px={6}
        colorScheme={"blue"}
        bg={"blue.400"}
        _hover={{ bg: "blue.600", transform: "scale(1.1)" }}
      >
      Take the psychometric test today 


      </Button>
    </Link>
    </Stack>
    </Box>
    </Box>
  );
}
