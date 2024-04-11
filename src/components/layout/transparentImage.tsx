import React from 'react';
import { Image } from '@chakra-ui/react';

export const LogoImage = () => {
    return (
        <Image
            src="/42tokyo.svg"
            alt="Logo"
            position="fixed"
            top="20%"
            left="50%"
            transform="translateX(-50%)"
            width="200px"
            height="auto"
            opacity={0.5}
            filter="invert(100%)"
        />
    );
};