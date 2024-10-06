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
} from "@chakra-ui/react";
import { useState } from "react";
import { ChevronDownIcon } from "@chakra-ui/icons";

const Card = ({ heading, description, number, color }) => {
  return (
    <Box height={"250px"} width={"300px"} p={10}>
      <Box
        maxW={{ base: "full", md: "375px" }}
        height={"100"}
        overflow="hidden"
        p={4}
        borderRadius="10%"
        boxShadow="xl"
        backgroundColor={"blue.100"}
      >
        <Stack align={"center"} spacing={1}>
          <Box mt={4}>
            <Heading
              textAlign="center"
              size="2xl"
              color={color}
              fontWeight="bold"
              font-family="Exo, sans-serif"
            >
              {number}
            </Heading>
            <Text
              mt={3}
              fontSize={"lg"}
              textAlign={"center"}
              fontWeight={600}
              fontFamily={"Exo, sans-serif"}
            >
              {description}
            </Text>
          </Box>
        </Stack>
      </Box>
      {/* <Box>
        <Text fontSize="sm" color="gray.500" textAlign="center">
          *Source: {heading}
        </Text>
      </Box> */}
    </Box>
  );
};
const OfferCard = ({ imageSrc, title }) => {
  return (
    <Box
      w={"full"}
      maxW={"300px"}
      p={5}
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
export default function CallToActionWithVideo() {
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
    <Container maxW={"7xl"}>
      {/* <Box>
        <Image
          src="../../../lo-removebg.png"
          height={"200px"}
          width={"350px"}
        />
      </Box> */}
      <Stack
        align={"center"}
        spacing={{ base: 8, md: 6 }}
        py={{ base: 10, md: 18, lg: 20 }}
        direction={{ base: "column", md: "row" }}
      >
        <Stack flex={1} spacing={{ base: 6, md: 8 }}>
          <Heading
            lineHeight={1.1}
            fontWeight={600}
            fontSize={{ base: "2xl", sm: "3xl", lg: "4xl" }}
          >
            <Text as={"span"} color={"blue.500"}>
              1:1 personalized counselling service
            </Text>
          </Heading>
          <Text color={"gray.500"}>
            At Mission 100K we aim to ensure that all emotional well-being
            services are provided at an affordable price by experts
          </Text>
          <Text fontSize={{ base: "14", lg: "24" }} color={"gray.700"}>
            Improve overall emotional well-being with Mission 100K’s 1:1
            personalized counselling service
          </Text>
          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={{ base: "column", sm: "row" }}
          ></Stack>
        </Stack>
        <Flex
          flex={1}
          justify={"center"}
          align={"center"}
          position={"relative"}
          w={"full"}
        >
          <Box
            position={"absolute"}
            height={"250px"}
            rounded={"2xl"}
            boxShadow={"2xl"}
            width={"200"}
            overflow={"hidden"}
          >
            <Image
              alt={"Hero Image"}
              fit={"cover"}
              align={"center"}
              w={"450px"}
              h={"300px"}
              src={"../../../1on1.png"}
            />
          </Box>
        </Flex>
      </Stack>

      <Flex flexWrap="wrap" gridGap={3} justify="center" height={"500px"}>
        <Card description={"100% confidential & secure     "} />
        <Card description={"99.9% uptime  "} />
        <Card description={" Ease of access "} />

        <Card description={"Trust & Integrity"} />
        <Card description={"Built with empathy   "} />
        <Card description={"  Inclusive     "} />
        <Card description={"Unbiased "} />
        <Card description={" Practical Approach"} />
      </Flex>
      <Heading
        fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
        textAlign={"center"}
        pb={"20px"}
        pt={{ base: "30", lg: "20px" }}
        margin={"30px"}
        marginTop={"40px"}
      >
        {/* <Text
            as={'span'}
            position={'relative'}
            _after={{
              content: "''",
              width: 'full',
              height: useBreakpointValue({ base: '20%', md: '30%' }),
              position: 'absolute',
              bottom: 1,
              left: 0,
              bg: 'blue.400',
              zIndex: -1,
            }}>
           SEO - Website
          </Text> */}
        <br />{" "}
        <Text
          color={"blue.400"}
          as={"span"}
          textAlign={"center"}
          marginTop={"50px"}
          pt={"10px"}
        >
          We provide holistic mental health through a variety of interventions.
        </Text>{" "}
      </Heading>
      <Box py={5}>
        <Box
          maxW={{ base: "full" }}
          w={"full"}
          borderWidth="1px"
          borderRadius="lg"
          overflow="hidden"
          p={5}
          backgroundColor={"blue.100"}
          display="flex"
          flexDirection="column"
          justifyContent="center"
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
      <Box py={5}>
        <Box
          maxW={{ base: "full" }}
          w={"full"}
          borderWidth="1px"
          borderRadius="lg"
          overflow="hidden"
          p={5}
          backgroundColor={"red.100"}
          display="flex"
          flexDirection="column"
          justifyContent="center"
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

      <Box py={5}>
        <Box
          maxW={{ base: "full" }}
          w={"full"}
          borderWidth="1px"
          borderRadius="lg"
          overflow="hidden"
          p={5}
          backgroundColor={"blue.100"}
          display="flex"
          flexDirection="column"
          justifyContent="center"
        >
          OCD - 1 in 40 people, will develop OCD, and 1.2% of people have OCD in
          any 12 months
        </Box>
      </Box>

      <Box py={5}>
        <Box
          maxW={{ base: "full" }}
          w={"full"}
          borderWidth="1px"
          borderRadius="lg"
          overflow="hidden"
          p={5}
          backgroundColor={"pink.100"}
          display="flex"
          flexDirection="column"
          justifyContent="center"
        >
          Obsessions- Obsessions are unwanted, repetitive, and intrusive
          thoughts, which tend to cause a lot of anxiety and distress.
        </Box>
      </Box>

      <Box py={5}>
        <Box
          maxW={{ base: "full" }}
          w={"full"}
          borderWidth="1px"
          borderRadius="lg"
          overflow="hidden"
          p={5}
          backgroundColor={"blue.100"}
          display="flex"
          flexDirection="column"
          justifyContent="center"
        >
          Compulsions- Compulsions are behaviours you feel you must repeatedly
          engage in to alleviate your distress.
        </Box>
      </Box>

      <Box py={5}>
        <Box
          maxW={{ base: "full" }}
          w={"full"}
          borderWidth="1px"
          borderRadius="lg"
          overflow="hidden"
          p={5}
          backgroundColor={"pink.100"}
          display="flex"
          flexDirection="column"
          justifyContent="center"
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
              <MenuItem>Manic Episodes
              </MenuItem>
              <ListItem>Extremely Happy
              </ListItem>
              <ListItem>Energetic
              </ListItem>
              <ListItem>Over Confident
              </ListItem>
              <ListItem>Over Talkative
              </ListItem>
              <ListItem>Impulsive
              </ListItem>
            </UnorderedList>
            <UnorderedList>
              <MenuItem>Depressive Episodes

              </MenuItem>
              <ListItem>Intense Sadness

              </ListItem>
              <ListItem>Lack of energy

              </ListItem>
              <ListItem>Numbness

              </ListItem>
              <ListItem>Lack of concentration

              </ListItem>
              <ListItem>Feeling of Guilt
              </ListItem>
            </UnorderedList>
         
          </MenuList>
        </Menu>
      </Box>

      <Box py={5}>
        <Box
          maxW={{ base: "full" }}
          w={"full"}
          borderWidth="1px"
          borderRadius="lg"
          overflow="hidden"
          p={5}
          backgroundColor={"blue.100"}
          display="flex"
          flexDirection="column"
          justifyContent="center"
        >
         ADHD - 10 million Indian children are diagnosed with ADHD annually


        </Box>

        <Menu>
          <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
            Know More
          </MenuButton>
          <MenuList>
            <MenuItem>Difficulty paying attention, restlessness, and impulsivity
            </MenuItem>
            <MenuItem>Trouble focusing, prioritizing & organizing tasks
            </MenuItem>
            <MenuItem>Forgetfulness & rushing through tasks</MenuItem>
            <MenuItem>Struggling to listen when others are talking</MenuItem>
            <MenuItem>Finding it hard to manage time effectively</MenuItem>
            <MenuItem>Trouble relaxing & difficulty waiting in line</MenuItem>
           
          </MenuList>
        </Menu>
      </Box>
      <Box py={5}>
        <Box
          maxW={{ base: "full" }}
          w={"full"}
          borderWidth="1px"
          borderRadius="lg"
          overflow="hidden"
          p={5}
          backgroundColor={"red.100"}
          display="flex"
          flexDirection="column"
          justifyContent="center"
        >
         Social Anxiety - One in seven Indians suffer from a social anxiety disorder

        </Box>

        <Menu>
          <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
            Know More
          </MenuButton>
          <MenuList>
            <MenuItem>Intense fear during social interactions
           </MenuItem>
            <MenuItem>Intense anxiety when you're anticipating a social interaction
            </MenuItem>
            <MenuItem>Fear that others will notice your nervousness
            </MenuItem>

            <MenuItem>Fear of interacting with strangers</MenuItem>
            <MenuItem>Avoiding situations where you're the center of attention
            </MenuItem>
            <MenuItem>Physical symptoms like sweating or breathlessness during social situations.
            </MenuItem>
            </MenuList>
        </Menu>
      </Box>
      <Box p={4} pt={10}>
      <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
        <Heading fontSize={{ base: '2xl', sm: '4xl' }} color={'blue.500'}fontWeight={'bold'}>
        Other Services
          </Heading>
        </Stack>
      <Flex
        flexWrap="wrap"
        gridGap={16}
        py={8}
        justify="center"
        spacing={{ base: 6, lg: 8 }}
      >
        <OfferCard
          imageSrc="../../../honor.svg"
          title="Eating Disorder
"
        />
        <OfferCard
          imageSrc="../../../data.svg"
          title="Relationship Counseling."
        />
        <OfferCard
          imageSrc="../../../3.svg"
          title="Stress Management"
        />
        <OfferCard
          imageSrc="../../../bookmark.svg"
          title="Couples therapy
."
        />
        <OfferCard
          imageSrc="../../../5.svg"
          title="Schizophrenia."
        />
        <OfferCard
          imageSrc="../../../6.svg"
          title="Mindfulness
"
        />
        
      </Flex>
      </Box>
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
        <Stack
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
        </Stack>
      </Box>
    </Container>
  );
}
