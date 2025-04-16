const Section = ({ id, title }) => {
    const bgColor = getColorById(id);
  
    return (
      <section
        id={id}
        className="h-[50vh] flex justify-center items-center text-3xl text-white"
        style={{ backgroundColor: bgColor }}
      >
        <h2>{title}</h2>
      </section>
    );
  };
  
  
  const getColorById = (id) => {
    const colors = {
      about: '#4e8cff',
      services: '#00b894',
      contact: '#a29bfe',
    };
    return colors[id] || '#333';
  };
  
  export default Section;
  