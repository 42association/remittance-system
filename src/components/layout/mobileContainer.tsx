import React from 'react';
import { Box } from '@chakra-ui/react';

export const MobileContainer: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <Box bg="black" position="relative" height="100vh">
            <Box position="fixed" top={0} bottom={0} left={0} right={0} bg="black">
                <Box
                    position="fixed"
                    top="50%"
                    left="50%"
                    transform="translate(-50%, -50%)"
                    maxWidth="480px"
                    width="100%"
                    height='100%'
                    overflow="hidden"
                >
                    {children}
                </Box>
            </Box>
        </Box>
    );
};