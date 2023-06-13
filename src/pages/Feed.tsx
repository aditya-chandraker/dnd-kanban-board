import { CheckIcon } from '@chakra-ui/icons';
import { Box, Flex, Heading, Image, Text, IconButton, Spacer, Badge, Icon, Link, Stack, useColorModeValue, Center, ListItem, ListIcon, List, Button } from '@chakra-ui/react';
// import { Link as RouterLink } from 'react-router-dom';
import { useState } from 'react';
import { FaAudioDescription, FaHeart } from 'react-icons/fa';
import { useBreakpointValue } from '@chakra-ui/react';


interface Post {
    id: number;
    imageUrl: string;
    title: string;
    date: string;
    description: string;
    college: string;
}

interface FeedProps {
    posts: Post[];
}

export default function Feed() {
    const [posts, setPosts] = useState<Post[]>([
        {
            id: 1,
            imageUrl: 'https://via.placeholder.com/150',
            title: 'Post 1',
            date: '2021-10-01',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            college: 'Example Community 1',
        },
        {
            id: 2,
            imageUrl: 'https://via.placeholder.com/150',
            title: 'Post 2',
            date: '2021-10-02',
            description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            college: 'UConn',
        },
        {
            id: 3,
            imageUrl: 'https://via.placeholder.com/150',
            title: 'Post 3',
            date: '2021-10-03',
            description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            college: 'Official GoalTac',
        },
    ]);

    const boxSize = useBreakpointValue({ base: '200px', md: '300px', lg: '400px' })
    const widthSize = useBreakpointValue({ base: '300px', md: '500px', lg: '800px' })
    
    return (
        <Box>
            <br />
            <Box bg="white" boxShadow="md" p={4} mb={4} maxW={widthSize} mx="auto">
                <Flex alignItems="center">
                    <Image src="https://prodd8.planetfitness.com/sites/default/files/styles/gallery_full_image/public/2020-05/IMG_0374.JPEG" boxSize={boxSize} objectFit="cover" mr={4} />
                    <Box>
                        <Heading size="md" mb={2}>
                            One Month Free Gym Membership
                        </Heading>
                        <Text fontSize="sm" color="gray.500" mb={2}>
                            2021-10-01
                        </Text>
                        <Text fontSize="md"><Link href="https://www.planetfitness.com/" isExternal>
                            join now
                        </Link></Text>

                        <Badge colorScheme="blue" mt={2}>
                            Planet Fitness
                        </Badge>
                    </Box>
                    <Spacer />
                    <Icon as={FaAudioDescription} ml={2} />
                </Flex>
            </Box>
            <Box boxShadow="md" maxW={widthSize}  mx="auto">
                <Flex alignItems="center">
                    <Center>
                        <Stack
                            textAlign={'center'}
                            color={useColorModeValue('gray.800', 'white')}
                            align={'center'}
                        >
                            <Stack direction={'row'} align={'center'} justify={'center'}>
                                <Stack direction={'column'} align={'center'} >
                                    <Text
                                        fontSize={'sm'}
                                        fontWeight={500}
                                        bg={useColorModeValue('green.50', 'green.900')}
                                        p={2}
                                        px={3}
                                        color={'green.500'}
                                        rounded={'full'}
                                    >
                                        Hobby
                                    </Text>
                                    <Text fontSize={'6xl'} fontWeight={800} px={12}>
                                        $9.99
                                    </Text>
                                    <Text color={'gray.500'}>/month</Text>
                                </Stack>
                                <Box bg={useColorModeValue('gray.50', 'gray.900')} px={12} py={10}>
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
                                        w={'full'}
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
                            </Stack>

                        </Stack>

                    </Center>
                </Flex>
            </Box>
            <br />
            {posts.map((post) => (
                <Box key={post.id} bg="white" boxShadow="md" p={4} mb={4} maxW={widthSize} mx="auto">
                    <Flex alignItems="center">
                        <Image src={post.imageUrl} alt={post.title} boxSize={boxSize} objectFit="cover" mr={4} />
                        <Box>
                            <Heading size="md" mb={2}>{post.title}</Heading>
                            <Text fontSize="sm" color="gray.500" mb={2}>{post.date}</Text>
                            <Text fontSize="md">{post.description}</Text>
                            <Badge colorScheme="blue" mt={2}>{post.college}</Badge>
                        </Box>
                        <Spacer />
                        <IconButton aria-label="Like" icon={<FaHeart />} />
                    </Flex>
                </Box>
            ))}
        </Box>
    );
}