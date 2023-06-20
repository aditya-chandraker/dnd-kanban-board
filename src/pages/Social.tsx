import { Box, Flex, Heading, Image, Text, IconButton, Spacer, Badge, Drawer, DrawerOverlay, DrawerCloseButton, DrawerHeader, DrawerContent, DrawerBody, Avatar, AvatarBadge, InputGroup, Input, InputRightElement, Button, useColorMode, useBreakpointValue } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { FaHeart, FaRegPaperPlane, FaUserFriends } from 'react-icons/fa';
import GoaltacAd from '../components/Social/GoaltacAd';
import Ad from '../components/Social/Ad';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../supabase';
import React from 'react';

interface Post {
    id: number;
    imageUrl: string;
    title: string;
    date: string;
    description: string;
    college: string;
}

export default function Social() {

    // failsafe redirect to login if not authenticated
    const navigate = useNavigate();

    useEffect(() => {
        const getUser = async () => {
            const { data, error } = await supabase.auth.getUser();
            // console.log(user);
            if (error) {
                navigate('/login');
            }
        };
        getUser();
    }, []);

    // changes title of the html tab
    useEffect(() => {
        document.title = 'Social';
    }, []);

    const { colorMode } = useColorMode();

    // Teomporary posts
    const [posts] = useState<Post[]>([
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

    const [isShortScreen, setIsShortScreen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsShortScreen(window.innerWidth < 768);
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleImageClick = (e: React.MouseEvent<HTMLImageElement>) => {
        const target = e.target as HTMLImageElement;
        target.nextElementSibling?.classList.toggle('hidden');
    };


    return (
        <Box>

            {/* example of goaltac ad */}
            <GoaltacAd />
            {/* example of an ad */}
            <Ad />

            {/* post template that maps everything */}
            {/* {posts.map((post) => (
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
            ))} */}
            {/* post template that maps everything */}
            {posts.map((post) => (
                <Box key={post.id} bg={colorMode === "light" ? 'gray.50' : 'gray.700'} boxShadow="md" mb={4} maxW={widthSize} mx="auto">
                    {isShortScreen ? (
                        <>
                            <Image src={post.imageUrl} alt={post.title} boxSize="100%" objectFit="cover" onClick={handleImageClick} />
                            <Box p={4} className="hidden">
                                <Heading size="md" color={colorMode === 'light' ? 'black' : 'white'} mb={2}>
                                    {post.title}
                                </Heading>
                                <Text fontSize="sm" color="gray.500" mb={2}>
                                    {post.date}
                                </Text>
                                <Text fontSize="md" color={colorMode === 'light' ? 'black' : 'white'}>
                                    {post.description}
                                </Text>
                                <Badge colorScheme="blue" mt={2}>
                                    {post.college}
                                </Badge>
                            </Box>
                        </>
                    ) : (

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
                    )}
                </Box>
            ))}
        </Box>
    );
}