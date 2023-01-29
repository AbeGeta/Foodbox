import Head from "next/head";
import MainBoxBackground from "@/components/svgs/MainBoxBackground";
import RecommendedBackground from "@/components/svgs/RecommendedBackground";

export default function Foodboxes() {
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
                <h1 className="text-theme-purple text-4xl font-title mt-6">
                    Foodboxes for you
                </h1>
                {/* top main box rec */}
                <section className="flex justify-around mt-5">
                    <div className="relative bg-theme-purple h-40 w-1/3 rounded-3xl button-shadow text-theme-orange">
                        <MainBoxBackground></MainBoxBackground>

                        <div className="absolute text-white bottom-5 left-5">
                            <h2 className="font-title text-2xl">Main Box</h2>
                            <h3 className="text-sm">
                                Literally everything we have to offer!
                            </h3>
                        </div>
                    </div>
                    <div className="relative bg-theme-purple h-40 w-1/3 rounded-3xl button-shadow text-theme-orange">
                        <RecommendedBackground></RecommendedBackground>
                        <div className="absolute text-white bottom-1/2 left-1/2 -translate-x-1/2 translate-y-1/2 text-center w-fit">
                            <h2 className="font-title text-2xl">Recommended</h2>
                            <h3 className="text-sm w-fit">
                                All our assorted boxes sorted just for you!
                            </h3>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}
