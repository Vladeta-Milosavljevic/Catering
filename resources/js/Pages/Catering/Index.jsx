import { Head } from "@inertiajs/react";
import React from "react";
import Layout from "./Shared/Layout";
import Carousel from "./Shared/components/Carousel";
import ProductList from "./Shared/components/ProductList";

export default function Index({ foodItems, filters }) {
    return (
        <>
            <Head title="Home" />
            <Carousel />
            <ProductList foodItems={foodItems} filters={filters} />
        </>
    );
}

Index.layout = (page) => <Layout children={page} title="Home" />;
