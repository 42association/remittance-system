import { Box, Heading, VStack } from "@chakra-ui/react";
import Face from '@/src/components/icons/face';


export const HomeTemplate = () => {
    const userPhotoUrl = 'https://images.pexels.com/photos/1933873/pexels-photo-1933873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2';
    return (
        <Box
            justifyContent="center"
            overflowY="scroll"// 縦方向のスクロールを有効にする
            height="100vh"
        >
            <VStack>
                <Face photoUrl={userPhotoUrl} userName="John Doe"/>
                <Heading>Home</Heading>
                <Heading>Home</Heading>
                <Heading>Home</Heading>
                <Heading>Home</Heading>
                <Heading>Home</Heading>
                <Heading>Home</Heading>
                <Heading>Home</Heading>
                <Heading>Home</Heading>
                <Heading>Home</Heading>
                <Heading>Home</Heading>
                <Heading>Home</Heading>
                <Heading>Home</Heading>
                <Heading>Home</Heading>
                <Heading>Home</Heading>
                <Heading>Home</Heading>
                <Heading>Home</Heading>
                <Heading>Home</Heading>
                <Heading>Home</Heading>
                <Heading>Home</Heading>
                <Heading>Home</Heading>
                <Heading>Home</Heading>
                <Heading>Home</Heading>
                <Heading>Home</Heading>
                <Heading>Home</Heading>
                <Heading>Home</Heading>
                <Heading>Home</Heading>
                <Heading>Home</Heading>
            </VStack>
        </Box>
    );
}
