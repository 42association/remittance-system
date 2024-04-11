// homeTemplate.tsx
import { Box, Heading, VStack } from "@chakra-ui/react";
import { PointBalance } from "./pointBalance";

interface HomeTemplateProps {
    balance: number;
    // 履歴を表示するためのデータを追加
}

export const HomeTemplate = ({ balance }: HomeTemplateProps) => {
    return (
        <VStack>
            <Heading>ホームページ</Heading>
            <PointBalance balance={balance} />
        </VStack>
    );
};