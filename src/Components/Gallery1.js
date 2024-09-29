import { Box,
   Image, 
   SimpleGrid,
    useBreakpointValue,
    chakra ,
    Text,
  } from '@chakra-ui/react'

const images = [
  {url:'../../../career 4.jfif' , title: 'counselling'}, // Replace with your actual image URLs
  {url:'../../../children1.jpg' , title: 'children'},
  {url:'../../../children.jpg' , title: 'Enlightening'},
  {url:'../../../child 1 to 1.jfif' , title: 'Guiding'},
  {url:'../../../carrerr 1.jfif' , title: 'Career Counselling'},
  {url:'../../../adoloscent group.jfif' , title: 'Adoloscent group'}
]

export default function ImageGallery() {
  // Use Chakra UI's breakpoint to switch between column and row layouts
  const columns = useBreakpointValue({ base: 1, md: 3 })

  return (
    <Box p={4}>
      <chakra.h1
        textAlign={'center'}
        fontSize={'4xl'}
        py={10}
        fontWeight={'bold'}
        shadow={'md'}
        dropShadow={'initial'}
      >
        <Text color={'blue.500'}>Gallery</Text>
      </chakra.h1>
      <SimpleGrid columns={columns} spacing={4}>
        {images.map((image, index) => (
          <Box key={index} position="relative" borderRadius="md" overflow="hidden">
            <Image
              src={image.url}
              alt={`Gallery image ${index + 1}`}
              boxSize="100%"
              objectFit="cover"
              borderRadius="md"
            />
             <Box
              position="absolute"
              bottom="0"
              left="0"
              right="0"
              bg="rgba(0, 0, 0, 0.6)" // Semi-transparent black background
              color="white"
              p={2}
              textAlign="center"
            >
              <Text fontSize="md" fontWeight="bold">
                {image.title}
              </Text>
            </Box>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  )
}