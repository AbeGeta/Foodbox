/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import MainBoxPageBackground from "@/components/svgs/MainBoxPageBackground";
import PullPageBg from "@/components/svgs/PullPageBg";

export default function MainBox() {
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
    ];
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
                <div className="flex w-full justify-between items-center z-10">
                    {draws.map((draw) => (
                        <div
                            key={draw.title}
                            className="bg-white h-64 flex flex-col items-center rounded-3xl"
                        >
                            <h3 className="font-title">{draw.title}</h3>
                            <img
                                src={draw.img}
                                alt="card img"
                                className="object-cover w-3/4 rounded-3xl"
                            />
                            <p>
                                Rarity:
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
                                        ${(draw.price * 0.8).toFixed(2)}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </main>
        </>
    );
}
