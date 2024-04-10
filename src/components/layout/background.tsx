import React from 'react';
import { Box, Image } from '@chakra-ui/react';

export const Background = () => {
    return (
        <Box bg="gray.700" minHeight="100vh" position="relative">
            <Image
                src="/42tokyo.svg"// publicディレクトリ内のファイルは、アプリケーションのルートパスからアクセスできる
                alt="42tokyo"
                position="absolute"
                top="15%"
                left="50%"
                transform="translateX(-50%)"
                width="200px"
                height="auto"
                opacity={0.5}
                filter="invert(100%)" // 色を反転
            />
        </Box>
    );
};