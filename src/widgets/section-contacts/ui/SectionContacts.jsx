import { contactItems } from "../lib/contactItems";


const SectionContacts = () => {
    return (
        <section className="section bg-white">

            <div className="box-in-section !pb-[100px]">

                <h2 className="title-in-section">Как со мной связаться</h2>

                <ul className="cards-in-section">
                    {contactItems.map((item, index) => (
                        <li key={index} className="flex-1 text-center">
                            <a
                                href={item.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:underline hover:text-primary 
                                        transition-colors duration-300"
                            >
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>

            </div>
        </section>
    );
};

export default SectionContacts;
