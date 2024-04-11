'use client';
import { Box, Flex } from '@chakra-ui/react';
import NavButton from '@/src/components/icons/NavItem';
import { FaHome, FaPiggyBank, FaCoins, FaList } from 'react-icons/fa';

const NavBar: React.FC = () => {
    return (
        <Box position="fixed" bottom="0" left="0" right="0">
            <Flex
                as="nav"
                align="center"
                justify="space-between"
                paddingX="10"
                paddingY="3"
                bg="gray.800"
                color="white"
                w="full"
                >
            <NavButton icon={FaHome} label='ホーム' href='/' />
            <NavButton icon={FaPiggyBank} label='送金' href='/send' />
            <NavButton icon={FaCoins} label='両替' href='/exchange' />
            <NavButton icon={FaList} label='順位' href='rank' />
            </Flex>
        </Box>
    );
};

export default NavBar;
