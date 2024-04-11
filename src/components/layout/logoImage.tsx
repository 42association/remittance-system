import React from 'react';
import { Image } from '@chakra-ui/react';

export const LogoImage = () => {
    return (
        <Image
            src="/42tokyo.svg"
            alt="Logo"
            position="fixed"
            top="100px"
            left="50%"
            transform="translateX(-50%)"
            objectFit="contain"
            height="150px"
            opacity={0.1}
            filter="invert(100%)"
            zIndex={-1}
        />
    );
};