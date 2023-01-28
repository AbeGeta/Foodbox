import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    return (
        <>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Foodbox: Dine and Discover" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="container mx-auto">
                {/* Hero Text */}
                <h1 className="text-7xl text-[#3D1061] font-title">
                    Let fate decide your food for you
                </h1>
                <h2 className="text-3xl font-light">
                    Dine and discover with Foodbox.
                </h2>
                <button className="button purple-shadow">
                    Roll Now
                </button>
            </main>
        </>
    );
}
