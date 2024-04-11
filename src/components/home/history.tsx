import { Box, HStack, Text, VStack } from '@chakra-ui/react';
import Face from '../icons/face';

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
        <Box height="100vh" display="flex" justifyContent="center" alignItems="flex-start" paddingTop="60%">
            <VStack fontSize="xl" fontWeight="bold" mb={4}>
                <Box position="absolute" borderColor="white" borderStyle="solid" borderRadius="30px" borderWidth="1px" width="90%">
                    {history.map((item) => (
                        <Box key={item.id} padding="4" display="flex" alignItems="center" color="white">
                            <Face />
                            <Box flex="1" textAlign="center">
                                <Text>{item.date}</Text>
                                <Text>{item.description}</Text>
                            </Box>
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