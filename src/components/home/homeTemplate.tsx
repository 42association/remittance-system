// homeTemplate.tsx
import { Box, Heading, VStack } from "@chakra-ui/react";
import { HomeIconButton, PiggyBankButton, CoinExchangeButton, RankButton } from '@/src/components/icons/icons';
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
        ],
    };
    return (
        <Box>
            {/* <HomeIconButton />
            <PiggyBankButton />
            <CoinExchangeButton />
            <RankButton /> */}
            <Face />
            <Box overflowY="scroll" height="100%">
                <VStack spacing={4} alignItems="center">
                    <PointBalance balance={homeProps.balance} />
                    <TransactionHistory history={homeProps.history} />
                </VStack>
            </Box>
        </Box>

    );
};
