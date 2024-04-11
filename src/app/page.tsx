import { Metadata } from "next";
import { HomeTemplate } from "@/src/components/home/homeTemplate";

export const metadata: Metadata = {
    title: "Home",
};

interface HomeProps {
    balance: number;
}

export default function HomePage() {
    // 本来はAPIからデータを取得する
    const homeProps: HomeProps = {
        balance: 100,
    };

    return <HomeTemplate balance={homeProps.balance} />;
}