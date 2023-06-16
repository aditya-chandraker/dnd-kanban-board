import { useState, useEffect } from 'react';
import {
    Flex,
    Avatar,
    Heading,
    Text,
    Button,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton,
    Stack,
    FormControl,
    FormLabel,
} from '@chakra-ui/react';

export default function Profile() {
    useEffect(() => {
        document.title = 'Profile';
    }, []);

    const person = {
        name: 'adi',
        bio: 'yo mum',
        avatarUrl:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKugxPr-1H_vLenUxIwJnFzItWtCp6sGNFcV13Ols5Ug&usqp=CAU&ec=48665698',
    };

    const [isEditingProfile, setIsEditingProfile] = useState(false);

    const handleEditProfile = () => {
        setIsEditingProfile(true);
    };

    const handleCloseModal = () => {
        setIsEditingProfile(false);
    };

    return (
        <Flex direction="row" mt={3} p={3}>
            <Flex direction="column" p={12}>
                <Avatar boxSize={300} name={person.name} src={person.avatarUrl} />
                <Heading as="h1" size="xl" mt={4}>
                    {person.name}
                </Heading>
                <Text fontSize="lg" color="gray.500">
                    {person.bio}
                </Text>
                <Button mt={4} onClick={handleEditProfile}>
                    Edit Profile
                </Button>
                <Modal isOpen={isEditingProfile} onClose={handleCloseModal}>
                    <ModalOverlay />
                    <ModalContent>
                        <ModalHeader>Edit Profile</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>
                            {/* Add form for editing profile here */}
                        </ModalBody>
                    </ModalContent>
                </Modal>
            </Flex>

            <Flex direction="column" mt={12} p={12}>
                <Heading as="h1" size="xl" mb={4}>
                    Settings
                </Heading>
                <Text fontSize="lg" color="gray.500" mb={8}>
                    Configure your settings below.
                </Text>
            </Flex>
        </Flex>
    );
}