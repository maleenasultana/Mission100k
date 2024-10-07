import {
  Box,
  Text,
  chakra,
  SimpleGrid,
  Stat,
  StatNumber,
  useColorModeValue,
  Link,
  Button,
  Stack,
} from "@chakra-ui/react";

function StatsCard({ title, stat, bgColor, gradient,text }) {
  return (
    
    <Stat
      px={{ base: 4, md: 8 , sm: 10}}
      py={"5"}
      shadow={"xl"}
      borderRadius={"20px"}
      bg={bgColor}
      bgGradient={gradient}
      transition="all 0.3s ease"
      _hover={{
        transform: "scale(1.05)",
        boxShadow: "xl",
        borderColor: "blue.400",
      }}
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height={"250px"}
      width={"350px"}
    >
      <StatNumber
       fontSize={['22px',"20px","20px", "18px"]}
        fontWeight={'extrabold'}
        fontFamily="Abril Fatface, serif"
        textAlign={'center'}
      // bgGradient="linear(to-r, blue.500, green)" // Multicolored gradient
      // bgClip="text" // Applies the gradient only to the text
      // textFillColor="transparent" 
      >
        {title}
      </StatNumber>
      <Text
        
        color="blue.500"
        fontFamily="Amaranth"
        fontWeight="bold"
        fontSize={['12px', '14px', '16px', '18px']}
        display={'auto'}
      >
        {stat}
      </Text>
      <Text fontSize={[ '14px', '16px', '18px']} color="gray.500" textAlign="center"
    
      >
        {/* Placeholder for one-liner under each stat */}
        {text}
      </Text>
    </Stat>
  );
}

export default function BasicStatistics() {
  return (
    
    <Box maxW="7xl" mx={"auto"} pt={5} px={{ base: 2, sm: 10, md: 15 }}>
         <chakra.h1
        textAlign={"center"}
        fontSize={"2xl"}
        py={3}
        fontWeight={"bold"}
        fontFamily="Amaranth, sans-serif"
      >
        <Text color={"blue.500"}>Our services</Text> </chakra.h1>
      <SimpleGrid columns={{ base: 1,  md: 3 }} // Adjusting columns for small screens
        spacing={{ base: 10, sm: 10, md: 6 }} // Spacing for different breakpoints
        py={"10px"}>
        <Link href="../schools">
          <StatsCard
            title={"SCHOOLS /  COLLEGES"}
            stat={""}
            bgColor="pink.200"
            gradient="linear(to-r, pink.100, pink.200)"
            text="Empowering students with emotional resilience and career guidance for a brighter future."
          />
        </Link>

        
        <Link href="../corporates">
          <StatsCard
            title={"CORPORATE / WORKPLACES"}
            stat={""}
            bgColor="blue.200"
            gradient="linear(to-r, blue.100, blue.200)"
            text="Enhancing employee well-being and productivity through tailored mental health programs"
          />
        </Link>
        <Link href="../govtschools">
          <StatsCard
            title={"ORPHANAGES/ GOVTSCHOOLS"}
            stat={""}
            bgColor="green.200"
            gradient="linear(to-r, green.100, green.200)"
            text="Providing essential mental well-being support and career counselling to underserved communities"
          />
        </Link>
      </SimpleGrid>
      <SimpleGrid columns={{ base: 1, md: 3, sm:"2" }} spacing={{ base: 8, lg: 5 }} py={"25px"}>
        <Link href="../careercounselling">
          <StatsCard
            title={"CAREER COUNSELLING"}
            stat={""}
            bgColor="yellow.200"
            gradient="linear(to-r, yellow.100, yellow.200)"
            text="Guiding individuals towards fulfilling career paths with expert advice and support."
          />
        </Link>
        <Link href="../idp">
          <StatsCard
            title={"INSTITUTION DEVELOPMENT PROGRAMME"}
            stat={""}
            bgColor="purple.200"
            gradient="linear(to-r, purple.100, purple.200)"
            text="Advancing schools with business development strategies and comprehensive staff training"
          />
        </Link>
        <Link href="../onetoone">
          <StatsCard

            title={"1 : 1 COUNSELLING"}
            stat={""}
            bgColor="orange.200"
            gradient="linear(to-r, orange.100, orange.200)"
            text="Offering personalized counselling to foster emotional well-being and personal growth."
          />
        </Link>
      </SimpleGrid>
      <Box py={10} display="flex" justifyContent="center" alignItems="center" mt={'20px'}>
  <Stack spacing={6} direction={{ base: "column", sm: "row" }} alignItems="center">
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
        Psychometric Test
      </Button>
    </Link>
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
        Skill & Learning Test
      </Button>
    </Link>
  </Stack>
</Box>

    </Box>
  );
}
