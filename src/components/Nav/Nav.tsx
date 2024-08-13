import Link from 'next/link'

import { links } from '@/lib/routes'

const Nav = () => {
    return (
        <nav className="sw-flex sw-justify-end">
            <ul>
                {links.map(({ id, label }) => (
                    <li key={`nav-item-${label.toLowerCase()}`}>
                        <Link
                            className="sw-font-display sw-font-extrabold  sw-uppercase sw-tracking-widest"
                            href={id}
                        >
                            {label}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Nav
