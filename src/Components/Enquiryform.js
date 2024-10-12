'use client';

import { Box, Button, FormControl,
    Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
  Text,FormLabel, Input, Select, Textarea, VStack } from '@chakra-ui/react';
import { useState } from 'react';

export default function EnquiryForm() {
  const [formData, setFormData] = useState({
    name: '',
    contactNumber: '',
    email: '',
    service: '',
    additionalInfo: ''
  });
  const { isOpen, onOpen, onClose } = useDisclosure();
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
    <Box maxW="md" mx="auto" mt={10} p={6} border="1px" borderColor="gray.300" borderRadius="md" boxShadow="lg">
      <form onSubmit={handleSubmit}>
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
              <option value="1 to 1 Counseling Service">1 to 1 Counseling Service</option>
              <option value="Workplace - Corporate Program">Workplace - Corporate Program</option>
              <option value="School-College-University Program">School-College-University Program</option>
              <option value="Institutional Development Program">Institutional Development Program</option>
              <option value="Career Counseling and Psychometric Test">Career Counseling and Psychometric Test</option>
              <option value="Government School/Orphanages">Government School/Orphanages</option>
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

          <Button type="submit" colorScheme="blue" width="full" onClick={onOpen}>
        Submit
      </Button>
      <Modal isOpen={isOpen} onClose={onClose} scrollBehavior="inside">
  <ModalOverlay />
  <ModalContent
    position="fixed"
    bottom={0}
    mb={4}  // Optional: adds margin from the bottom of the screen
    maxW={["90%", "80%", "60%", "40%"]}
    maxH="90vh"  // Ensures the modal doesn't overflow beyond viewport height
    p={[4, 6, 8]}
    overflowY="auto"
  >
    <ModalHeader fontSize={["lg", "xl"]} textAlign="center">
      Thank You!
    </ModalHeader>
    <ModalBody>
      <Text fontSize={["sm", "md"]} textAlign="center">
        We appreciate your interest in our services.
        <br />
        Our team will review your request and get back
        <br />
        to you shortly. If you require immediate assistance,
        <br />
        please feel free to call us at 9019873893.
      </Text>
    </ModalBody>
    <ModalFooter>
      <Button colorScheme="blue" mr={3} onClick={onClose}>
        Close
      </Button>
    </ModalFooter>
  </ModalContent>
</Modal>



        </VStack>
        <Text color={'grey.100'}>
<Text color={'blue.300'}>Thank You for Your Enquiry!</Text><br/>

</Text>
{/* hidden text */}

{/* <Box position="relative" display="inline-block">
        <Box
        position="absolute"
        bottom="100%" // Position above the trigger box
        left="50%"
        transform="translateX(-50%)"
        bg="gray.100"
        color="blue.300"
        p={2}
        borderRadius="md"
        whiteSpace="nowrap"
        opacity={0}
        transition="opacity 0.2s"
        _groupHover={{ opacity: 1 }} // Shows text when the parent is hovered
        _hover={{ opacity: 1 }} // Ensure it stays visible on hover
      >
       We appreciate your interest in our services.<br/>
Our team will review your request and get back <br/>
to you shortly. If you require immediate assistance,
please feel free to call us at xxxxxxxxxxx
      </Box>
         </Box> */}
      </form>
     
    </Box>
  );
}
