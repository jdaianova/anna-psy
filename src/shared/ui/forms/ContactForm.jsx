import { useState } from "react";
import emailjs from "@emailjs/browser";

import Input from "@/shared/ui/Input";
import Textarea from "@/shared/ui/Textarea";
import Button from "@/shared/ui/Button";

const SERVICE_ID = "service_m25axmd";
const TEMPLATE_ID = "template_0ohzq0l";
const PUBLIC_KEY = "g0UY3Hxyf7-XBNuvh";

const ContactForm = ({ presetMessage }) => {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.sendForm(
        SERVICE_ID,
        TEMPLATE_ID,
        e.target,
        PUBLIC_KEY
      );

      setSent(true);
    } catch (error) {
      console.error("EmailJS error:", error);
      alert("Ошибка отправки письма");
    } finally {
      setLoading(false);
    }
  };

  if (sent) {
    return (
      <div className="flex flex-col gap-3 text-center">
        <p className="text-lg text-gray-800">Ваш запрос отправлен 🌿</p>
        <p className="text-sm text-gray-500">
          Я свяжусь с вами в ближайшее время
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4"
    >
      <Input label="Имя" name="name" required />
      <Input label="Email" name="email" type="email" required />
      <Textarea
        label="Сообщение"
        name="message"
        defaultValue={presetMessage}
      />

      <Button
        type="submit"
        variant="secondary"
        className="self-center"
        disabled={loading}
      >
        {loading ? "Отправка..." : "Отправить"}
      </Button>
    </form>
  );
};

export default ContactForm;
