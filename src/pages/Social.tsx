import { Box, Flex, Heading, Image, Text, IconButton, Spacer, Badge, Drawer, DrawerOverlay, DrawerCloseButton, DrawerHeader, DrawerContent, DrawerBody, Avatar, AvatarBadge, InputGroup, Input, InputRightElement, Button, useColorMode, useBreakpointValue } from '@chakra-ui/react';
// import { Link as RouterLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { FaHeart, FaRegPaperPlane, FaUserFriends } from 'react-icons/fa';
import GoaltacAd from '../components/GoaltacAd';
import Ad from '../components/Ad';


interface Post {
    id: number;
    imageUrl: string;
    title: string;
    date: string;
    description: string;
    college: string;
}

interface Message {
    text: string;
    sender: 'me' | 'other';
}

export default function Feed() {
    const { colorMode } = useColorMode();

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

    // these change the sizes
    const boxSize = useBreakpointValue({ base: '200px', md: '300px', lg: '400px' })
    const widthSize = useBreakpointValue({ base: '300px', md: '500px', lg: '800px' })

    // opens the social drawer
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const handleChatClick = () => {
        setIsDrawerOpen(true);
    };

    const handleDrawerClose = () => {
        setIsDrawerOpen(false);
    };

    // handles messaging
    const [messages, setMessages] = useState<Message[]>([]);
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };

    const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (inputValue.trim() === '') {
            return;
        }
        setMessages([...messages, { text: inputValue, sender: 'me' }]);
        setInputValue('');
    };

    useEffect(() => {
        document.title = 'Social';
    }, []);

    return (
        <Box>
            {/* example of goaltac ad */}
            <GoaltacAd />
            {/* example of an ad */}
            <Ad />
            {/* drawer */}
            <Drawer placement="right" onClose={handleDrawerClose} isOpen={isDrawerOpen}>
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>Friends</DrawerHeader>
                    <DrawerBody>

                        <Avatar size="sm" margin={2} ml={0}>
                            <AvatarBadge boxSize='1.25em' bg='green.500' />
                        </Avatar>


                        <Avatar src="/avatar.png" size="sm" margin={2} />

                        <Avatar src="/avatar.png" size="sm" margin={2} />


                        <Box bg="white" boxShadow="md" p={4} borderRadius="md">
                            <Flex direction="column" height="400px">
                                <Box flex="1" overflowY="scroll">
                                    {messages.map((message, index) => (
                                        <Flex key={index} justifyContent={message.sender === 'me' ? 'flex-end' : 'flex-start'} mb={2}>
                                            {message.sender === 'other' && (
                                                <Avatar size="sm" margin={2} ml={0}>
                                                    <AvatarBadge boxSize="1.25em" bg="green.500" />
                                                </Avatar>
                                            )}
                                            <Box maxW="70%" bg={message.sender === 'me' ? 'blue.500' : 'gray.200'} color={message.sender === 'me' ? 'white' : 'black'} p={2} borderRadius="md">
                                                <Text fontSize="sm">{message.text}</Text>
                                            </Box>
                                        </Flex>
                                    ))}
                                </Box>
                                <form onSubmit={handleFormSubmit}>
                                    <Flex alignItems="center">
                                        <InputGroup>
                                            <Input type="text" value={inputValue} onChange={handleInputChange} placeholder="Type a message" />
                                            <InputRightElement>
                                                <Button type="submit" aria-label="Send" size="sm" colorScheme="blue" variant="ghost" mr={2}>
                                                    <FaRegPaperPlane />
                                                </Button>
                                            </InputRightElement>
                                        </InputGroup>
                                    </Flex>
                                </form>
                            </Flex>
                        </Box>


                    </DrawerBody>
                </DrawerContent>
            </Drawer>
            {/* post template that maps everything */}
            {posts.map((post) => (
                <Box key={post.id} bg={colorMode === "light" ? 'gray.50' : 'gray.700'} boxShadow="md" mb={4} maxW={widthSize} mx="auto">
                    <Flex alignItems="center">
                        <Image src={post.imageUrl} alt={post.title} boxSize={boxSize} objectFit="cover" mr={4} />
                        <Box>
                            <Heading size="md" color={colorMode === 'light' ? 'black' : 'white'} mb={2}>{post.title}</Heading>
                            <Text fontSize="sm" color="gray.500" mb={2}>{post.date}</Text>
                            <Text fontSize="md" color={colorMode === 'light' ? 'black' : 'white'} >{post.description}</Text>
                            <Badge colorScheme="blue" mt={2}>{post.college}</Badge>
                        </Box>
                        <Spacer />
                        <IconButton aria-label="Like" icon={<FaHeart />} _hover={{ bg: 'pink.100' }} mr={2} />
                    </Flex>
                </Box>
            ))}
            {/* chat button */}
            <Box position="fixed" bottom={4} right={4}>
                <IconButton aria-label="Chat" icon={<FaUserFriends />} onClick={handleChatClick} />
            </Box>
        </Box>
    );
}