import { menuLinks } from '../lib/menuLinks';

const NavMenu = () => {
    return (
        <nav>
            <ul className="flex gap-8">
                {menuLinks.map(({ href, label }) => (
                    <li key={href}>
                        <a
                            href={href}
                            className="nav-link-font text-[16px] "
                        >
                            {label}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>

    );
};

export default NavMenu;
