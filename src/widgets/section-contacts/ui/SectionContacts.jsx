import { contactItems } from "../lib/contactItems";

const SectionContacts = () => {
  return (
    <section className="section bg-white">
      <div className="box-in-section">
        <h2 className="title-in-section">Где меня найти</h2>

        <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full ">
          {contactItems.map((item) => (
            <li
              key={item.id}
              className="w-full bg-white shadow-md rounded-md p-6 flex flex-col gap-3"
            >
              {/* Иконка + название */}
              <div className="flex items-center gap-3">
                <img src={item.icon} alt={item.title} className="h-7" />
                <h4 className="text-lg font-bold">{item.title}</h4>
              </div>

              {/* Описание */}
              {item.description && (
                <p className="adaptive-text text-left">{item.description}</p>
              )}

              {/* Скриншот */}
              {item.image && (
                <div className="relative w-full aspect-[16/9] overflow-hidden rounded-md bg-gray-100">
                  <img
                    src={item.image}
                    alt={`${item.title} preview`}
                    loading="lazy"
                    decoding="async"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
              )}

              {/* Кнопка */}
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="adaptive-text text-primary font-semibold no-underline hover:text-black hover:scale-[1.05] transition"
              >
                {item.button}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default SectionContacts;
