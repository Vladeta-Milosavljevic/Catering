import { useCallback } from "react";
import Item from "./Item";
import Pagination from "./Pagination";
import { debounce } from "lodash";
import { router } from "@inertiajs/react";

export default function ProductList({ foodItems, filters }) {
    const search = filters && filters.search ? filters.search : "";
    const foodList = foodItems.data;
    function searchHandler(event) {
        router.get(
            route("home"),
            { search: event.target.value },
            { preserveState: true, replace: true, preserveScroll: true }
        );
    }
    const debouncedSearchHandler = useCallback(
        debounce(searchHandler, 300),
        []
    );

    return (
        <>
            <section className="bg-white py-6">
                <div className="container mx-auto flex items-center flex-wrap pt-4 pb-4">
                    <nav id="store" className="w-full z-30 top-0 px-6 py-1">
                        <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-2 py-1">
                            <div className="uppercase tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl ">
                                Our menu portfolio
                            </div>
                            <div
                                className="flex items-center"
                                id="store-nav-content"
                            >
                                <input
                                    type="text"
                                    placeholder="Search..."
                                    defaultValue={search === "" ? "" : search}
                                    className="border px-2 rounded-lg"
                                    onChange={debouncedSearchHandler}
                                />
                            </div>
                        </div>
                    </nav>
                    {/* <Item /> */}
                    {foodList.map((food) => (
                        <Item
                            key={food.id}
                            id={food.id}
                            name={food.name}
                            tags={food.tags}
                            type={food.type}
                            image={food.image}
                        />
                    ))}
                </div>
                <div className="container mx-auto flex items-center flex-wrap">
                    <Pagination
                        links={foodItems.links}
                        style="flex flex-wrap"
                    />
                </div>
            </section>
        </>
    );
}
