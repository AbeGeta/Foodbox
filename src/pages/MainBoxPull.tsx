/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import MainBoxPageBackground from "@/components/svgs/MainBoxPageBackground";
import PullPageBg from "@/components/svgs/PullPageBg";
import Link from "next/link";
import { useQuery } from "react-query";

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

const getFoods = async () => {
    const result = await fetch("").then((res) => res.json());
    return result;
};

export default function MainBox() {
    const rarity_shadows: { [key: string]: string } = {
        rare: "shadow-blue-500",
        legendary: "shadow-orange-600",
        epic: "shadow-purple-500",
        common: "shadow-black",
    };
    const { data, isSuccess } = useQuery("foods", getFoods);

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
                    {draws.map((draw) => (
                        <div
                            key={draw.title}
                            className={
                                `bg-white flex flex-col items-center justify-around  rounded-3xl p-3 shadow-2xl` +
                                " " +
                                rarity_shadows[draw.rarity]
                            }
                        >
                            <h3 className="font-title">{draw.title}</h3>
                            <img
                                src={
                                    "https://product-images.metro.ca/images/h0f/h7c/10710642425886.jpg"
                                }
                                alt="card img"
                                className="object-cover rounded-3xl h-32 p-1"
                            />
                            <p>
                                Rarity:{" "}
                                <span className="font-bold">{draw.rarity}</span>
                            </p>
                            <div className="flex justify-evenly w-full text-center">
                                <div>
                                    <p>Was:</p>
                                    <p className="line-through">
                                        ${draw.price}
                                    </p>
                                </div>
                                <div>
                                    <p>You Pay:</p>
                                    <p className="font-bold">
                                        ${(draw.price * 0.65).toFixed(2)}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <Link
                    className="absolute bottom-1/4 left-1/2 -translate-x-1/2 bg-theme-orange button button-shadow text-theme-purple active:shadow-none transition-all"
                    href={"Summary"}
                >
                    Summary
                </Link>
            </main>
        </>
    );
}
