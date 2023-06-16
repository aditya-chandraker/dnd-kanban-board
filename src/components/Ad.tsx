import { Box, Flex, Heading, Image, Text, Badge, Icon, LinkBox, LinkOverlay, Spacer, useColorMode } from '@chakra-ui/react';
// import { Link as RouterLink } from 'react-router-dom';
import { FaAudioDescription, } from 'react-icons/fa';
import { useBreakpointValue } from '@chakra-ui/react';


export default function Ad() {

    const { colorMode } = useColorMode();

    // these change the sizes
    const boxSize = useBreakpointValue({ base: '200px', md: '300px', lg: '400px' })
    const widthSize = useBreakpointValue({ base: '300px', md: '500px', lg: '800px' })

    return (
        <Box boxShadow="md" mb={4} mx="auto" maxW={widthSize} bg={colorMode === "light" ? 'gray.200' : 'gray.700'}>
            <LinkBox as='article'>
                <Flex alignItems="center">
                    <Image src="https://prodd8.planetfitness.com/sites/default/files/styles/gallery_full_image/public/2020-05/IMG_0374.JPEG" boxSize={boxSize} objectFit="cover" mr={4} />
                    <Box>
                        <Heading size="md" color={colorMode === 'light' ? 'black' : 'white'} mb={2}>
                            One Month Free Gym Membership
                        </Heading>
                        <Text fontSize="sm" color="gray.500" mb={2}>
                            2021-10-01
                        </Text>
                        <Text fontSize="md" color={colorMode === 'light' ? 'black' : 'white'}  mb={2}>
                            <LinkOverlay href='https://www.planetfitness.com/' isExternal>
                                join now
                            </LinkOverlay>
                        </Text>

                        <Badge colorScheme="blue" mt={2}>
                            Planet Fitness
                        </Badge>
                    </Box>
                    <Spacer />
                    <Icon as={FaAudioDescription} mr={2} fontSize="xl"/>
                </Flex>
            </LinkBox>
        </Box>
    )
}