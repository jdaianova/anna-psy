import { useState } from 'react';
import { menuLinks } from '../lib/menuLinks';
import burger from '../../../shared/assets/svg/burger.svg';

const NavMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="relative">
            {/* Кнопка-бургер для маленьких экранов */}
            <button
                className="block lg:hidden text-white text-3xl"
                onClick={toggleMenu}
            >
                <img
                    src={burger}
                    alt="menu"
                    className="h-[20px] inline-block transition-transform duration-300 hover:scale-105"
                />
            </button>

            {/* Шторка для маленьких экранов */}
            <ul className={`fixed top-0 left-0 h-full w-[80%] md:w-[50%] pt-[70px]
                            bg-gradient-secondary flex flex-col items-end gap-8 px-[50px]
                            transform ${isOpen ? 'translate-x-0' : '-translate-x-full'}
                            transition-transform duration-500 ease-in-out z-50 lg:hidden`}>

                <button
                    onClick={toggleMenu}
                    className="absolute bottom-10 right-[50px] text-white text-5xl"
                >
                    ×
                </button>

                {menuLinks.map(({ href, label }) => (
                    <li key={href}>
                        <a
                            href={href}
                            className="nav-link-font text-[18px] md:text-[22px] xl:text-[16px]"
                        >
                            {label}
                        </a>
                    </li>
                ))}
            </ul>

            {/* Обычное меню для больших экранов */}
            <ul className="hidden gap-6 lg:flex">
                {menuLinks.map(({ href, label }) => (
                    <li key={href}>
                        <a
                            href={href}
                            className="nav-link-font text-[16px]"
                        >
                            {label}
                        </a>
                    </li>
                ))}
            </ul>

            {/* Затемнение фона при открытой шторке */}
            {isOpen && (
                <div
                    onClick={toggleMenu}
                    className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
                />
            )}
        </nav>
    );
};

export default NavMenu;
