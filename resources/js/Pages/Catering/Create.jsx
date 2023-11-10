import Layout from "./Shared/Layout";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import { Head, useForm } from "@inertiajs/react";

export default function Create() {
    const { data, setData, post, processing, errors, reset, progress } =
        useForm({
            name: "",
            type: "",
            description: "",
            tags: "",
            image: "",
        });

    const submit = (e) => {
        e.preventDefault();
        post(route("food.store"), {
            onSuccess: () => {
                reset();
            },
        });
    };
    return (
        <>
            <Head title="Create" />

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
                                htmlFor="type"
                                value="Type"
                            />

                            <TextInput
                                id="type"
                                type="text"
                                name="type"
                                value={data.type}
                                className="mt-1 block w-full"
                                autoComplete="type"
                                onChange={(e) =>
                                    setData("type", e.target.value)
                                }
                            />

                            <InputError
                                message={errors.type}
                                className="mt-2"
                            />
                        </div>
                        <div>
                            <InputLabel
                                className="mt-2"
                                htmlFor="description"
                                value="Description"
                            />

                            <TextInput
                                id="description"
                                type="text"
                                name="description"
                                value={data.description}
                                className="mt-1 block w-full"
                                autoComplete="description"
                                onChange={(e) =>
                                    setData("description", e.target.value)
                                }
                            />

                            <InputError
                                message={errors.description}
                                className="mt-2"
                            />
                        </div>
                        <div>
                            <InputLabel
                                className="mt-2"
                                htmlFor="tags"
                                value="Tags - please use space to separate the tags"
                            />

                            <TextInput
                                id="tags"
                                type="text"
                                name="tags"
                                value={data.tags}
                                className="mt-1 block w-full"
                                autoComplete="tags"
                                onChange={(e) =>
                                    setData("tags", e.target.value)
                                }
                            />

                            <InputError
                                message={errors.tags}
                                className="mt-2"
                            />
                        </div>
                        <div>
                            <InputLabel
                                className="mt-2"
                                htmlFor="image"
                                value="Image"
                            />

                            <TextInput
                                id="image"
                                type="file"
                                name="image"
                                // value={data.image}
                                className="mt-1 relative m-0 block w-full min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-clip-padding px-3 py-[0.32rem] text-base font-normal text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-indigo-500 focus:text-neutral-700 focus:shadow-te-primary"
                                onChange={(e) =>
                                    setData("image", e.target.files[0])
                                }
                            />

                            <InputError
                                message={errors.image}
                                className="mt-2"
                            />
                        </div>
                        <button
                            className={`mt-6 inline-flex items-center px-4 py-2 bg-blue-700 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-blue-600 focus:bg-blue-500 active:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150 ${
                                processing && "opacity-25"
                            } `}
                            disabled={processing}
                        >
                            Submit new item for the menu
                        </button>
                    </form>
                </div>
            </section>
        </>
    );
}

Create.layout = (page) => <Layout children={page} title="Create" />;
