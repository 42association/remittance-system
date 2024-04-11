import React from 'react';
import { Box, Image } from '@chakra-ui/react';

interface BackgroundProps {
    children: React.ReactNode;
}

export const Background: React.FC<BackgroundProps> = ({ children }) => {
    return (
        <Box bg="gray.700" minHeight="100vh" position="relative" zIndex={-1}>
            {children}
        </Box>
    );
};