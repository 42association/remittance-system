import { Box, Text } from '@chakra-ui/react';

interface PointBalanceProps {
    balance: number;
}

export const PointBalance = ({ balance }: PointBalanceProps) => {
    return (
        <Box>
            <Text fontSize="2xl">{balance}</Text>
        </Box>
    );
};
