import {
    Container,
    Stack,
    Flex,
    Box,
    Heading,
    Text,
    Button,
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
  } from '@chakra-ui/react'
  import { useState } from "react";

  const Card = ({ heading, description, number, color }) => {
    return (
      <Box height={'250px'} width={'300px'} p={10} >
      <Box
        maxW={{ base: "full", md: "275px" }}
        w={"full"}
        overflow="hidden"
        p={4}
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
              font-family= "Exo, sans-serif"
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
      <Container maxW={'7xl'}>
<Box>
<Image src="../../../lo-removebg.png" height={'200px'} width={'350px'} />
</Box>
        <Stack
          align={'center'}
          spacing={{ base: 8, md: 6 }}
          py={{ base: 10, md: 18 }}
          direction={{ base: 'column', md: 'row' }}>
            
          <Stack flex={1} spacing={{ base: 5, md: 4 }} >
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}>
              {/* <Text
                as={'span'}
                position={'relative'}
                _after={{
                  content: "''",
                  width: 'full',
                  height: '30%',
                  position: 'absolute',
                  bottom: 1,
                  left: 0,
                  bg: 'red.400',
                  zIndex: -1,
                }}>
                Write once,
              </Text> */}
              <br />
              <Text as={'span'} color={'blue.500'}>
              Student Wellbeing Program
              </Text>
            </Heading>
            <Text color={'gray.500'}>
            We offer professional counselling services at campus aimed at
              helping students improve their emotional well-being. Our platform
              connects them with experienced counsellors who guide them in
              managing stress, academic pressure, behavioural challenges,
              personal challenges, and students' overall well-being.
            </Text>
            <Text fontSize={{ base: "14", lg: "24" }} color={"gray.700"}>
              We aim to provide a healthy and balanced campus environment where
              students can thrive emotionally, mentally, and academically.
            </Text>
            <Stack spacing={{ base: 4, sm: 6 }} direction={{ base: 'column', sm: 'row' }}>
              {/* <Button
                rounded={'full'}
                size={'lg'}
                fontWeight={'normal'}
                px={6}
                colorScheme={'red'}
                bg={'red.400'}
                _hover={{ bg: 'red.500' }}>
                Get started
              </Button>
              <Button
                rounded={'full'}
                size={'lg'}
                fontWeight={'normal'}
                px={6}
                // leftIcon={<PlayIcon h={4} w={4} color={'gray.300'} />}
                >
                How It Works
              </Button> */}
            </Stack>
          </Stack>
          <Flex
            flex={1}
            justify={'center'}
            align={'center'}
            position={'relative'}
            w={'full'}>
            <Blob
              w={'100%'}
              h={'150%'}
              position={'absolute'}
              top={'-20%'}
              left={0}
              zIndex={-1}
              color={useColorModeValue('red.50', 'red.400')}
            />
            <Box
              position={'absolute'}
              height={'350px'}
              rounded={'2xl'}
            //   boxShadow={'2xl'}
              width={'200'}
              overflow={'hidden'}>
              {/* <IconButton
                aria-label={'Play Button'}
                variant={'ghost'}
                _hover={{ bg: 'transparent' }}
                // icon={<PlayIcon w={12} h={12} />}
                size={'lg'}
                color={'white'}
                position={'absolute'}
                left={'50%'}
                top={'50%'}
                transform={'translateX(-50%) translateY(-50%)'}
              /> */}
              <Image
                alt={'Hero Image'}
                fit={'cover'}
                align={'center'}
                w={'260%'}
                h={'100%'}
                src={
                  '../../../school-img.png'
                }
             
              />
            </Box>
          </Flex>
        </Stack>

        <Flex flexWrap="wrap" gridGap={16} justify="center" pt={30} bg={'green.100'} height={'700px'} >
        <Card
          number={"50%"}
          heading={"World Health Organization, 2021"}
          description={"of mental health conditions begin by age 14."}
          color={'red.500'}
        />
        <Card
          number={"60%"}
          heading={"National Center for School Mental Health, 2020"}
          description={
            "Students who receive school-based mental health support"
             }
             color={'green.500'}
        />
        <Card
          number={"13%"}
          heading={"APA, 2019"}
          description={
            "Students receiving mental health support and increase in academic success"
          }
          color={'green.500'}
        />
        <Card
          number={"1 in 7"}
          heading={"WHO, 2021)"}
          description={"adolescents experiences and  mental health disorders"}
          color={'red.500'}
        />

        <Card
          number={"70%"}
          heading={"National Institute for Health and Care Excellence, 2020"}
          description={"Talk therapy reduces anxiety in treated individuals"}
          color={'green.500'}
        />
        </Flex>
        <Heading
        fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
        textAlign={"center"}
        pb={"20px"}
        pt={{base:"90",lg: "50px"}}
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
        <Text color={"blue.400"} as={"span"} textAlign={"center"} marginTop={'50px'} pt={'10px'}>
          We offer a holistic approach to student well-being
        </Text>{" "}
      </Heading>
      <Flex flexWrap="wrap" gridGap={16} py={20} justify="center" spacing={{base: 6, lg:8}}>
        <OfferCard 
          imageSrc="../../../honor.svg"
          title="One-on-one counseling sessions for personal and academic support."
        />
        <OfferCard 
          imageSrc="../../../data.svg"
          title="Group workshops on stress management and emotional skills."
        />
        <OfferCard
          imageSrc="../../../3.svg"
          title="Roleplays for practical problem-solving."
        />
        <OfferCard
          imageSrc="../../../bookmark.svg"
          title="Assessments to evaluate emotional well-being and progress"
        />
        <OfferCard
          imageSrc="../../../5.svg"
          title="Worksheets to help students set goals and track their growth."
        />
        <OfferCard
          imageSrc="../../../6.svg"
          title="Reference materials for continuous learning.

"
        />
        <OfferCard
          imageSrc="../../../data.svg"
          title="Self-help tools to promote independent development."
        />
        <OfferCard
          imageSrc="../../../dial.svg"
          title="Career counseling for future guidance."
        />
        <OfferCard
          imageSrc="../../../gift.svg"
          title="Parental guidance sessions to support overall well-being."
        />
      </Flex>
      <Stack
          align={'center'}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 18, md: 25 }}
          direction={{ base: 'column', md: 'row' }}>
      <Stack flex={1} spacing={{ base: 5, md: 10 }}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}>
              {/* <Text
                as={'span'}
                position={'relative'}
                _after={{
                  content: "''",
                  width: 'full',
                  height: '30%',
                  position: 'absolute',
                  bottom: 1,
                  left: 0,
                  bg: 'red.400',
                  zIndex: -1,
                }}>
                Write once,
              </Text> */}
              <br />
              <Text as={'span'} color={'blue.500'}>
              Early Childhood Well-being Support for pre-school
              </Text>
            </Heading>
            <Text color={'gray.500'}>
            We believe that emotional well-being starts early. Our program for
              preschool children focuses on creating a nurturing environment
              where kids can develop emotional skills, manage behaviour, and
              build resilience.
            </Text>
            <Text fontSize={{ base: "14", lg: "24" }} color={"gray.700"}>
            them with the tools to support their child's emotional growth,
            ensuring a strong foundation for their overall well-being.
            </Text>
            <Stack spacing={{ base: 4, sm: 6 }} direction={{ base: 'column', sm: 'row' }}>
              {/* <Button
                rounded={'full'}
                size={'lg'}
                fontWeight={'normal'}
                px={6}
                colorScheme={'red'}
                bg={'red.400'}
                _hover={{ bg: 'red.500' }}>
                Get started
              </Button>
              <Button
                rounded={'full'}
                size={'lg'}
                fontWeight={'normal'}
                px={6}
                // leftIcon={<PlayIcon h={4} w={4} color={'gray.300'} />}
                >
                How It Works
              </Button> */}
            </Stack>
          </Stack>
          <Flex
            flex={1}
            justify={'center'}
            align={'center'}
            position={'relative'}
            w={'full'}>
            <Blob
              w={'100%'}
              h={'150%'}
              position={'absolute'}
              top={'-20%'}
              left={0}
              zIndex={-1}
              color={useColorModeValue('red.50', 'red.400')}
            />
            <Box
              position={'absolute'}
              height={'350px'}
              rounded={'2xl'}
            //   boxShadow={'2xl'}
              width={'200'}
              overflow={'hidden'}>
              {/* <IconButton
                aria-label={'Play Button'}
                variant={'ghost'}
                _hover={{ bg: 'transparent' }}
                // icon={<PlayIcon w={12} h={12} />}
                size={'lg'}
                color={'white'}
                position={'absolute'}
                left={'50%'}
                top={'50%'}
                transform={'translateX(-50%) translateY(-50%)'}
              /> */}
              <Image
                alt={'Hero Image'}
                fit={'cover'}
                align={'center'}
                w={'260%'}
                h={'100%'}
                src={
                  '../../../2.jpg'
                }
              />
            </Box>
          </Flex>
        </Stack>
        <Box>
        <Heading
          fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
          textAlign={"center"}
          pt={"20px"}
          marginTop={"40px"}
          marginBottom={"2px"}
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
          <Text color={"blue.400"} as={"span"} textAlign={"center"}>
            EnquiryForm
          </Text>{" "}
        </Heading>
      </Box>
      <Box margin={"30px"}></Box>
      <Stack
        spacing={{ base: 4, sm: 6 }}
        direction={{ base: "column", sm: "row" }}
        py={"20pxs"}
      >
        {/* <Button
          rounded={'full'}
          size={'lg'}
          fontWeight={'normal'}
          px={9}
          colorScheme={'blue'}
          bg={'blue.400'}
          _hover={{ bg: 'blue.600', transform: 'scale(1.1)' }}
          py={'20px'}>
          <Link to="/">Book Your Session Now</Link>
        </Button> */}

        <Box
          maxW="md"
          mx="auto"
          mt={10}
          p={6}
          border="1px"
          borderColor="gray.300"
          borderRadius="md"
          boxShadow="lg"
        >
          <form onSubmit={handleSubmit} mt="30px">
            <VStack spacing={4} align="start">
              <FormControl id="name" isRequired>
                <FormLabel>Name:</FormLabel>
                <Input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Please enter your name"
                />
              </FormControl>

              <FormControl id="contactNumber" isRequired>
                <FormLabel>Contact Number:</FormLabel>
                <Input
                  type="tel"
                  name="contactNumber"
                  value={formData.contactNumber}
                  onChange={handleChange}
                  placeholder="Please enter your contact number"
                />
              </FormControl>

              <FormControl id="email" isRequired>
                <FormLabel>Email ID:</FormLabel>
                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Please enter your email address"
                />
              </FormControl>

              <FormControl id="service" isRequired>
                <FormLabel>What Service Are You Interested In?</FormLabel>
                <Select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  placeholder="Choose the service you require"
                >
                  <option value="1 to 1 Counseling Service">
                    1 to 1 Counseling Service
                  </option>
                  <option value="Workplace - Corporate Program">
                    Workplace - Corporate Program
                  </option>
                  <option value="School-College-University Program">
                    School-College-University Program
                  </option>
                  <option value="Institutional Development Program">
                    Institutional Development Program
                  </option>
                  <option value="Career Counseling and Psychometric Test">
                    Career Counseling and Psychometric Test
                  </option>
                  <option value="Government School/Orphanages">
                    Government School/Orphanages
                  </option>
                  <option value="Preschool program">Preschool program</option>
                  <option value="Other">Other (Please specify)</option>
                </Select>
              </FormControl>

              <FormControl id="additionalInfo">
                <FormLabel>Additional Information:</FormLabel>
                <Textarea
                  name="additionalInfo"
                  value={formData.additionalInfo}
                  onChange={handleChange}
                  placeholder="Please provide any additional details or specific requirements"
                />
              </FormControl>

              <Button type="submit" colorScheme="blue" width="full">
                Submit
              </Button>
              
            </VStack>
            <Text color={"grey.100"}>
              <Text color={"blue.300"}>Thank You for Your Enquiry!</Text>
              <br />
{/*               
              <Text color={"red.200"}>
                We appreciate your interest in our services.
                <br />
                Our team will review your request and get back <br />
                to you shortly. If you require immediate assistance,
                <br />
              </Text>
              <Text color={"blue.400"}>
                please feel free to call us at xxxxxxxxxxx
              </Text> */}
            </Text>
          </form>
        </Box>
        </Stack>
      </Container>
    )
  }
  
//   const PlayIcon = (props) => {
//     return (
//       <Icon viewBox="0 0 58 58" {...props}>
//         <path
//           d="M28.9999 0.562988C13.3196 0.562988 0.562378 13.3202 0.562378 29.0005C0.562378 44.6808 13.3196 57.438 28.9999 57.438C44.6801 57.438 57.4374 44.6808 57.4374 29.0005C57.4374 13.3202 44.6801 0.562988 28.9999 0.562988ZM39.2223 30.272L23.5749 39.7247C23.3506 39.8591 23.0946 39.9314 22.8332 39.9342C22.5717 39.9369 22.3142 39.8701 22.0871 39.7406C21.86 39.611 21.6715 39.4234 21.5408 39.1969C21.4102 38.9705 21.3421 38.7133 21.3436 38.4519V19.5491C21.3421 19.2877 21.4102 19.0305 21.5408 18.8041C21.6715 18.5776 21.86 18.3899 22.0871 18.2604C22.3142 18.1308 22.5717 18.064 22.8332 18.0668C23.0946 18.0696 23.3506 18.1419 23.5749 18.2763L39.2223 27.729C39.4404 27.8619 39.6207 28.0486 39.7458 28.2713C39.8709 28.494 39.9366 28.7451 39.9366 29.0005C39.9366 29.2559 39.8709 29.507 39.7458 29.7297C39.6207 29.9523 39.4404 30.1391 39.2223 30.272Z"
//           fill="currentColor"
//         />
//       </Icon>
//     )
//   }
  
  const Blob = (props) => {
    return (
        
      <Icon
        width={'100%'}
        viewBox="0 0 578 440"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M239.184 439.443c-55.13-5.419-110.241-21.365-151.074-58.767C42.307 338.722-7.478 282.729.938 221.217c8.433-61.644 78.896-91.048 126.871-130.712 34.337-28.388 70.198-51.348 112.004-66.78C282.34 8.024 325.382-3.369 370.518.904c54.019 5.115 112.774 10.886 150.881 49.482 39.916 40.427 49.421 100.753 53.385 157.402 4.13 59.015 11.255 128.44-30.444 170.44-41.383 41.683-111.6 19.106-169.213 30.663-46.68 9.364-88.56 35.21-135.943 30.551z"
          fill="currentColor"
        />
      </Icon>
    
   
    )
  }
  