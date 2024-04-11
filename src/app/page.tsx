import { Metadata } from "next";
import { HomeTemplate } from "@/src/components/home/homeTemplate";

export const metadata: Metadata = {
    title: "Home",
};

export default function HomePage() {

    return <HomeTemplate />;
}