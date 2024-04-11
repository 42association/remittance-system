import { Box, Heading, extendTheme } from "@chakra-ui/react";
interface PointBalanceProps {
    balance: number;
}

export const PointBalance = ({ balance }: PointBalanceProps) => {
    const headingSize = balance.toString().length > 10 ? "2xl" : "4xl";

    return (
        <Box position="absolute" width="100%" height="100%">
            <Heading
                color="white"
                // useBreakpointValueが使用できないため、CSSメディアクエスを使う
                size={headingSize}
                position="absolute"
                top="10%"
                left="50%"
                transform="translateX(-50%)"
                whiteSpace="nowrap"
                overflow="hidden"
                textOverflow="ellipsis"
            >
                {balance} FT
            </Heading>
        </Box>
    );
};