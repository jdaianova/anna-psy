import { useState } from "react";
import Input from "@/shared/ui/Input";
import Textarea from "@/shared/ui/Textarea";
import Button from "@/shared/ui/Button";

const ContactForm = ({ presetMessage }) => {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const form = e.target;
    const data = new FormData(form);

    try {
      await fetch("/", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams(data).toString(),
      });

      setSent(true);
    } catch (e) {
      console.error("Netlify form error", e);
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
      name="contact"
      method="POST"
      data-netlify="true"
      onSubmit={handleSubmit}
      className="flex flex-col gap-4"
    >
      {/* ОБЯЗАТЕЛЬНО */}
      <input type="hidden" name="form-name" value="contact" />

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
