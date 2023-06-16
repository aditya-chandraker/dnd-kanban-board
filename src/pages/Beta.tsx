import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Box, Flex, Stack, VStack, Text, Button, Image, Avatar, Heading, useColorModeValue, Badge } from "@chakra-ui/react";
import Canvas from "../components/Canvas";
import { Link } from "react-router-dom";

const content = [
    {
        number: '01',
        title: 'Have fun with it!',
        text: <p>Goal execution is gamified and will help make work fun!
            Reach significant milestones whilst competing with
            your peers to accomplish shared goals through various
            challenges and games. &#x1F60A;</p>,
    },
    {
        number: '02',
        title: 'Meet new friends',
        text: <p>Join or create your own community specified towards a topic of choice!
            Communities are ranked based on how many points they earn. The more
            productive you and your community are, the higher you place! This will
            give that accountability rarely seen on online platforms, especially in
            a productive setting.
        </p>,
    },
    {
        number: '03',
        title: 'Everything you need in one place',
        text: <p>Want to just organize your tasks? No problem.
            Want to use the app to meet other people? You can do that too.
            GoalTac's app allows you to use it in any way you like without
            jeopordizing your experience!
        </p>,
    },
    {
        number: '04',
        title: 'Superior organization',
        text: <p>We prioritize high customizability in task creation,
            which can be visualized in many ways! Use GoalTac to track
            progress towards any goal you aspire to accomplish.
        </p>,
    }
];

const staffProfiles = [
    {
        name: 'My Phung',
        image: null,
        title: 'Founder',
        desc: 'Entrepreneur, student, chess and guitar enthusiast. Chat with me on Discord @ Wrys#8935',
        badges: [
            'weightlifting',
            'chess',
            'entrepreneurship',
            'guitar',
            'academics',
        ],
        contact: 'myphungquoc@gmail.com',
    },
    {
        name: 'Aditya Chandraker',
        image: null,
        title: 'Lead Developer',
        desc: 'Premed student, CS minor, Pianist, and a fan of spicy food',
        badges: ['tabletennis', 'chess', 'art', 'taekwondo', 'academics'],
        contact: 'aditya.chandraker@uconn.edu',
    },
    {
        name: 'Ibrahima Capo-ChiChi',
        image: null,
        title: 'Developer',
        desc: '',
        badges: [''],
        contact: '',
    },
    {
        name: 'Nikhil Ghosh',
        image: null,
        title: 'Developer',
        desc: '',
        badges: [''],
        contact: '',
    },
    {
        name: 'Jack Cornell',
        image: null,
        title: 'Developer',
        desc: '',
        badges: [''],
        contact: '',
    },
    {
        name: 'Colin Acerbi',
        image: null,
        title: 'Developer',
        desc: '',
        badges: [''],
        contact: '',
    },
    {
        name: 'Jordan Hawkes',
        image: null,
        title: 'Marketing',
        desc: '',
        badges: [''],
        contact: '',
    },
    {
        name: 'Paolo Rangonese',
        image: null,
        title: 'Finance',
        desc: '',
        badges: [''],
        contact: '',
    },
    {
        name: 'Seth Pappalardo',
        image: null,
        title: 'Business',
        desc: '',
        badges: [''],
        contact: '',
    },
];

const responsive = {
    desktop: {
        breakpoint: { max: 99999, min: 1024 },
        items: 3,
    },
    tablet: {
        breakpoint: { max: 1024, min: 768 },
        items: 2,
    },
    mobile: {
        breakpoint: { max: 768, min: 0 },
        items: 1,
    },
};

export default function BetaPage() {
    return (
        <Box position="relative">

            {/* 1st Page */}
            <Canvas style={{ width: '100vw', height: '100vh', position: 'absolute', top: 0, left: 0 }} />
            <Stack position="absolute" top={0} left={0} justifyContent={'center'} h={'100vh'} w={'100vw'} pl={5}>
                <Box fontSize={["60px", "80px", "120px"]} fontWeight='700' lineHeight='1.1' textColor='white'>
                    Work Harder and Smarter
                </Box>
                <Box lineHeight='1.7'>
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

                <VStack spacing='2rem' pt='4rem'>
                    {content.map((vstack, index) => (
                        <VStack key={index}>
                            <Flex width='100%' alignItems='center'>
                                <Box p='.3rem 1rem' fontWeight='600'>{vstack.number}</Box>
                                <Box fontWeight='600' pl='20px'>{vstack.title}</Box>
                            </Flex>
                            <Box paddingLeft={['0', '75px']}>
                                {vstack.text}
                            </Box>
                        </VStack>
                    ))}
                </VStack>
            </Stack>


            {/* 3rd page */}
            <Box
                gap='2rem'
                textAlign='center'
                pt={"3rem"}
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
                                    <Text textAlign={'center'} color={useColorModeValue('gray.800', 'gray.600')} px={3}>{staff.desc}</Text>
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
            </Box>

            {/* Button to Login (must be at end)*/}
            <Button as={Link} to="/login" position="fixed" top={4} right={4} style={{ opacity: 0.8, backgroundColor: 'rgba(0,0,0)' }}>Login</Button>
        </Box >
    );
}