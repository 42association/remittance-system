import React from 'react';
import { Button, Link } from '@chakra-ui/react';

export const SignInButton = () => {
    return (
        // API認証の処理
        <Link href="https://profile.intra.42.fr/">
            <Button
                width="240px"
                height="48px"
                borderRadius="10px"
                color="black"
                bg="gray.100"
                _hover={{ bg: 'gray.200' }}
                fontSize="lg"
                fontWeight="bold"
            >
                SIGN IN WITH 42
            </Button>
        </Link>
    );
};