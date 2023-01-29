import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import BoxWFruits from "@/components/svgs/BoxWFruits";
import Link from "next/link";

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
                <section className="mt-12">
                    {/* Hero Left */}
                    <div className="w-6/12">
                        <h1 className="text-7xl leading-[90px] text-[#3D1061] font-title">
                            Let fate decide your food.
                        </h1>
                        <h2 className="text-3xl font-light mt-6">
                            Dine and discover with Foodbox.
                        </h2>
                        <div className="mt-8">
                            <Link
                                href={"Foodboxes"}
                                className="button button-shadow bg-theme-orange text-theme-purple py-3 px-12 active:shadow-none transition-all"
                            >
                                <span className="text-black">Roll Now</span>
                            </Link>
                        </div>
                    </div>
                    {/* hero right */}
                    <div className="absolute w-5/12 right-0 bottom-0">
                        <BoxWFruits></BoxWFruits>
                    </div>
                </section>
            </main>
        </>
    );
}
