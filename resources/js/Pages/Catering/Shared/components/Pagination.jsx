import { Link } from "@inertiajs/react";

export default function Pagination({ style, links }) {
    return (
        <div className={style}>
            {links.map(({ url, label, active }) => (
                <Link key={label} href={url} className="px-1" preserveScroll>
                    <span
                        className={`${!url && "text-orange-200"} ${
                            active && "font-bold text-grey-700"
                        }`}
                        dangerouslySetInnerHTML={{ __html: label }}
                    />
                </Link>
            ))}
        </div>
    );
}
