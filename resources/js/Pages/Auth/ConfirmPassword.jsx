import { useEffect } from "react";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Head, useForm } from "@inertiajs/react";
import Layout from "../Catering/Shared/Layout";

export default function ConfirmPassword() {
    const { data, setData, post, processing, errors, reset } = useForm({
        password: "",
    });

    useEffect(() => {
        return () => {
            reset("password");
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route("password.confirm"));
    };

    return (
        <>
            <Head title="Confirm Password" />

            <section className="bg-white py-8">
                <div className="container mx-auto max-w-xl pt-4 pb-12">
                    <div className="mb-4 text-sm text-gray-600 dark:text-gray-400">
                        This is a secure area of the application. Please confirm
                        your password before continuing.
                    </div>

                    <form onSubmit={submit}>
                        <div className="mt-4">
                            <InputLabel htmlFor="password" value="Password" />

                            <TextInput
                                id="password"
                                type="password"
                                name="password"
                                value={data.password}
                                className="mt-1 block w-full"
                                isFocused={true}
                                onChange={(e) =>
                                    setData("password", e.target.value)
                                }
                            />

                            <InputError
                                message={errors.password}
                                className="mt-2"
                            />
                        </div>

                        <div className="flex items-center justify-end mt-4">
                            <PrimaryButton
                                className="ml-4"
                                disabled={processing}
                            >
                                Confirm
                            </PrimaryButton>
                        </div>
                    </form>
                </div>
            </section>
        </>
    );
}
ConfirmPassword.layout = (page) => (
    <Layout children={page} title="Confirm password" />
);
