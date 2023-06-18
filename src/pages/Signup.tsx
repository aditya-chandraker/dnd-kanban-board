import { useState } from 'react';
import { Text, Center, Flex, Heading, Input, Button, InputGroup, Stack, InputLeftElement, chakra, Box, FormControl, InputRightElement, useColorMode, useToast, Spinner } from '@chakra-ui/react';
import { FcGoogle } from 'react-icons/fc';
import { FaLock } from 'react-icons/fa';
import { useNavigate, Link } from 'react-router-dom';

const CFaLock = chakra(FaLock);

export default function SignUpPage() {
    const navigate = useNavigate();
    const { colorMode } = useColorMode();
    const [showPassword, setShowPassword] = useState(false);
    const [userName, setUserName] = useState('');
    const toast = useToast();
    const [profile, setProfile] = useState({
        name: '',
        biography: '',
        userid: null,
    });
    const [username, setUsername] = useState({
        username: '',
        userid: null,
    });
    const [isLoading, setIsLoading] = useState(false); //for login loading
    const loading = () => {
        setIsLoading(true);
        console.log(isLoading);
    };

    const handleShowClick = () => setShowPassword(!showPassword);

    //Check for an existing userName
    //Pass the email and password into Supabase Signup Method
    //-- Display any issues with sign up to the user
    //(Must check that account has been made) Insert username and other data into profiles table

    // Supabase
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [repeatPassword, setRepeatPassword] = useState('')
    const [username, setUsername] = useState('')

    // React Router
    const navigate = useNavigate()

    // ChakraUI
    const toast = useToast()
    const [isEmailError, setIsEmailError] = useState(false)
    const [isPasswordError, setIsPasswordError] = useState(false)
    const [isRepeatPasswordError, setIsRepeatPasswordError] = useState(false)
    const [isUsernameError, setIsUsernameError] = useState(false)


    const SignUp = async function () {

        // Closes all previous opened toasts (makes spam clicking submit be less annoying)
        toast.closeAll()

        // Check if any fields are empty
        if (email === "" || password === "" || username === "") {
            toast({
                title: "Please fill in all required fields",
                position: 'bottom',
                status: 'error',
                duration: 5000,
                isClosable: false,
            })
            return
        }

        // @ and '.' symbols in email
        if (!email.includes('.') || !email.includes('@')) {
            setIsEmailError(true)
            return
        }
        // 8 char minimum password
        if (password.length < 8) {
            setIsPasswordError(true)
            setIsRepeatPasswordError(false)
            return
        }
        // matching passwords
        if (repeatPassword !== password) {
            setIsRepeatPasswordError(true)
            return
        }
        // username requirements
        if (username.length < 3 || username.length > 12 || !/^[a-z0-9]+$/.test(username)) {
            setIsUsernameError(true)
            return
        }

        // Check if email is already taken
        const { data: userProfileEmail, error: userProfileEmailError } = await supabase
            .from('user_profile')
            .select('auth_id')
            .eq('email', email)

        // Check if username is already taken
        const { data: userProfileId, error: userProfileIdError } = await supabase
            .from('user_profile')
            .select('auth_id')
            .eq('username', username)

        if (userProfileEmailError || userProfileIdError) {
            console.log("Error email data")
            console.log(userProfileEmailError)
            console.log("Error id data")
            console.log(userProfileIdError)
            return
        }

        if (userProfileEmail.length > 0 && userProfileEmail[0].auth_id != null) {
            toast({
                title: "Email is already taken",
                position: 'bottom',
                status: 'error',
                duration: 5000,
                isClosable: false,
            })
            return
        }

        if (userProfileId.length > 0 && userProfileId[0].auth_id != null) {
            toast({
                title: "Username is already taken",
                position: 'bottom',
                status: 'error',
                duration: 5000,
                isClosable: false,
            })
            return
        }

        try {
            // Sign up the user
            const { user, error } = await supabase.auth.signUp({
                email,
                password,
            })

            if (error) {
                console.log("Error signing up")
                console.log(user)
                console.log(error)
                return
            }

            // Insert the user's profile data into the user_profile table
            const { data: userProfileInsertData, error: userProfileInsertError } = await supabase
                .from('user_profile')
                .insert({
                    username: username,
                    email: email,
                })

            console.log(userProfileInsertData)
            console.log(userProfileInsertError)

            // toast({
            //     title: "Check your email for verification",
            //     position: 'bottom',
            //     status: 'success',
            //     duration: 3000,
            //     isClosable: false,
            // })
            navigate('/checkverification')

            if (userProfileInsertError) {
                console.log(userProfileInsertError)
                return
            }

            // if (userProfileInsertData) {
            //     // navigate('/', { state: { session: user.session } })
            // }
        } catch (err) {
            toast({
                title: err.message,
                position: 'bottom',
                status: 'error',
                duration: 3000,
                isClosable: false,
            })
            console.log(err)
        }
    }


    const isValidUserName = async event => {
        //Throw a toast if username is too long or too short
        if (userName.length < 8 && userName.length > 20) {
            toast({
                title: 'Authentication Error',
                description: 'Username must be between 8 and 20 characters',
                status: 'error',
                duration: 5000,
                isClosable: true,
            });
            return false;
        }

        //Throw a toast if username does not pass char checks
        if (!/^[A-Za-z0-9]*$/.test(userName)) {
            toast({
                title: 'Authentication Error',
                description: 'Usernames can only contain alphanumeric characters',
                status: 'error',
                duration: 5000,
                isClosable: true,
            });
            return false;
        }

        //Throw a toast if username already exists
        let { data, err } = await supabase
            .from('usernames')
            .select()
            .eq('username', userName);
        console.log('userNameQuery returns: ', data);

        if (data.length > 0) {
            toast({
                title: 'Authentication Error',
                description: 'This username is already taken',
                status: 'error',
                duration: 5000,
                isClosable: true,
            });
            return false;
        }
        return true;
    };

    return (
        <Flex
            flexDirection='column'
            width='100wh'
            height='100vh'
            justifyContent='center'
            alignItems='center'
        >
            <Stack
                flexDir='column'
                mb='2'
                justifyContent='center'
                alignItems='center'
            >
                <Heading
                    fontWeight='extrabold'
                    bgGradient='linear(to-l, teal.300, blue.500)'
                    bgClip='text'
                >
                    GoalTac Sign Up
                </Heading>
                <Box>
                    <form onSubmit={handleSubmit}>
                        <Stack
                            spacing={4}
                            p='1rem'
                            backgroundColor={
                                colorMode === 'light' ? 'whiteAlpha.900' : 'blackAlpha.300'
                            }
                            boxShadow='md'
                        >
                            <FormControl>
                                <InputGroup>
                                    <InputLeftElement
                                        pointerEvents='none'
                                        children={<CFaUserAlt color='gray.300' />}
                                    />
                                    {/* Username */}
                                    <Input
                                        type='text'
                                        id='userName'
                                        placeholder='Username'
                                        value={userName}
                                        onChange={event => setUserName(event.target.value)}
                                    />
                                </InputGroup>
                            </FormControl>
                            <FormControl>
                                <InputGroup>
                                    <InputLeftElement
                                        pointerEvents='none'
                                        children={<CFaUserAlt color='gray.300' />}
                                    />
                                    {/* Email */}
                                    <Input
                                        type='email'
                                        id='email'
                                        placeholder='Email Address'
                                        value={email}
                                        onChange={event => setEmail(event.target.value)}
                                    />
                                </InputGroup>
                            </FormControl>
                            <FormControl>
                                <InputGroup>
                                    <InputLeftElement
                                        pointerEvents='none'
                                        color='gray.300'
                                        children={<CFaLock color='gray.300' />}
                                    />
                                    {/* Password */}
                                    <Input
                                        type={showPassword ? 'text' : 'password'}
                                        placeholder='Password'
                                        id='password'
                                        value={password}
                                        onChange={event => setPassword(event.target.value)}
                                    />
                                    <InputRightElement width='4.5rem'>
                                        <Button h='1.75rem' size='sm' onClick={handleShowClick}>
                                            {/* <ViewIcon color="gray.300" />
                      <ViewOffIcon color="gray.300" /> */}
                                            {showPassword ? 'hide' : 'show'}
                                        </Button>
                                    </InputRightElement>
                                </InputGroup>
                            </FormControl>
                            <Button
                                borderRadius={5}
                                type='submit'
                                variant='solid'
                                width='full'
                            >
                                Sign Up
                            </Button>
                            <Center>Or</Center>
                            <Button
                                w={'full'}
                                maxW={'md'}
                                variant={'outline'}
                                leftIcon={<FcGoogle />}
                            >
                                <Center>
                                    <Text>Sign up with Google</Text>
                                </Center>
                            </Button>
                        </Stack>
                    </form>
                </Box>
                <Link onClick={loading} as={Link} to='/signin'>
                    {isLoading == true ? <Spinner /> : 'Back to Sign In'}
                </Link>
            </Stack>
        </Flex>
    );
}
