import {Box, Button, Avatar, Text, Flex} from "@chakra-ui/react";

export const SendConfirm = () => {
    return (
        <Box pt="120px" textAlign="center">
          <Flex justifyContent="center" alignItems="center" mb="42px">
            <Avatar name="ymatsui" src='//ui-avatars.com/api/?name=Yushi matsui&background=e3ad03&color=ffffff' />
            <Text ml={"0.5em"} fontSize="32px" color="white">ymatsui</Text>
          </Flex>
            <Text fontSize="90px" color="white" lineHeight="1em" mb="65px"><a href="#">3pt</a></Text>
            <Button width="160px" height="60px" borderRadius="20px" bg="#EF4C4C" _hover={{ bg: '#EF4C4C' }} fontSize="40px" fontWeight="normal" color="#ffffff">送る</Button>
        </Box>
    );
}