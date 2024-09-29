import { Box, Flex, Text } from "@chakra-ui/react";

const Circle = ({ color, text, zIndex, ml, mr }) => {
  return (
    <Flex
      justify="center"
      align="center"
      bg={color}
      borderRadius="50%"
      width="150px"
      height="150px"
      position="relative"
      zIndex={zIndex}
      ml={ml}
      mr={mr}
    >
      <Text fontSize="18px" fontWeight="bold" color="white">
        {text}
      </Text>
    </Flex>
  );
};

export default function OlympicCircles() {
  return (
    <Flex
      justify="center"
      align="center"
      direction="row"
      wrap="wrap"
      mt={10}
    >
      {/* Olympic-style overlapping circles */}
      <Circle color="blue" text="Circle 1" zIndex={3} mr="-40px" />
      <Circle color="yellow" text="Circle 2" zIndex={2} ml="-40px" mr="-40px" />
      <Circle color="black" text="Circle 3" zIndex={3} ml="-40px" mr="-40px" />
      <Circle color="green" text="Circle 4" zIndex={2} ml="-40px" mr="-40px" />
      <Circle color="red" text="Circle 5" zIndex={3} ml="-40px" />
    </Flex>
  );
}
