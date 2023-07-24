import { Head, Link } from "@inertiajs/react";
import React from "react";
import Layout from "./Shared/Layout";
import { useState } from "react";
import ItemModal from "./Shared/components/ItemModal";

export default function ItemShow({ food, can, image }) {
    const tagsList = food.tags.split(" ");
    const [isOpen, setIsOpen] = useState(false);
    console.log(image)
    return (
        <>
            <Head title={food.name} />
            <div className="container mx-auto mb-48">
                <div className="flex items-start justify-center h-screen pt-24">
                    <div>
                        <img
                            className="hover:grow hover:shadow-lg max-w-3xl"
                            src={image}
                        />
                        <div className="pt-3">
                            <p className="h-10">{food.name}</p>
                        </div>
                        <div className="pt-3">
                            <p className="">{food.type}</p>
                        </div>
                        <div className="pt-3">
                            <p>Description</p>
                            <p className="pt-1 max-w-2xl">{food.description}</p>
                        </div>
                        <div className="pt-3 flex">
                            {tagsList.map((tag) => (
                                <Link
                                    key={tag}
                                    href={route("home")}
                                    data={{ tag: tag }}
                                    className="list-none py-1 px-3 mr-2 text-xs  rounded-lg bg-gray-100 text-gray-800  font-medium dark:bg-gray-700 dark:text-gray-400 border border-gray-500"
                                >
                                    {tag}
                                </Link>
                            ))}
                        </div>
                        <div className="pt-3 flex justify-end">
                            {can.edit && (
                                <Link
                                    href={route("food.edit", food.id)}
                                    className="mt-6 inline-flex items-center px-4 py-2 bg-blue-700 dark:bg-gray-200 border border-transparent rounded-md font-semibold text-xs text-white dark:text-gray-800 uppercase tracking-widest hover:bg-blue-600 dark:hover:bg-white focus:bg-blue-500 dark:focus:bg-white active:bg-gray-900 dark:active:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 transition ease-in-out duration-150"
                                >
                                    Edit the item
                                </Link>
                            )}
                            {can.delete && (
                                <button
                                    onClick={() => setIsOpen(true)}
                                    className="mt-6 ml-6 inline-flex items-center px-4 py-2 bg-red-700 dark:bg-gray-200 border border-transparent rounded-md font-semibold text-xs text-white dark:text-gray-800 uppercase tracking-widest hover:bg-red-600 dark:hover:bg-white focus:bg-red-500 dark:focus:bg-white active:bg-gray-900 dark:active:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 transition ease-in-out duration-150"
                                >
                                    Remove the item from the menu
                                </button>
                            )}
                        </div>
                        <ItemModal
                            isOpen={isOpen}
                            setIsOpen={setIsOpen}
                            routeData={"food.destroy"}
                            id={food.id}
                        />
                    </div>
                </div>
            </div>
        </>
    );
}

ItemShow.layout = (page) => <Layout children={page} title="Home" />;
