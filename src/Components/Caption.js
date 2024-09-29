import { Box, Text, keyframes } from '@chakra-ui/react'
import { useState, useEffect } from 'react'

const captions = ['Enlighten-Bringing clarity', 'Enhance-Elevating your potential', 'Empower-Giving you the success.']

// Keyframes for sliding animation (left to right)
const slideAnimation = keyframes`
  0% { opacity: 0; transform: translateX(-100%); }
  20% { opacity: 1; transform: translateX(0); }
  80% { opacity: 1; transform: translateX(0); }
  100% { opacity: 0; transform: translateX(100%); }
`

export default function MovingCaption() {
  const [currentCaption, setCurrentCaption] = useState(0)

  useEffect(() => {
    // Change caption every 3 seconds
    const interval = setInterval(() => {
      setCurrentCaption((prevCaption) => (prevCaption + 1) % captions.length)
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  return (
    <Box
      position="relative"
      textAlign="left"
      fontSize="2xl"
      fontWeight="bold"
      height="50px"
      overflow="hidden"
      py={'5px'}
      pl={'2px'}


    >
      {captions.map((caption, index) => (
        <Text
          key={index}
          position="absolute"
          left="40%"
          transform="translateX(-50%)"
          animation={`${slideAnimation} 3s infinite`}
          opacity={currentCaption === index ? 1 : 0}
          visibility={currentCaption === index ? 'visible' : 'hidden'}
          color={'blue.500'}
        >
          {caption}
        </Text>
      ))}
    </Box>
  )
}
