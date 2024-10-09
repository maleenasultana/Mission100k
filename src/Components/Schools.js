import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  Image,
  Icon,
  useColorModeValue,
  FormControl,
  FormLabel,
  Input,
  Select,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import EnquiryForm from "./Enquiryform";

const Card = ({ heading, description, number, color }) => {
  return (
    <Box height={"300px"} width={"300px"} p={15}>
      <Box
        maxW={{ base: "full", md: "350px" }}
        w={"full"}
        overflow="hidden"
        p={4}
        py={10}
        borderRadius="50%"
        boxShadow="lg"
        bg={useColorModeValue("white", "gray.800")}
      >
        <Stack align={"center"} spacing={1}>
          <Box mt={4}>
            <Heading
              textAlign="center"
              size="2xl"
              color={color}
              fontWeight="bold"
              fontFamily="Exo, sans-serif"
            >
              {number}
            </Heading>
            <Text mt={3} fontSize={"sm"} textAlign={"center"}>
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

const OfferCard = ({ imageSrc, title }) => {
  return (
    <Box
      w={"full"}
      maxW={"300px"}
      p={5}
      py={5}
      display="flex"
      alignItems="center"
      bg={useColorModeValue("white", "gray.800")}
      height={"100px"}
    >
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

      <Box>
        <Heading fontSize={"md"}>{title}</Heading>
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
    console.log(formData);
  };

  return (
    <Container maxW={"7xl"}>
      <Box py={20}>
        <Image
          src="../../../lo-removebg.png"
          height={"100px"}
          width={"250px"}
        />
      </Box>
      <Stack
        align={"center"}
        spacing={{ base: 15, md: 6 }}
        py={{ base: 20, md: 18 }}
        direction={{ base: "column", md: "row" }}
      >
        <Stack flex={1} spacing={{ base: 20, md: 4 }}>
          <Heading
            lineHeight={1.1}
            fontWeight={600}
            fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}
          >
            <Text as={"span"} color={"blue.500"}>
              Student Wellbeing Program
            </Text>
          </Heading>
          <Text color={"gray.500"}>
            We offer professional counselling services at campus aimed at
            helping students improve their emotional well-being. Our platform
            connects them with experienced counsellors who guide them in
            managing stress, academic pressure, behavioural challenges, personal
            challenges, and students' overall well-being.
          </Text>
          <Text fontSize={{ base: "14", lg: "24" }} color={"gray.700"}>
            We aim to provide a healthy and balanced campus environment where
            students can thrive emotionally, mentally, and academically.
          </Text>
        </Stack>
        <Flex
          flex={1}
          justify={"center"}
          align={"center"}
          position={"relative"}
          w={"full"}
        >
          <Blob
            w={"100%"}
            h={"150%"}
            position={"absolute"}
            top={"-20%"}
            left={0}
            zIndex={-1}
            color={useColorModeValue("red.50", "red.400")}
          />
          <Box
            position={"absolute"}
            height={"350px"}
            rounded={"2xl"}
            width={"200"}
            overflow={"hidden"}
          >
            <Image
              alt={"Hero Image"}
              objectFit={"cover"}
              align={"center"}
              w={{ base: "100%", md: "auto" }}
              h={{ base: "auto", md: "100%" }}
              src={"../../../school-img.png"}
              py="8"
            
            />
          </Box>
        </Flex>
      </Stack>
<Box py={10}>
      <Flex
        flexWrap="wrap"
        gridGap={16}
        justify="center"
        pt={30}
        bg={"green.100"}
        width="100%"
        height={"auto"}
        px={{ base: 4, md: 0 }}
      >
        <Card
          number={"50%"}
          heading={"World Health Organization, 2021"}
          description={"of mental health conditions begin by age 14"}
          color={"red.500"}
        />
        <Card
          number={"60%"}
          heading={"National Center for School Mental Health, 2020"}
          description={
            "Students who receive school-based mental health support"
          }
          color={"green.500"}
        />
        <Card
          number={"13%"}
          heading={"APA, 2019"}
          description={
            "Students receiving mental health support and increase in academic success."
          }
          color={"green.500"}
        />
        <Card
          number={"1 in 7"}
          heading={"WHO, 2021"}
          description={"adolescents experience mental health disorders"}
          color={"red.500"}
        />
        <Card
          number={"70%"}
          heading={"National Institute for Health and Care Excellence, 2020"}
          description={"Talk therapy reduces anxiety in treated individuals"}
          color={"green.500"}
        />
      </Flex>
</Box>
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
          We offer a holistic approach to student well-being
        </Text>
      </Heading>

      <Flex
        flexWrap="wrap"
        gridGap={16}
        py={20}
        justify="center"
        spacing={{ base: 6, lg: 8 }}
      >
        <OfferCard
          imageSrc="../../../honor.svg"
          title="One-on-one counseling sessions for personal and academic support"
        />
        <OfferCard
          imageSrc="../../../data.svg"
          title="Group workshops on stress management and emotional skills"
        />
        <OfferCard
          imageSrc="../../../3.svg"
          title="Roleplays for practical problem-solving"
        />
        <OfferCard
          imageSrc="../../../bookmark.svg"
          title="Assessments to evaluate emotional well-being and progress"
        />
        <OfferCard
          imageSrc="../../../5.svg"
          title="Worksheets to help students set goals and track their growth"
        />
        <OfferCard
          imageSrc="../../../6.svg"
          title="Reference materials for continuous learning"
        />
        <OfferCard
          imageSrc="../../../data.svg"
          title="Self-help tools to promote independent development"
        />
        <OfferCard
          imageSrc="../../../dial.svg"
          title="Career counseling for future guidance"
        />
        <OfferCard
          imageSrc="../../../gift.svg"
          title="Parental guidance sessions to support overall well-being"
        />
      </Flex>

      <Stack
        align={"center"}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 25 }}
        direction={{ base: "column", md: "row" }}
      >
        <Stack flex={1} spacing={{ base: 40, md: 10 }}>
          <Heading
            lineHeight={1.1}
            fontWeight={600}
            fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}
          >
            <Text as={"span"} color={"blue.500"}>
              Early Childhood Well-being Support for pre-school
            </Text>
          </Heading>
          <Text color={"gray.500"}>
            We believe that emotional well-being starts early. Our program for
            preschool children focuses on creating a nurturing environment where
            kids can develop emotional skills, manage behaviour, and build
            resilience.
          </Text>
          <Text fontSize={{ base: "14", lg: "24" }} color={"gray.700"}>
            We equip parents with the tools to support their child's emotional
            growth, ensuring a strong foundation for their overall well-being.
          </Text>
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
            height={"350px"}
            rounded={"2xl"}
            width={"200"}
            overflow={"hidden"}
          >
            <Image
              alt={"Hero Image"}
              objectFit={"cover"}
              align={"center"}
              w={{ base: "90%", md: "auto" }}
              h={{ base: "auto", md: "90%" }}
              src={"../../../2.jpg"}
            />
          </Box>
        </Flex>
      </Stack>
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
      <EnquiryForm />
    </Container>
  );
}

// Blob Component
const Blob = (props) => {
  return (
    <Box
      position="absolute"
      bg="purple.200"
      borderRadius="50%"
      transform="translate(-50%, -50%)"
      width="200%"
      height="200%"
      zIndex={0}
      {...props}
    />
  );
};
