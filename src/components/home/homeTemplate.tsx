// homeTemplate.tsx
import { Box, Heading, VStack } from "@chakra-ui/react";
import { PointBalance } from "./pointBalance";

interface HomeTemplateProps {
    balance: number;
    // 履歴を表示するためのデータを追加
}

export const HomeTemplate = () => {
    // 本来はAPIからデータを取得する
    const homeProps: HomeTemplateProps = {
        balance: 12345,
    };

    return (
        <PointBalance balance={homeProps.balance} />
    );
};