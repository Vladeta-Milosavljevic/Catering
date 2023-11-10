import { Dialog } from "@headlessui/react";
import { Link } from "@inertiajs/react";

export default function ItemModal({ isOpen, setIsOpen, routeData, id }) {
    return (
        <Dialog
            open={isOpen}
            onClose={() => setIsOpen(false)}
            className="relative z-50"
        >
            <div className="fixed inset-0 bg-black/40" aria-hidden="true" />

            <div className="fixed inset-0 flex items-center justify-center p-4">
                <Dialog.Panel className="w-full max-w-sm rounded bg-slate-50 text-center p-8 pr-14">
                    <Dialog.Title className="font-bold">
                        This action is permanent!
                    </Dialog.Title>
                    Are you certain?
                    {id}
                    {route(routeData, id)}
                    <div>
                        <Link
                            href={route(routeData, id)}
                            method="delete"
                            as="button"
                            className="mt-6 ml-6 inline-flex items-center px-4 py-2 bg-red-700 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-red-600  focus:bg-red-500  active:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150"
                            onClick={() =>
                                setTimeout(() => {
                                    setIsOpen(false);
                                }, 500)
                            }
                        >
                            Confirm
                        </Link>
                        <button
                            className="mt-6 ml-6 inline-flex items-center px-4 py-2 bg-green-700 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-green-600  focus:bg-green-500  active:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150"
                            onClick={() => setIsOpen(false)}
                        >
                            Cancel
                        </button>
                    </div>
                </Dialog.Panel>
            </div>
        </Dialog>
    );
}
