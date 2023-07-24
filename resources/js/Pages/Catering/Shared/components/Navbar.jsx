import Dropdown from "@/Components/Dropdown";
import { Link, usePage } from "@inertiajs/react";
import { useState } from "react";

export default function Navbar() {
    const { auth } = usePage().props;
    const [menu, setMenu] = useState(false);
    const user = auth.user;
    const isAdmin = user && user.isAdmin ? true : false;
    return (
        <>
            <nav id="header" className="w-full z-30 top-0 py-1">
                <div className="w-full container mx-auto flex flex-wrap  items-center mt-0 px-6 py-3 justify-between">
                    <Link
                        href={route("home")}
                        className="flex tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl"
                    >
                        CATERING HAVEN
                    </Link>
                    <div
                        onClick={() => setMenu(!menu)}
                        className="md:hidden cursor-pointer"
                    >
                        {!menu && (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-6 h-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                                />
                            </svg>
                        )}
                        {menu && (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-6 h-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        )}
                    </div>

                    <div
                        className={`md:flex md:items-center md:w-auto w-full  ${
                            menu ? "" : "hidden"
                        }`}
                    >
                        <nav>
                            <ul className="md:flex items-center justify-between text-base text-gray-700 pt-4 md:pt-0">
                                <li>
                                    <Link
                                        href={route("home")}
                                        className="inline-block no-underline hover:text-black hover:underline py-2 px-4"
                                    >
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    {user && (
                                        <Link
                                            href={route("food.create")}
                                            className="inline-block no-underline hover:text-black hover:underline py-2 px-4"
                                        >
                                            New food item
                                        </Link>
                                    )}
                                </li>
                            </ul>
                        </nav>

                        <div id="nav-content">
                            {user && (
                                <Dropdown>
                                    <Dropdown.Trigger>
                                        <span className="md:flex items-center justify-between text-base text-gray-700 pt-4 md:pt-0">
                                            <button
                                                type="button"
                                                className="py-2 px-4 mt-2 inline-flex no-underline hover:text-black hover:underline text-gray-700 items-center  border border-transparent leading-4 rounded-md  dark:text-gray-400 bg-white dark:bg-gray-800  dark:hover:text-gray-300 focus:outline-none transition ease-in-out duration-150"
                                            >
                                                {user.name}

                                                <svg
                                                    className="ml-2 -mr-0.5 h-4 w-4"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                            </button>
                                        </span>
                                    </Dropdown.Trigger>
                                    <div className="m-2 right-60 top-60">
                                        <Dropdown.Content>
                                            {isAdmin && (
                                                <>
                                                 <Dropdown.Link
                                                 href={route("showUsersList")}
                                             >
                                                 List Of Users
                                             </Dropdown.Link>
                                                <Dropdown.Link
                                                    href={route("createUser")}
                                                >
                                                    Register New User
                                                </Dropdown.Link>
                                                </>
                                            )}
                                            <Dropdown.Link
                                                href={route("profile.edit")}
                                            >
                                                Profile
                                            </Dropdown.Link>
                                            <Dropdown.Link
                                                href={route("logout")}
                                                method="post"
                                                as="button"
                                            >
                                                Log Out
                                            </Dropdown.Link>
                                        </Dropdown.Content>
                                    </div>
                                </Dropdown>
                            )}
                            {!user && (
                                <div className="md:flex items-center justify-between text-base text-gray-700 pt-4 md:pt-0">
                                    <Link
                                        href={route("login")}
                                        className="inline-block no-underline hover:text-black hover:underline py-2 px-4"
                                    >
                                        Log in
                                    </Link>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}
