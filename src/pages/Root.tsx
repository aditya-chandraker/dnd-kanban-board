import { useColorMode, Flex, Box, Image, Avatar, Menu, MenuButton, MenuList, MenuItem, Switch, IconButton, InputGroup, InputLeftElement, Input, Icon, Spacer } from "@chakra-ui/react";
import { useState } from "react";
import { FaUser, FaCog, FaSignOutAlt, FaRegNewspaper, FaSearch } from "react-icons/fa";
import { Link, Outlet } from "react-router-dom";


export default function Root() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <div>
      <Flex bg="gray.100" p={1} pl={2} alignItems="center">
        <Box>
          <Link to="/calendar">
            <Image src="/logo.png" alt="Logo" boxSize="40px" />
          </Link>
        </Box>
        <IconButton as={Link} to="/feed" aria-label="Feed" icon={<FaRegNewspaper />} fontSize="3xl" mr={4} ml={4} />
        <Flex justifyContent="center" width="80%">
          <InputGroup bg="gray.200" w="50%">
            <InputLeftElement pointerEvents="none" children={<Icon as={FaSearch} color="gray.500" />} />
            <Input type="text" placeholder="Search" />
          </InputGroup>
        </Flex>
        <Box ml="auto" pr={2}>
          <Menu>
            <MenuButton as={Avatar} src="/avatar.png" size="sm" cursor="pointer" />
            <MenuList>
              <MenuItem icon={<FaUser />} fontSize="sm">Profile</MenuItem>
              <MenuItem icon={<FaCog />} fontSize="sm">Settings</MenuItem>
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