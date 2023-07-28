import { Head } from "@inertiajs/react";
import React from "react";
import Layout from "./Shared/Layout";
import Carousel from "./Shared/components/Carousel";
import ProductList from "./Shared/components/ProductList";

export default function Index({ foodItems }) {
    return (
        <>
            <Head title="Home" />
            <Carousel />
            <ProductList foodItems={foodItems} />
        </>
    );
}

Index.layout = (page) => <Layout children={page} title="Home" />;
