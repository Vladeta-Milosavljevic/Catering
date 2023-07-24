import { Head, usePage } from "@inertiajs/react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import MoreInformation from "./components/MoreInformation";

export default function Layout({ children }) {
    const { auth } = usePage().props;

    return (
        <>
            <Head>
                <title>Catering delight</title>
                <meta
                    head-key="description"
                    type="description"
                    content="Information about the app"
                />
            </Head>
            <Navbar />
            <main className="bg-white text-gray-600 work-sans leading-normal text-base tracking-normal">
                {children}
                <MoreInformation />
                <Footer />
            </main>
        </>
    );
}
