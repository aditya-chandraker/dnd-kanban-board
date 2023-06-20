import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Box, Flex, Stack, VStack, Text, Button, Image, Avatar, Heading, useColorModeValue, Badge } from "@chakra-ui/react";
import Canvas from "../components/Beta/Canvas";
import { Link } from "react-router-dom";

// edit this file to change the content of the beta page
import { content, staffProfiles, responsive } from '../components/Beta/betaContent';

export default function BetaPage() {
    return (
        <Box position="relative">

            {/* 1st Page */}
            <Canvas style={{ width: '100vw', height: '100vh', position: 'absolute', top: 0, left: 0 }} />
            <Stack position="absolute" top={0} left={0} justifyContent={'center'} h={'100vh'} w={'100vw'} pl={5} pr={5}>
                <Box fontSize={["60px", "80px", "120px"]} fontWeight='700' lineHeight='1.1' textColor='white'>
                    Work Harder and Smarter
                </Box>
                <Box lineHeight='1.7' textColor='white'>
                    GoalTac revolutionizes productivity by focusing on the key drivers
                    to success that many people do not have: <b>consistency and motivation</b>.
                </Box>

            </Stack>
            <Box h="100vh"></Box> {/*keep this to allow the first page to actually take space*/}

            {/* 2nd page */}
            <Stack
                direction={['column', null, 'row']}
                p={2}
            >
                <VStack
                    height="100vh"
                    alignItems={['center', null, 'flex-start']}
                    justifyContent="center"
                    textAlign={['center', null, 'left']}
                    p={4}
                >
                    <Image src="logo.png" alt="GoalTac Logo" display="block" mx="auto" />
                    <Box fontSize={['30px', '4xl']} fontWeight='700' lineHeight='1.1'>
                        Why is GoalTac Better?
                    </Box>
                    <Text>
                        Compared to other goal tracking apps, GoalTac is a
                        shot of energy that will keep you motivated to
                        become your most productive and accomplished self
                    </Text>
                </VStack>

                <VStack spacing='2rem' pt='2rem' pb='2rem'>
                    {content.map((vstack, index) => (
                        <VStack key={index}>
                            <Flex width='100%' alignItems='center'>
                                <Box p='.3rem 1rem' fontWeight='600'>{vstack.number}</Box>
                                <Box fontWeight='600' pl='20px'>{vstack.title}</Box>
                            </Flex>
                            <Box p='.3rem 1rem'>{vstack.text}</Box>
                        </VStack>
                    ))}
                </VStack>
            </Stack>


            {/* 3rd page */}
            <Box
                gap='2rem'
                textAlign='center'
                pt={"3rem"}
                bgColor={useColorModeValue('gray.50', 'blue.900')}
            >
                <Box fontSize={['30px', '4xl']} fontWeight='700' >Our Team</Box>
                <Carousel
                    removeArrowOnDeviceType={[
                        'mobile',
                        'tablet',
                        'desktop',
                    ]}
                    showDots={true}
                    responsive={responsive}
                    autoPlay={true}
                    autoPlaySpeed={2000}
                    infinite={true}
                    focusOnSelect={true}
                    arrows={true}
                >
                    {staffProfiles.map((staff, index) => {
                        return (
                            <Box p='0.5rem' paddingY='6rem' pt='2rem' key={index}>
                                <VStack
                                    cursor='grab'
                                    userSelect='none'
                                    rounded={'lg'}
                                    transition='boxShadow 3s'
                                    _hover={{
                                        boxShadow: '0px 0px 2px gray',
                                    }}
                                    pt='2rem'
                                >
                                    <Avatar size={'xl'} mb={4} pos={'relative'} bgGradient='radial(blue.500, teal.300)' />
                                    <Heading fontSize={'2xl'} fontFamily={'body'} >{staff.name} </Heading>
                                    <Text fontWeight={600} color={'gray.500'} mb={4}>{staff.title}</Text>
                                    <Text textAlign={'center'} color={useColorModeValue('gray.800', 'gray.200')} px={3}>{staff.desc}</Text>
                                    <Box>
                                        {staff.badges.map((badge, i) => {
                                            return (<Badge bgColor='transparent' key={i} colorScheme='blue'>{badge}</Badge>);
                                        })}
                                    </Box>
                                    <Box pb={"20px"}>{staff.contact}</Box>
                                </VStack>
                            </Box>
                        );
                    })}
                </Carousel>
                <br />
            </Box>

            {/* Button to Login (must be rendered last to be on top)*/}
            <Button as={Link} to="/login" position="fixed" top={4} right={120} style={{ opacity: 0.8, backgroundColor: 'rgba(0,0,0)' }} textColor='white'>Login</Button>
            <Button as={Link} to="/signup" position="fixed" top={4} right={4} style={{ opacity: 0.8, backgroundColor: 'rgba(0,0,0)' }} textColor='white'>Sign Up</Button>
        </Box >
    );
}