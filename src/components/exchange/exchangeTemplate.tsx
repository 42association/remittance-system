import { Box, Text } from "@chakra-ui/react";

export const ExchangeTemplate = () => {
    return (
        <Box
            position="absolute"
            width="100%"
            height="100%"
            display="flex"
            justifyContent="center"
            alignItems="center"
        >
            <Box
                textAlign="center"
                marginTop="-15%"
            >
                <Text
                    color="white"
                    fontSize="5xl"
                    whiteSpace="nowrap"
                    overflow="hidden"
                    textOverflow="ellipsis"
                    transform="rotate(-15deg)"
                >
                    COMMING SOON
                </Text>
            </Box>
        </Box>
    );
};