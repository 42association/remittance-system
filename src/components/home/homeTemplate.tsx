// homeTemplate.tsx
import { Box, Heading, VStack } from "@chakra-ui/react";
import { PointBalance } from "./pointBalance";
import { TransactionHistory, HistoryItem } from "./history";
import Face from "../icons/face";

interface HomeTemplateProps {
    balance: number;
    history: HistoryItem[];
}


export const HomeTemplate = () => {
    // 本来はAPIからデータを取得する
    const homeProps: HomeTemplateProps = {
        balance: 12345,
        history: [
            { id: 1, description: "daily point", date: "2021-01-01", amount: 1 },
            { id: 2, description: "I got points from 42tokyo.", date: "2021-01-02", amount: 42 },
            { id: 3, description: "I got points from susasaki.", date: "2021-01-03", amount: 999 },
            { id: 4, description: "I spent points on a gift.", date: "2021-01-04", amount: -10 },
            { id: 5, description: "I received a bonus.", date: "2021-01-05", amount: 50 },
            { id: 6, description: "I redeemed my points for cash.", date: "2021-01-06", amount: -100 },
            { id: 7, description: "I earned points from a referral.", date: "2021-01-07", amount: 20 },
            { id: 8, description: "I made a donation.", date: "2021-01-08", amount: -5 },
            { id: 9, description: "I got points from GitHub Copilot.", date: "2021-01-09", amount: 100 },
            { id: 10, description: "I spent points on a new gadget.", date: "2021-01-10", amount: -200 },
            { id: 11, description: "I received a cashback.", date: "2021-01-11", amount: 30 },
            { id: 12, description: "I earned points from a survey.", date: "2021-01-12", amount: 15 },
            { id: 13, description: "I redeemed my points for a gift card.", date: "2021-01-13", amount: -50 },
            { id: 14, description: "I got points from a friend.", date: "2021-01-14", amount: 10 },
            { id: 15, description: "I made a purchase.", date: "2021-01-15", amount: -25 },
            { id: 16, description: "I earned points from a game.", date: "2021-01-16", amount: 40 },
        ],
    };
    return (
        <Box>
            <Face />
            <Box overflowY="scroll">
                <VStack spacing="10" alignItems="center">
                    <PointBalance balance={homeProps.balance} />
                    <TransactionHistory history={homeProps.history} />
                </VStack>
            </Box>
        </Box>

    );
};
