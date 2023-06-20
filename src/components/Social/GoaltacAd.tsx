import { CheckIcon } from '@chakra-ui/icons';
import { Box, Text, ListItem, ListIcon, List, Button, Image, Flex } from '@chakra-ui/react';
// import { Link as RouterLink } from 'react-router-dom';
import { useBreakpointValue } from '@chakra-ui/react';

export default function GoaltacAd() {

    // these change the sizes
    const boxSize = useBreakpointValue({ base: '100px', md: '300px', lg: '400px' })
    const widthSize = useBreakpointValue({ base: '150px', md: '500px', lg: '800px' })

    return (
        <Flex mt={12} mb={4} boxShadow="md" maxW={widthSize} mx="auto">
            <Image src="/logo.png" boxSize={boxSize} objectFit="cover" mr={4} />
            <Box p={10}>
                <Text
                    fontSize={'sm'}
                    fontWeight={500}
                    color={'green.500'}
                    rounded={'full'}
                >
                    Hobby
                </Text>
                <Text fontSize={'3xl'} fontWeight={800} px={2}>
                    $9.99
                </Text>
                <Text color={'gray.500'}>/month</Text>
                <Box px={2} py={2} >
                    <List spacing={3}>
                        <ListItem>
                            <ListIcon as={CheckIcon} color='green.400' />
                            Create your own clans
                        </ListItem>
                        <ListItem>
                            <ListIcon as={CheckIcon} color='green.400' />
                            cool beans
                        </ListItem>
                        <ListItem>
                            <ListIcon as={CheckIcon} color='green.400' />
                            Support the Devs
                        </ListItem>
                    </List>

                    <Button
                        mt={10}
                        bg={'green.400'}
                        color={'white'}
                        rounded={'xl'}
                        boxShadow={'0 5px 20px 0px rgb(72 187 120 / 43%)'}
                        _hover={{
                            bg: 'green.500',
                        }}
                        _focus={{
                            bg: 'green.500',
                        }}
                    >
                        Start your trial
                    </Button>
                </Box>
            </Box>



        </Flex>);
}