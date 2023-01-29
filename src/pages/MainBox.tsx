import Head from "next/head";
import MainBoxPageBackground from "@/components/svgs/MainBoxPageBackground";

export default function MainBox() {
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
            <main className="container mx-auto w-screen h-screen px-6 flex flex-col items-end justify-center relative ">
                <div className="absolute overflow-y-hidden -left-[10%] opacity-80">
                    <MainBoxPageBackground></MainBoxPageBackground>
                </div>

                <div className="z-10">
                    <h1 className="font-title text-6xl text-theme-purple text-right">
                        Main Box
                    </h1>
                    <div className="text-theme-purple text-xl text-right mt-4">
                        <p className="">
                            Our classic box - and for good reason!
                        </p>
                        <p>
                            Get access to everything we offer in this one box.
                        </p>
                        <p>Who knows, you might find your next fave...</p>
                    </div>
                    <div className="flex mt-4 gap-4">
                        <div className="flex flex-col items-center">
                            <button className="button button-shadow bg-white text-theme-purple px-12">
                                Single Pull
                            </button>
                            <span className="mt-2 text-theme-purple">
                                1 item
                            </span>
                            <span className=" text-theme-purple">
                                Save <span className="font-bold">20%</span>
                            </span>
                        </div>
                        <div className="flex flex-col items-center">
                            <button className="button button-shadow bg-theme-orange text-theme-purple px-12">
                                Pull For Two
                            </button>
                            <span className="mt-2 text-theme-purple">
                                1 item
                            </span>
                            <span className=" text-theme-purple">
                                Save <span className="font-bold">30%</span>
                            </span>
                        </div>
                        <div className="flex flex-col justify-center items-center">
                            <button className="button button-shadow bg-theme-purple text-theme-orange px-12">
                                Ultimate Pull
                            </button>
                            <span className="mt-2 text-theme-orange drop-shadow-2xl">
                                1 item
                            </span>
                            <span className=" text-theme-orange drop-shadow-2xl">
                                Save <span className="font-bold">35%</span>
                            </span>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}
