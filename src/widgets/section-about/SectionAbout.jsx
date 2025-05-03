const SectionAbout = () => {
  return (
    <section className="section bg-primary-light">

      <div className="box-in-section">

        <h2 className="title-in-section">Кто я?</h2>

        <p className="text-center 
              text-[5vw] sPhone:text-[4vw] mPhone:text-[3.6vw] 
              sm:!text-[3.2vw] md:!text-[2.8vw] lg:!text-[2vw] xl:!text-[24px]">
          Меня зовут Анна Герю, я клинический психолог, 
          дополнительно обучалась
          нейропсихологии в Кембридже. В своей практике я объединяю психологию и
          нейронауку, работаю с широким спектром вопросов и помогаю людям с
          нейроотличиями – особенно тем, у кого синдром дефицита внимания и
          гиперактивности (СДВГ).</p>
      </div>

    </section>
  );
};

export default SectionAbout;