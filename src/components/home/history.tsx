import { Box, HStack, Text, VStack } from '@chakra-ui/react';

export interface HistoryItem {
    id: number;
    description: string;
    date: string;
    amount: number;
}

interface HistoryProps {
    history: HistoryItem[];
}

export const TransactionHistory = ({ history }: HistoryProps) => {
    return (
        <Box height="100vh" display="flex" justifyContent="center" alignItems="flex-start" paddingTop="70%">
            <VStack fontSize="xl" fontWeight="bold" mb={4}>
                <Box borderWidth={1} borderRadius="md">
                    {history.map((item) => (
                        <Box
                            color="white"
                            key={item.id}
                            p={4}
                            mb={4}
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                        >
                            <VStack alignItems="flex-start" >
                                <Text>{item.date}</Text>
                                <Text>{item.description}</Text>
                            </VStack>
                            <Text fontSize="2xl" fontWeight="bold">
                                {item.amount}
                            </Text>
                        </Box>
                    ))}
                </Box>
            </VStack>
        </Box>
    );
};