/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import PullPageBg from "@/components/svgs/PullPageBg";
import { useEffect, useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import randomRes from "@/runthisifonserverlmao.json";
interface Draw {
    name: string;
    rarity: string;
    cost: number;
    img: string;
}

export default function MainBox() {
    const rarity_shadows: { [key: string]: string } = {
        rare: "shadow-blue-500",
        legendary: "shadow-orange-600",
        epic: "shadow-purple-500",
        common: "shadow-black",
    };
    const [results, setResults] = useState<null | Draw[]>(null);
    useEffect(() => {
        if (process.env.NODE_ENV === "production") {
            setResults(randomRes);
            return;
        }
        fetch("http://127.0.0.1:8000/5")
            .then((res) => res.json())
            .then((res) => setResults(res));
    }, []);
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
            <main className="container mx-auto w-screen px-6 flex items-center">
                <div className="h-full absolute bottom-0 left-1/2 -translate-x-1/2">
                    <PullPageBg></PullPageBg>
                </div>
                {/* Food Cards */}
                <div className="flex w-full justify-evenly gap-3 items-center z-10 mt-16">
                    {results?.length &&
                        results.slice(0, 5).map((draw) => (
                            <div
                                key={draw.name}
                                className={
                                    `bg-white flex flex-col items-center justify-around  rounded-3xl p-3 shadow-2xl w-64 h-96` +
                                    " " +
                                    rarity_shadows[draw.rarity]
                                }
                            >
                                <h3 className="font-title text-center">
                                    {draw.name}
                                </h3>
                                <img
                                    src={draw.img}
                                    alt="card img"
                                    className="object-cover rounded-3xl p-1"
                                />
                                <p>
                                    Rarity:{" "}
                                    <span className="font-bold">
                                        {draw.rarity}
                                    </span>
                                </p>
                                <div className="flex justify-evenly w-full text-center">
                                    <div>
                                        <p>Was:</p>
                                        <p className="line-through">
                                            ${draw.cost}
                                        </p>
                                    </div>
                                    <div>
                                        <p>You Pay:</p>
                                        <p className="font-bold">
                                            ${(draw.cost * 0.65).toFixed(2)}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                </div>
                <button
                    className="button bg-theme-orange text-theme-purple bottom-[15%] button-shadow left-1/2 -translate-x-1/2 absolute"
                    onClick={() =>
                        alert(
                            results ? JSON.stringify(results[5]) : "FDX2352352"
                        )
                    }
                >
                    Get Coupon
                </button>
            </main>
        </>
    );
}
