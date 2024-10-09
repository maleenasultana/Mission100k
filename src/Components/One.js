"use client";

import {
    Container,
    Stack,
    Flex,
    Box,
    Heading,
    Text,
    Image,
    IconButton,
    Icon,
    useColorModeValue,
    FormControl,
    FormLabel,
    Input,
    Select,
    Textarea,
    VStack,
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Link,
    ListItem,
    UnorderedList,
    SimpleGrid,
} from "@chakra-ui/react";
import { useState } from "react";
import Enquiryform from "./Enquiryform";
import { ChevronDownIcon } from "@chakra-ui/icons";
const OfferCard = ({ imageSrc, title }) => {
  return (
    <Box
      w={"full"}
      maxW={"350px"}
      p={2}
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
        height={"50px"}
        width={"50px"}
      />

      {/* Text on the right side */}
      <Box>
        <Heading fontSize={"lg"}>{title}</Heading>
      </Box>
    </Box>
  );
};

const Card = ({ heading, description, number, color }) => {
  return (
    <Box>
    <Box
      maxW={{ base: "full", md: "250px" }}
      w={{ base: "100%", md: "auto" }} // Full width on small screens, auto on medium+
      h={{ base: "auto", md: "100%" }}
     
      overflow="hidden"
      p={5}
      borderRadius="50%"
      boxShadow="lg"
      bg={useColorModeValue("white", "gray.800")}
    >
      <Stack align={"center"} spacing={2}>
        <Box mt={2}>
          <Heading
            textAlign="center"
            size="2xl"
            color={color}
            fontWeight="bold"
          >
            {number}
          </Heading>
          <Text mt={3} fontSize={"md"} textAlign={"center"}>
            {description}
          </Text>
        </Box>
       
      </Stack>
      
    </Box>
    <Box>
    <Text fontSize="sm" color="gray.500" textAlign="center">
      *Source: {heading}
    </Text>
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
    <Box>
        {/* <Image src="../../../lo-removebg.png" height={'200px'} width={'350px'} />
      */}
    <Box
      maxW="9xl"
      mx={"auto"}
      pt={5}
      px={{ base: 2, sm: 12, md: 17 }}
      // margin={"40px"}
      borderRadius={"50%"}
    >
      <Stack align={'center'}
        spacing={{ base: 8, md: 6 }}
        py={{ base: 10, md: 18 }}
        direction={{ base: 'column', md: 'row' }}>
        <Flex p={8} flex={1} align={"center"} justify={"center"}>
          <Stack spacing={6} w={"full"} maxW={"lg"}>
            <Heading lineHeight={1.1}
            fontWeight={600}
            fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}>
              <Text color={"blue.400"} as={"span"}>
              1:1 personalized counselling service
              </Text>{" "}
            </Heading>
            <Text fontSize={{ base: "md", lg: "lg" }} color={"gray.500"}>
            At Mission 100K we aim to ensure that all emotional well-being
            services are provided at an affordable price by experts
            </Text>
            <Text fontSize={{ base: "md", lg: "xl" }} color={"gray.700"}>
            Improve overall emotional well-being with Mission 100K’s 1:1
            personalized counselling service
          </Text>
            <Box  position={'absolute'}
            height={'350px'}
            rounded={'2xl'}
            width={'200'}
            overflow={'hidden'}>
              <Stack
                direction={{ base: "column", md: "row" }}
                spacing={6}
              ></Stack>
            </Box>
          </Stack>
        </Flex>
        <Flex flex={1}>
          <Image
            alt={"Login Image"}
            w={{ base: "90%", md: "auto" }} // Full width on small screens, auto on medium+
            h={{ base: "auto", md: "90%" }}
            py={10}
            src={"../../../1on1.png"}
          />
        </Flex>
      </Stack>
      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 3 }} // 1 column on small screens, 2 on medium, and 4 on large
        spacing={2} // Adjust spacing between cards
        mt={{ base: 5, md: 10 }} // Add margin-top for spacing
      >
        <Card description={"100% confidential & secure"} />

        <Card description={"Ease of access"} />
        <Card description={"Trust & Integrity"} />
        <Card description={"Built with empathy"} />

        <Card description={"Unbiased"} />
        <Card description={"Practical Approach"} />
      </SimpleGrid>
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
          We provide holistic mental health through a variety of interventions.
        </Text>
      </Heading>
      <Flex
        flexWrap="wrap"
        gridGap={16}
        justify="center"
        pt={30}
        width="100%"
        height={'auto'}
        px={{ base: 4, md: 0 }}>
        <Card
          number={"57%"}
          heading={"Gallup, 2020"}
          description={"of employees experience workplace stress."}
          color={"red.500"}
        />
        <Card
          number={"1 in 10"}
          heading={"Mental Health America, 2021"}
          description={"employees seek mental health support."}
          color={"red.500"}
        />
        <Card
          number={"40%"}
          heading={"World Health Organization, 2021"}
          description={"of employees show no obvious signs of mental distress."}
          color={"red.500"}
        />
      </Flex>
      <Text
        textAlign={"center"}
        fontSize="25px"
        fontWeight="500"
        color={"grey.500"}
        fontFamily={"Exo, sans-serif"}
        py={20}
      >
        Join us to create a mentally healthy workplace!
      </Text>
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
          What we offer:
        </Text>{" "}
      </Heading>
      <Flex
        flexWrap="wrap"
        gridGap={16}
        py={20}
        justify="center"
        spacing={{ base: 6, lg: 8 }}
      >
        <OfferCard
          imageSrc="../../../gift.svg"
          title="On-demand personalized counselling."
        />
        <OfferCard
          imageSrc="../../../dial.svg"
          title="Interactive group sessions."
        />
        <OfferCard
          imageSrc="../../../data.svg"
          title="Live webinars and expert-led workshops."
        />
        <OfferCard imageSrc="../../../6.svg" title="Self-help resources." />
        <OfferCard imageSrc="../../../5.svg" title="Expert assessments." />
        <OfferCard
          imageSrc="../../../bookmark.svg"
          title="Worksheets for goal setting and progress tracking."
        />
        <OfferCard
          imageSrc="../../../3.svg"
          title="Comprehensive reports and detailed insights."
        />
      </Flex>

      <Heading
        fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
        textAlign={"center"}
        pb={"20px"}
        pt={{ base: "90", lg: "50px" }}
        margin={"30px"}
        marginTop={"40px"}
      >
        <Text color={"blue.400"} as={"span"} textAlign={"center"} marginTop={'50px'} pt={'10px'}>
        Request a call back
        </Text>
      </Heading>
      {/* <Box py={{ base: 3, md: 5 }}>
        <Box
          maxW={{ base: "full", md: "100%" }} // Set a maximum width for larger screens
          w={"full"}
          borderWidth="1px"
          borderRadius="lg"
          overflow="hidden"
          p={{ base: 3, md: 5 }} // Responsive padding
          backgroundColor={"blue.100"}
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center" // Center-align content
          textAlign="center" // Center tex
        >
          Depression - One in 20 Indians suffers from depression
        </Box>

        <Menu>
          <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
            Know More
          </MenuButton>
          <MenuList>
            <MenuItem>Persistent sadness</MenuItem>
            <MenuItem>Lack of Interest</MenuItem>
            <MenuItem>Constant fatigue</MenuItem>
            <MenuItem>Lack of energy</MenuItem>
            <MenuItem>Feeling worthless, hopeless or guilty</MenuItem>
            <MenuItem>Difficulty concentrating</MenuItem>
            <MenuItem>Irregular sleeping & eating patterns</MenuItem>
          </MenuList>
        </Menu>
      </Box>

      <Box py={{ base: 3, md: 5 }}>
        <Box
          maxW={{ base: "full", md: "100%" }} // Set a maximum width for larger screens
          w={"full"}
          borderWidth="1px"
          borderRadius="lg"
          overflow="hidden"
          p={{ base: 3, md: 5 }} // Responsive padding
          backgroundColor={"blue.100"}
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center" // Center-align content
          textAlign="center" // Center text
        >
          Anxiety - 3.5% of India's population has an anxiety-related disorder
        </Box>

        <Menu>
          <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
            Know More
          </MenuButton>
          <MenuList>
            <MenuItem>Uncontrollable worry</MenuItem>
            <MenuItem>Feeling Restless</MenuItem>
            <MenuItem>Unable to focus on a single task</MenuItem>

            <MenuItem>Trouble sleeping</MenuItem>
            <MenuItem>Feeling fatigued</MenuItem>
            <MenuItem>Tense muscles</MenuItem>
            <MenuItem>Getting irritated easily </MenuItem>
          </MenuList>
        </Menu>
      </Box>

      <Box py={{ base: 3, md: 5 }}>
        <Box
          maxW={{ base: "full", md: "100%" }} // Set a maximum width for larger screens
          w={"full"}
          borderWidth="1px"
          borderRadius="lg"
          overflow="hidden"
          p={{ base: 3, md: 5 }} // Responsive padding
          backgroundColor={"blue.100"}
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center" // Center-align content
          textAlign="center" // Center text
        >
          OCD - 1 in 40 people, will develop OCD, and 1.2% of people have OCD in
          any 12 months
        </Box>
      </Box>

      <Box py={{ base: 3, md: 5 }}>
        <Box
          maxW={{ base: "full", md: "100%" }} // Set a maximum width for larger screens
          w={"full"}
          borderWidth="1px"
          borderRadius="lg"
          overflow="hidden"
          p={{ base: 3, md: 5 }} // Responsive padding
          backgroundColor={"blue.100"}
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center" // Center-align content
          textAlign="center" // Center text
        >
          Obsessions- Obsessions are unwanted, repetitive, and intrusive
          thoughts, which tend to cause a lot of anxiety and distress.
        </Box>
      </Box>

      <Box py={{ base: 3, md: 5 }}>
        <Box
          maxW={{ base: "full", md: "100%" }} // Set a maximum width for larger screens
          w={"full"}
          borderWidth="1px"
          borderRadius="lg"
          overflow="hidden"
          p={{ base: 3, md: 5 }} // Responsive padding
          backgroundColor={"blue.100"}
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center" // Center-align content
          textAlign="center" // Center text
        >
          Compulsions- Compulsions are behaviours you feel you must repeatedly
          engage in to alleviate your distress.
        </Box>
      </Box>

      <Box py={{ base: 3, md: 5 }}>
        <Box
          maxW={{ base: "full", md: "100%" }} // Set a maximum width for larger screens
          w={"full"}
          borderWidth="1px"
          borderRadius="lg"
          overflow="hidden"
          p={{ base: 3, md: 5 }} // Responsive padding
          backgroundColor={"blue.100"}
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center" // Center-align content
          textAlign="center" // Center text
        >
          Bipolar Disorder - 1 in 150 persons or 0.3%of Indians live with
          bipolar disorder with 70 per cent of the remaining untreated
        </Box>

        <Menu>
          <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
            Know More
          </MenuButton>
          <MenuList>
            <UnorderedList>
              <MenuItem>Manic Episodes</MenuItem>
              <ListItem>Extremely Happy</ListItem>
              <ListItem>Energetic</ListItem>
              <ListItem>Over Confident</ListItem>
              <ListItem>Over Talkative</ListItem>
              <ListItem>Impulsive</ListItem>
            </UnorderedList>
            <UnorderedList>
              <MenuItem>Depressive Episodes</MenuItem>
              <ListItem>Intense Sadness</ListItem>
              <ListItem>Lack of energy</ListItem>
              <ListItem>Numbness</ListItem>
              <ListItem>Lack of concentration</ListItem>
              <ListItem>Feeling of Guilt</ListItem>
            </UnorderedList>
          </MenuList>
        </Menu>
      </Box>

      <Box py={{ base: 3, md: 5 }}>
        <Box
          maxW={{ base: "full", md: "100%" }} // Set a maximum width for larger screens
          w={"full"}
          borderWidth="1px"
          borderRadius="lg"
          overflow="hidden"
          p={{ base: 3, md: 5 }} // Responsive padding
          backgroundColor={"blue.100"}
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center" // Center-align content
          textAlign="center" // Center text
        >
          ADHD - 10 million Indian children are diagnosed with ADHD annually
        </Box>

        <Menu>
          <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
            Know More
          </MenuButton>
          <MenuList>
            <MenuItem>
              Difficulty paying attention, restlessness, and impulsivity
            </MenuItem>
            <MenuItem>
              Trouble focusing, prioritizing & organizing tasks
            </MenuItem>
            <MenuItem>Forgetfulness & rushing through tasks</MenuItem>
            <MenuItem>Struggling to listen when others are talking</MenuItem>
            <MenuItem>Finding it hard to manage time effectively</MenuItem>
            <MenuItem>Trouble relaxing & difficulty waiting in line</MenuItem>
          </MenuList>
        </Menu>
      </Box>
      <Box py={{ base: 3, md: 5 }}>
        <Box
          maxW={{ base: "full", md: "100%" }} // Set a maximum width for larger screens
          w={"full"}
          borderWidth="1px"
          borderRadius="lg"
          overflow="hidden"
          p={{ base: 3, md: 5 }} // Responsive padding
          backgroundColor={"blue.100"}
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center" // Center-align content
          textAlign="center" // Center text
        >
          Social Anxiety - One in seven Indians suffer from a social anxiety
          disorder
        </Box>

        <Menu>
          <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
            Know More
          </MenuButton>
          <MenuList>
            <MenuItem>Intense fear during social interactions</MenuItem>
            <MenuItem>
              Intense anxiety when you're anticipating a social interaction
            </MenuItem>
            <MenuItem>Fear that others will notice your nervousness</MenuItem>

            <MenuItem>Fear of interacting with strangers</MenuItem>
            <MenuItem>
              Avoiding situations where you're the center of attention
            </MenuItem>
            <MenuItem>
              Physical symptoms like sweating or breathlessness during social
              situations.
            </MenuItem>
          </MenuList>
        </Menu>
      </Box>

      <Box p={4} pt={10}>
        <Stack spacing={4} as={Container} maxW={"3xl"} textAlign={"center"}>
          <Heading
            fontSize={{ base: "2xl", sm: "4xl" }}
            color={"blue.500"}
            fontWeight={"bold"}
          >
            Other Services
          </Heading>
        </Stack>
        <Flex
          flexWrap="wrap"
          gridGap={16}
          py={20}
          justify="center"
          spacing={{ base: 6, lg: 8 }}
        >
          <OfferCard imageSrc="../../../honor.svg" title="Eating Disorder" />
          <OfferCard
            imageSrc="../../../data.svg"
            title="Relationship Counseling"
          />
          <OfferCard imageSrc="../../../3.svg" title="Stress Management" />
          <OfferCard imageSrc="../../../bookmark.svg" title="Couples therapy" />
          <OfferCard imageSrc="../../../5.svg" title="Schizophrenia" />
          <OfferCard imageSrc="../../../6.svg" title="Mindfulnes" />
        </Flex>
      </Box> */}
      <Text
        textAlign={"center"}
        fontSize="25px"
        fontWeight="500"
        color={"grey.500"}
        fontFamily={"Exo, sans-serif"}
      >
        You are Never alone!! Reach out to us for any kind of support
      </Text>
      <Box
        py={10}
        display="flex"
        justifyContent="center"
        alignItems="center"
        mt={"20px"}
      >
        {/* <Stack
          spacing={6}
          direction={{ base: "column", sm: "row" }}
          alignItems="center"
        >
          <Link href="/enquiryform">
            <Button
              rounded={"full"}
              size={"lg"}
              fontWeight={"normal"}
              px={6}
              colorScheme={"blue"}
              bg={"blue.400"}
              _hover={{ bg: "blue.600", transform: "scale(1.1)" }}
            >
              Book Your Session
            </Button>
          </Link>
        </Stack> */}
      </Box>
      <Heading
        fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
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
          Request a call back
        </Text>
      </Heading>
    <Enquiryform/>
    
    </Box> 
    </Box>
  );
}
