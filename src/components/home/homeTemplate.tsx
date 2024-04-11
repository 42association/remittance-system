// homeTemplate.tsx
import { Box, Heading, VStack } from "@chakra-ui/react";
import Face from '@/src/components/icons/face';
import { HomeIconButton, PiggyBankButton, CoinExchangeButton, RankButton } from '@/src/components/icons/icons';
import { PointBalance } from "./pointBalance";

interface HomeTemplateProps {
    balance: number;
    // 履歴を表示するためのデータを追加
}

export const HomeTemplate = () => {
    const userPhotoUrl = 'https://images.pexels.com/photos/1933873/pexels-photo-1933873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2';
    // 本来はAPIからデータを取得する
    const homeProps: HomeTemplateProps = {
        balance: 12345,
    };
    return (
        <Box>
            {/* <HomeIcon /> */}
            <HomeIconButton />
            <PiggyBankButton />
            <CoinExchangeButton />
            <RankButton />
        <PointBalance balance={homeProps.balance} />
        </Box>
    );
};
