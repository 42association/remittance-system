import React from 'react';
import { Box, Flex, Link, Text } from '@chakra-ui/react';

const menuItems = [
    { label: 'ホーム', href: '/' },
    { label: '投げ銭', href: '/send' },
    { label: '両替', href: '/exchange' },
    { label: '順位', href: '/rank' },
];

export const Header = () => {
    return (
        <Box bg="gray.900" color="white" py={4} position="fixed" bottom={0} left={0} right={0}>
            <Flex justifyContent="space-around">
                {menuItems.map((item, index) => (
                    <Link href={item.href} key={index}>
                        <Text>{item.label}</Text>
                    </Link>
                ))}
            </Flex>
        </Box>
    );
};