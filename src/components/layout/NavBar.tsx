'use client';
import { Box, Flex } from '@chakra-ui/react';
import NavButton from '@/src/components/icons/NavItem';
import { FaHome, FaPiggyBank, FaCoins, FaList } from 'react-icons/fa';
// import React from 'react';
// import { Box, Flex, Link, Text } from '@chakra-ui/react';

// const menuItems = [
//     { label: 'ホーム', href: '/' },
//     { label: '送金', href: '/send' },
//     { label: '両替', href: '/exchange' },
//     { label: '順位', href: '/rank' },
// ];

const NavBar: React.FC = () => {
    const handleHomeClick = () => { console.log("home clicked") };
    const handleSendClick = () => { console.log("send clicked") };
    const handleExchangeClick = () => { console.log("exchange clicked") };
    const handleRankClick = () => { console.log("rank clicked") };

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
            <NavButton icon={FaHome} label='ホーム' onClick={handleHomeClick} />
            <NavButton icon={FaPiggyBank} label='送金' onClick={handleSendClick} />
            <NavButton icon={FaCoins} label='両替' onClick={handleExchangeClick} />
            <NavButton icon={FaList} label='順位' onClick={handleRankClick} />
            </Flex>
        </Box>
    );
};

export default NavBar;

// export const Navbar = () => {
//     return (
//         <Box bg="gray.900" color="white" py={4} position="fixed" bottom={0} left={0} right={0}>
//             <Flex justifyContent="space-around">
//                 {menuItems.map((item, index) => (
//                     <Link href={item.href} key={index}>
//                         <Text>{item.label}</Text>
//                     </Link>
//                 ))}
//             </Flex>
//         </Box>
//     );
// };
