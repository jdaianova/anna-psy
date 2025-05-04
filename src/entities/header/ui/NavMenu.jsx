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
                className="block lg:hidden"
                onClick={toggleMenu}
            >
                <img
                    src={burger}
                    alt="menu"
                    className="h-[20px] transition-transform duration-300 hover:scale-125"
                />
            </button>

            {/* Шторка для маленьких экранов */}
            <ul className={`fixed top-0 left-0 h-full p-8 bg-gradient-secondary 
                            flex flex-col items-end gap-4
                            transform ${isOpen ? 'translate-x-0' : '-translate-x-full'}
                            transition-transform duration-500 ease-in-out z-50 lg:hidden`}>

                <button
                    onClick={toggleMenu}
                    className="absolute bottom-10 right-[40px] text-white text-5xl nav-link-font"
                >
                    ×
                </button>

                {menuLinks.map(({ href, label }) => (
                    <li key={href}>
                        <a
                            href={href}
                            onClick={(e) => {
                                e.preventDefault(); // отменяем стандартный переход
                                const section = document.querySelector(href);
                                if (section) {
                                    section.scrollIntoView({ behavior: 'smooth' }); // плавный скролл
                                }
                                setIsOpen(false); // закрыть меню
                            }}
                            className="nav-link-font text-[4vw] mPhone:text-[3.6vw]"
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
                            className="nav-link-font 
                                    text-[5vw] sPhone:text-[4vw] mPhone:text-[3.6vw] 
                                    sm:!text-[3.2vw] md:!text-[2.8vw] lg:!text-[16px]"
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
