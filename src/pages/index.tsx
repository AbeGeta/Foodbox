import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import BoxWFruits from "@/components/svgs/BoxWFruits";
import Link from 'next/link'
import DietaryRestrictionsList from "@/components/DietaryRestrictionsList";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    return (
        <>
            <Head>
                <title>Foodbox</title>
                <meta name="description" content="Foodbox: Dine and Discover" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="container mx-auto w-screen px-6">
                {/* hero */}
                <section className="flex mt-12">
                    {/* Hero Left */}
                    <div>
                        <h1 className="text-7xl leading-[82px] text-[#3D1061] font-title">
                            Let fate decide your food for you
                        </h1>
                        <h2 className="text-3xl font-light mt-6">
                            Dine and discover with Foodbox
                        </h2>
                        <button className="button purple-shadow mt-6 px-8">
                            Roll Now
                        </button>
                    </div>
                    {/* hero right */}
                    <div className="w-full h-full">
                        <BoxWFruits></BoxWFruits>
                    </div>
                </section>
            </main>
        </>
    );
}
