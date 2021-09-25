import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useRouter } from "next/dist/client/router";
import { format } from "date-fns";
import InfoCard from "../components/InfoCard";

const Search = ({ searchResults }) => {
    const router = useRouter();
    const { location, startDate, endDate, nbGuests } = router.query;
    const formatedStartDate = format(new Date(startDate), "dd MMMM yy");
    const formatedEndDate = format(new Date(endDate), "dd MMMM yy");
    const dateRange = `${formatedStartDate} - ${formatedEndDate}`;
    // console.log(searchResults);
    return (
        <div>
            <Header placeHolder={`${location} | ${dateRange} | ${nbGuests}`} />
            <main className="flex">
                <section className="flex-grow pt-14 px-6">
                    <p>
                        300+ Stays{" "}
                        <span className="font-semibold text-gray-600">
                            {dateRange}
                        </span>{" "}
                        for{" "}
                        <span className="font-semibold text-gray-600">
                            {nbGuests}
                        </span>{" "}
                        guests
                    </p>
                    <h1 className="text-2xl font-semibold mt-2 mb-4 ">
                        Stays in {location}
                    </h1>
                    <div className="hidden md:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
                        <p className="filter-btn">Cancellation Flexibility</p>
                        <p className="filter-btn">Type of Place</p>
                        <p className="filter-btn">Price</p>
                        <p className="filter-btn">Rooms and Beds</p>
                        <p className="filter-btn">More Filters</p>
                    </div>
                    <div className="flex flex-col">
                        {searchResults.map((result) => (
                            <InfoCard
                                key={result.long}
                                img={result.img}
                                location={result.location}
                                title={result.title}
                                description={result.description}
                                star={result.star}
                                price={result.price}
                                total={result.total}
                            />
                        ))}
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default Search;

export async function getServerSideProps() {
    const searchResults = await fetch("https://jsonkeeper.com/b/AN10").then(
        (res) => res.json()
    );
    return {
        props: {
            searchResults,
        },
    };
}
