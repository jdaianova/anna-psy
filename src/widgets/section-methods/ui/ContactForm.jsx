const ContactForm = ({ action }) => {
  return (
    <form action={action} method="POST" className="contact-form">
      <div className="field">
        <label>Имя</label>
        <input type="text" name="name" placeholder="Ваше имя" required />
      </div>

      <div className="field">
        <label>Email</label>
        <input type="email" name="email" placeholder="you@email.com" required />
      </div>

      <div className="field">
        <label>Сообщение</label>
        <textarea
          name="message"
          placeholder="Напишите сообщение"
          rows={4}
          required
        />
      </div>

      <button type="submit">Отправить</button>
    </form>
  );
};

export default ContactForm;
