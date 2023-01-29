import { Main } from "next/document";
import Head from "next/head";
import MainBoxBackground from "../components/svgs/MainBoxBackground"
import RecommendedBoxBackground from "../components/svgs/RecommendedBoxBackground"

export default function Foodboxes() {
    return (
        <>
            <Head>
                <title>Foodbox | Foodboxes</title>
                <meta name="description" content="Foodbox: Dine and Discover" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="container mx-auto w-screen px-6">
                <h1 className="text-7xl leading-[90px] text-[#3D1061] font-title">
                    Foodboxes for you
                </h1>
                <div className="grid grid-cols-2 rounded-lg">
                    <div className="box rounded-lg bg-theme-purple text-white box-shadow">
                        <MainBoxBackground />
                        <h1 className="header bg-transparent">Main Box</h1>
                        <p className="subtitle bg-transparent">Literally everything we have to offer!</p>
                    </div>
                    <div className="box rounded-lg bg-theme-purple text-white box-shadow">
                        <RecommendedBoxBackground />
                        <h1 className="header bg-transparent">Recommended</h1>
                        <p className="subtitle bg-transparent">All our assorted boxes, sorted just for you!</p>
                    </div>
                </div>
                <h1 className="text-7xl leading-[90px] text-[#3D1061] font-title">
                    Taste Boxes
                </h1>
            </main>
        </>
    );
}
