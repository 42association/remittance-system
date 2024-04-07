import { Container, Flex, Heading, Text } from "@chakra-ui/react";


export const HomeTemplate = () => {
    return (
        <Container>
            <Flex justifyContent="center" alignItems="center" height="100vh" >
                <Text fontSize="xl">Home</Text>
            </Flex>
        </Container>
    )
}