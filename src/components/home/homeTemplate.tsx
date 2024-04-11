// homeTemplate.tsx
import { Box, Heading, } from "@chakra-ui/react";
import { PointBalance } from "./pointBalance";
import { TransactionHistory, HistoryItem } from "./history";

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
        ],
    };

    return (
        <Box>
            <PointBalance balance={homeProps.balance} />
            <TransactionHistory history={homeProps.history} />
        </Box>
    );
};