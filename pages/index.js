import Head from "next/head";
import Footer from "../components/Footer";

import Header from "../components/Header";
import Hero from "../components/Hero";
import LgCard from "../components/LgCard";
import MdCard from "../components/MdCard";
import SmCard from "../components/SmCard";

export default function Home({ exploreData, cardData }) {
    return (
        <div className="">
            <Head>
                <title>airbnb Clone</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header />
            <Hero />

            <main className="max-w-6xl mx-auto px-6 sm:px-10 md:px-12">
                <section className="p-4">
                    <h2 className="text-2xl font-bold md:text-3xl py-2">
                        Explore Nearby
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                        {exploreData?.map((place) => (
                            <SmCard
                                key={place.location}
                                img={place.img}
                                location={place.location}
                                distance={place.distance}
                            />
                        ))}
                    </div>
                </section>
                <section>
                    <h2 className="text-2xl font-bold md:text-3xl py-2">
                        Live Anywhere
                    </h2>
                    <div className="flex space-x-3 overflow-x-scroll scrollbar-hide p-3 ">
                        {cardData?.map((item) => (
                            <MdCard
                                key={item.title}
                                img={item.img}
                                title={item.title}
                            />
                        ))}
                    </div>
                </section>
                <LgCard />
            </main>
            <Footer />
        </div>
    );
}
export async function getStaticProps() {
    const exploreData = await fetch("https://jsonkeeper.com/b/HXFT").then(
        (res) => res.json()
    );
    const cardData = await fetch("https://links.papareact.com/zp1").then(
        (res) => res.json()
    );
    return {
        props: {
            exploreData,
            cardData,
        },
    };
}
