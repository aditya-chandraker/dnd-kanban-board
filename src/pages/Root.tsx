import { useColorMode, Flex, Box, Image, Avatar, Menu, MenuButton, MenuList, MenuItem, Switch, IconButton, InputGroup, InputLeftElement, Input, Icon, useMediaQuery, Button } from "@chakra-ui/react";
import { useState } from "react";
import { FaUser, FaCog, FaSignOutAlt, FaRegNewspaper, FaSearch } from "react-icons/fa";
import { Link, Outlet, } from "react-router-dom";
import GlobalSpinner from "../components/GlobalSpinner";


export default function Root() {
  const { colorMode, toggleColorMode } = useColorMode();

  const [inputValue, setInputValue] = useState('');
  const [isLargerThan768] = useMediaQuery('(min-width: 768px)');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle search
  };

  return (
    <div>
      <Flex
        bg={colorMode === "light" ? 'gray.50' : 'gray.700'}
        p={1}
        pl={2}
        alignItems="center"
        position="fixed"
        top={0}
        left={0}
        right={0}
        zIndex={10}>

        {/* logo to link to home (calendar) */}
        <Box>
          <Link to="/calendar">
            <Image src="/logo.png" alt="Logo" boxSize="40px" />
          </Link>
        </Box>

        {/* Feed */}
        <IconButton as={Link} to="/feed" aria-label="Feed" icon={<FaRegNewspaper />} fontSize="3xl" mr={4} ml={4} background="rgba(0, 0, 0, 0.0)" />

        {/* Searchbar (changes depending on screen size)*/}
        {isLargerThan768 ? (
          <Flex justifyContent="center" width="80%">
            <InputGroup w="50%">
              <Input bg={colorMode === "light" ? 'gray.200' : 'gray.800'} type="text" value={inputValue} onChange={handleInputChange} placeholder="Search" m={.5} />
              <Link to={`/search?query=${inputValue}`}>
                <Icon as={FaSearch} color="gray.500" cursor="pointer" fontSize="2xl" mt={2.5} ml={2} />
              </Link>
            </InputGroup>
          </Flex>
        ) : (
          <Box ml="auto" pr={2}>
            <form onSubmit={handleFormSubmit}>
              <InputGroup>
                <Input type="text" value={inputValue} onChange={handleInputChange} placeholder="Search" display="none" />
                <InputLeftElement pointerEvents="none" children={<Icon as={FaSearch} color="gray.500" />} />
                <Button type="submit" aria-label="Search" colorScheme="blue" >
                  <FaSearch />
                </Button>
              </InputGroup>
            </form>
          </Box>
        )}

        {/* Profile */}
        <Box ml="auto" pr={2}>
          <Menu>
            <MenuButton as={Avatar} src="/avatar.png" size="sm" cursor="pointer" />
            <MenuList>
              <Link to="/profile">
                <MenuItem icon={<FaUser />} fontSize="sm">Profile & Settings</MenuItem>
              </Link>
              <MenuItem icon={<FaSignOutAlt />} fontSize="sm">Logout</MenuItem>
              <MenuItem fontSize="sm">
                Dark Mode
                <Switch ml="auto" isChecked={colorMode === "dark"} onChange={toggleColorMode} />
              </MenuItem>
            </MenuList>
          </Menu>
        </Box>
      </Flex>
      <Outlet />
    </div>
  );
};