import { Box, Flex, Avatar, Stack, Heading, Text, useColorModeValue, SimpleGrid, HStack } from "@chakra-ui/react";
import { useState, useEffect } from "react";

const testimonials = [
  {
    id: 1,
    name: "Arjun Nair",
    role: "College Student",
    text: "Mission 100K’s workshops have truly transformed my outlook on life and career",
    avatar: "../../../p.svg",
  },
  {
    id: 2,
    name: "Lakshmi Menon",
    role: "Teacher at Government School",
    text: "The support from Mission 100K has been invaluable for our students",
    avatar: "../../../p.svg",
  },
  {
    id: 3,
    name: "Ravi Kumar",
    role: "HR Manager",
    text: "Our employees’ productivity and morale have improved remarkably thanks to Mission 100K",
    avatar: "../../../p.svg",
  },
  {
    id: 4,
    name: "Shotti Naidu",
    role: "School Principal",
    text: "Mission 100K’s development programs have helped us enhance our school’s business strategies",
    avatar: "../../../p.svg",
  },
  {
    id: 5,
    name: "Suresh Iyer",
    role: "University Student",
    text: "The one-on-one counseling sessions with Mission 100K have been life-changing",
    avatar: "../../../p.svg",
  },
  {
    id: 6,
    name: "Meera Rajan",
    role: "A Recent Graduate",
    text: "Mission 100K’s career counselling has been instrumental in guiding me towards a fulfilling career...",
    avatar: "../../../p.svg",
  },
];

const TestimonialSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const testimonialsPerSlide = 3;
  const totalSlides = Math.ceil(testimonials.length / testimonialsPerSlide);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? totalSlides - 1 : prevSlide - 1));
  };

  // Auto slide every 2000ms
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 2000);

    // Cleanup the interval on component unmount
    return () => clearInterval(interval);
  }, []);

  // Styling
  const boxBackground = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('blue.200', 'blue.700');

  const displayedTestimonials = testimonials.slice(
    currentSlide * testimonialsPerSlide,
    (currentSlide + 1) * testimonialsPerSlide
  );

  return (
    <Box maxW="1200px" mx="auto" p={5}>
      <SimpleGrid columns={{ base: 1, lg: 3 }} spacing={10}>
        {displayedTestimonials.map((testimonial) => (
          <Flex key={testimonial.id} align="center" justify="center" py={8} px={4}>
            <Stack
              width="full"
              maxW="400px"
              direction={{ base: 'column', lg: 'column' }}
              spacing={5}
            >
              <Box
                boxShadow={'lg'}
                width={'full'}
                rounded={'xl'}
                p={10}
                borderWidth={2}
                borderColor={borderColor}
                bg={boxBackground}
                minHeight="400px" // Set minimum height for uniform boxes
                _hover={{
                  transform: 'translateY(-5px)',
                  boxShadow: 'xl',
                  transition: 'all 0.3s ease-in-out',
                }}
                transition="all 0.3s ease-in-out"
                textAlign="center"
              >
                <Avatar src={testimonial.avatar} size="xl" mb={4} />
                <Text fontSize="xl" mb={2}>"{testimonial.text}"</Text>
                <Heading size="md">{testimonial.name}</Heading>
                <Text color="gray.500">{testimonial.role}</Text>
              </Box>
            </Stack>
          </Flex>
        ))}
      </SimpleGrid>

      {/* Navigation Arrows */}
      <Flex justifyContent="space-between" mt={8}>
        <Box as="button" onClick={prevSlide} p={2} fontSize="2xl">
          &#10094; {/* Left arrow */}
        </Box>
        <Box as="button" onClick={nextSlide} p={2} fontSize="2xl">
          &#10095; {/* Right arrow */}
        </Box>
      </Flex>

      {/* Slide Indicators */}
      <HStack justify="center" mt={4}>
        {Array.from({ length: totalSlides }).map((_, index) => (
          <Box
            key={index}
            as="button"
            onClick={() => setCurrentSlide(index)}
            h={3}
            w={3}
            mx={1}
            bg={currentSlide === index ? 'blue.500' : 'gray.300'}
            borderRadius="full"
            _hover={{ bg: 'blue.300' }}
          />
        ))}
      </HStack>
    </Box>
  );
};

export default TestimonialSlider;
