import { Head, Link } from "@inertiajs/react";
import React from "react";
import Layout from "../Catering/Shared/Layout";
import { useState } from "react";
import ItemModal from "../Catering/Shared/components/ItemModal";

export default function UsersList({ users }) {
    const [isOpen, setIsOpen] = useState(false);
    const [deleteId, setDeleteId] = useState(0);
    function deleteUserHandler(id) {
        setDeleteId(id);
        setIsOpen(true);
    }
    return (
        <>
            <Head title="List of users" />
            <div className="w-3/4 mx-auto mb-48">
                <div className="flex items-start justify-center h-screen pt-24">
                    <div className="flex flex-col">
                        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                            <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                                <div className="overflow-hidden">
                                    <table className="min-w-full text-left text-sm font-light">
                                        <thead className="border-b font-medium dark:border-neutral-500">
                                            <tr>
                                                <th
                                                    scope="col"
                                                    className="px-6 py-4 text-center"
                                                >
                                                    Username
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="px-6 py-4 text-center"
                                                >
                                                    Status
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="px-6 py-4 text-center"
                                                >
                                                    Action
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {users.map((user) => (
                                                <tr
                                                    key={user.id}
                                                    className="border-b dark:border-neutral-500"
                                                >
                                                    <td className="whitespace-nowrap px-6 py-4">
                                                        {user.name}
                                                    </td>
                                                    <td className="whitespace-nowrap px-6 py-4">
                                                        {user.isAdmin
                                                            ? "Admin"
                                                            : "Standard User"}
                                                    </td>
                                                    <td className="whitespace-nowrap px-6 py-4">
                                                        {!user.isAdmin && (
                                                            <button
                                                                onClick={() =>
                                                                    deleteUserHandler(
                                                                        user.id
                                                                    )
                                                                }
                                                                className="ml-6 inline-flex items-center px-4 py-2 bg-red-700 dark:bg-gray-200 border border-transparent rounded-md font-semibold text-xs text-white dark:text-gray-800 uppercase tracking-widest hover:bg-red-600 dark:hover:bg-white focus:bg-red-500 dark:focus:bg-white active:bg-gray-900 dark:active:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 transition ease-in-out duration-150"
                                                            >
                                                                Delete the user
                                                            </button>
                                                        )}
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                    <ItemModal
                                        isOpen={isOpen}
                                        setIsOpen={setIsOpen}
                                        routeData="deleteUser"
                                        id={deleteId}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

UsersList.layout = (page) => <Layout children={page} title="List of users" />;
