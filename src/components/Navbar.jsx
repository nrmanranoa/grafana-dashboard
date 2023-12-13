import { UnlockIcon } from "@chakra-ui/icons"
import { Flex, Image, Heading, Button, Text, Spacer, HStack, useToast } from "@chakra-ui/react"

export const Navbar = () => {
  const toast = useToast()

  const showToast = () => {
    toast({
      title: 'Logged out',
      description: 'Successfully logged out',
      duration: 5000,
      isClosable: true,
      status: 'success',
      position: 'top',
      icon: <UnlockIcon />
    })
  }
  return (
    <Flex as="nav" p="10px" alignItems="center">
        <Heading as="h1">Energy Dashboard</Heading>
        <Spacer />

        <HStack spacing="20px">
            <Image src="https://s.yimg.com/ag/images/default_user_profile_pic_64sq.jpg" alt="Your image alt text"></Image>
            <Text>user@email.com</Text>
            <Button colorScheme="blue" onClick={showToast}>Logout</Button>
        </HStack>
    </Flex>
    // <Flex bg="gray.200" justify="space-between" wrap="wrap" gap="2">
    //     <Box w="150px" h="50px" bg="red">1</Box>
    //     <Box w="150px" h="50px" bg="blue">2</Box>
    //     <Box w="150px" h="50px" flexGrow="1" bg="green">3</Box>
    //     <Box w="150px" h="50px" flexGrow="2" bg="yellow">4</Box>
    // </Flex>
  )
}
