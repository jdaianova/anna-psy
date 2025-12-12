import { useState } from "react";
import Input from "@/shared/ui/Input";
import Textarea from "@/shared/ui/Textarea";
import Button from "@/shared/ui/Button";

const ContactForm = ({ action, presetMessage }) => {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);

    try {
      const res = await fetch(action, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setSent(true);
      }
    } finally {
      setLoading(false);
    }
  };

  // ✅ Экран успеха — БЕЗ кнопок
  if (sent) {
    return (
      <div className="flex flex-col gap-3 text-center">
        <p className="text-lg text-gray-800">
          Ваш запрос отправлен 🌿
        </p>
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
      <Input
        label="Имя"
        name="name"
        required
      />

      <Input
        label="Email"
        name="email"
        type="email"
        required
      />

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
