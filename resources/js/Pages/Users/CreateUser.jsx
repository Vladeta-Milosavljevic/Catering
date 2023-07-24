import Checkbox from "@/Components/Checkbox";
import Layout from "../Catering/Shared/Layout";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import { Head, useForm } from "@inertiajs/react";

export default function CreateUser() {
    const { data, setData, post, processing, errors, reset, progress } =
        useForm({
            name: "",
            email: "",
            password: "",
            password_confirmation: "",
            isAdmin: false,
        });

    const submit = (e) => {
        e.preventDefault();
        post(route("storeUser"), {
            onSuccess: () => {
                reset();
            },
        });
    };
    return (
        <>
            <Head title="Create New User" />

            <section className="bg-white py-8">
                <div className="container mx-auto max-w-xl pt-4 pb-12">
                    <form onSubmit={submit}>
                        <div>
                            <InputLabel
                                className="mt-2"
                                htmlFor="name"
                                value="Name"
                            />

                            <TextInput
                                id="name"
                                type="text"
                                name="name"
                                value={data.name}
                                className="mt-1 block w-full"
                                autoComplete="name"
                                isFocused={true}
                                onChange={(e) =>
                                    setData("name", e.target.value)
                                }
                            />

                            <InputError
                                message={errors.name}
                                className="mt-2"
                            />
                        </div>
                        <div>
                            <InputLabel
                                className="mt-2"
                                htmlFor="email"
                                value="Email"
                            />

                            <TextInput
                                id="email"
                                type="email"
                                name="email"
                                value={data.email}
                                className="mt-1 block w-full"
                                autoComplete="email"
                                onChange={(e) =>
                                    setData("email", e.target.value)
                                }
                            />

                            <InputError
                                message={errors.email}
                                className="mt-2"
                            />
                        </div>
                        <div>
                            <InputLabel
                                className="mt-2"
                                htmlFor="password"
                                value="Password"
                            />

                            <TextInput
                                id="password"
                                type="password"
                                name="password"
                                value={data.password}
                                className="mt-1 block w-full"
                                autoComplete="password"
                                onChange={(e) =>
                                    setData("password", e.target.value)
                                }
                            />

                            <InputError
                                message={errors.password}
                                className="mt-2"
                            />
                        </div>
                        <div>
                            <InputLabel
                                className="mt-2"
                                htmlFor="password_confirmation"
                                value="Confirm password"
                            />

                            <TextInput
                                id="password_confirmation"
                                type="password"
                                name="password_confirmation"
                                value={data.password_confirmation}
                                className="mt-1 block w-full"
                                autoComplete="password_confirmation"
                                onChange={(e) =>
                                    setData(
                                        "password_confirmation",
                                        e.target.value
                                    )
                                }
                            />

                            <InputError
                                message={errors.password_confirmation}
                                className="mt-2"
                            />
                        </div>



                        <div className="block mt-4">
                            <label className="flex items-center">
                                <Checkbox
                                    name="isAdmin"
                                    checked={data.isAdmin}
                                    onChange={(e) =>
                                        setData("isAdmin", e.target.checked)
                                    }
                                />
                                <span className="ml-2 text-base font-bold text-gray-600 dark:text-gray-400">
                                    User is admin.
                                </span>
                            </label>
                        </div>

                        <button
                            className={`mt-6 inline-flex items-center px-4 py-2 bg-blue-700 dark:bg-gray-200 border border-transparent rounded-md font-semibold text-xs text-white dark:text-gray-800 uppercase tracking-widest hover:bg-blue-600 dark:hover:bg-white focus:bg-blue-500 dark:focus:bg-white active:bg-gray-900 dark:active:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 transition ease-in-out duration-150 ${
                                processing && "opacity-25"
                            } `}
                            disabled={processing}
                        >
                            Create New User
                        </button>
                    </form>
                </div>
            </section>
        </>
    );
}

CreateUser.layout = (page) => <Layout children={page} title="Create" />;
