import { Link } from "@inertiajs/react";

export default function Item({ id, name, type, tags, image }) {
    const tagsList = tags.split(" ");

    return (
        <>
            <div className="w-full md:w-1/3 xl:w-1/4 p-4 flex flex-col">
                <Link href={route("food.show", id)}>
                    <img className="hover:grow hover:shadow-lg" src={image} />
                    <div className="pt-3">
                        <p className="h-10">{name}</p>
                    </div>
                    <div className="pt-3">
                        <p className="">{type}</p>
                    </div>
                </Link>
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
            </div>
        </>
    );
}
