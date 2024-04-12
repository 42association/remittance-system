import React from 'react';
import { Box, Button } from '@chakra-ui/react';
import { SignInButton } from './signInButton';

export const LoginTemplate = () => {
    return (
        <Box display="flex" justifyContent="center" alignItems="center" h="100vh">
            <SignInButton />
        </Box>
    );
};