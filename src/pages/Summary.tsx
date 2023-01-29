/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import MainBoxPageBackground from "@/components/svgs/MainBoxPageBackground";
import PullPageBg from "@/components/svgs/PullPageBg";
import Link from "next/link";
import SidePageGarnish from "@/components/svgs/SidePageGarnish";

const draws = [
    {
        title: "White Ham",
        rarity: "epic",
        price: 4.49,
        img: "https://picsum.photos/300/200",
    },
    {
        title: "Creamy Coleslaw",
        rarity: "legendary",
        price: 8.99,
        img: "https://picsum.photos/300/200",
    },
    {
        title: "Creamy Coleslaw",
        rarity: "legendary",
        price: 8.99,
        img: "https://picsum.photos/300/200",
    },
    {
        title: "Creamy Coleslaw",
        rarity: "rare",
        price: 8.99,
        img: "https://picsum.photos/300/200",
    },
    {
        title: "Creamy Coleslaw",
        rarity: "common",
        price: 8.99,
        img: "https://picsum.photos/300/200",
    },
];

export default function Summary() {
    return (
        <>
            <Head>
                <title>Foodbox | Roll Now </title>
                <meta name="description" content="Foodbox: Dine and Discover" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="container mx-auto w-screen px-6">
                <div className="w-screen absolute">
                    <SidePageGarnish></SidePageGarnish>
                </div>
                <div className="z-10 flex flex-col items-center">
                    <h1 className="text-6xl z-10 text-theme-purple mt-2 font-title">
                        Order Summary
                    </h1>
                    <h2 className="text-theme-purple z-10 mt-2 text-3xl">
                        Main Box - Ultimate Pull
                    </h2>
                    <div className="bg-white w-3/4 h-[60vh] rounded-3xl button-shadow text-theme-orange mt-4 z-10 p-6">
                        <div className="flex justify-between font-title text-2xl">
                            <span>Item</span>
                            <span>Coupon Code</span>
                        </div>
                        <div>
                            {draws.map((draw) => (
                                <div
                                    key={draw.title}
                                    className="flex justify-between mt-4"
                                >
                                    <span className="text-xl">
                                        ${(draw.price * 0.65).toFixed(2)} -{" "}
                                        {draw.title}
                                    </span>
                                    <span className="font-title text-theme-purple">
                                        FDBX508698
                                    </span>
                                </div>
                            ))}
                            <div className="flex justify-evenly text-center font-title text-xl mt-3">
                                <div>
                                    <h3>Total Purchase:</h3>
                                    <h4>
                                        $
                                        {(
                                            draws.reduce(
                                                (acc, curr) => acc + curr.price,
                                                0
                                            ) * 0.65
                                        ).toFixed(2)}
                                    </h4>
                                </div>
                                <div>
                                    <h3>Total Savings:</h3>
                                    <h4>
                                        $
                                        {(
                                            draws.reduce(
                                                (acc, curr) => acc + curr.price,
                                                0
                                            ) * 0.35
                                        ).toFixed(2)}
                                    </h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}
