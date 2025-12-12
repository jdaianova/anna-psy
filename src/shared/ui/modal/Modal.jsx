import { useEffect } from "react";
import { createPortal } from "react-dom";
import Button from "../Button";

export const Modal = ({ isOpen, onClose, children }) => {
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      window.addEventListener("keydown", handleEsc);
      document.body.style.overflow = "hidden"; // запретить скролл
    }

    return () => {
      window.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "auto"; // вернуть скролл
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 z-[9999] flex min-h-screen items-center justify-center">
      {/* overlay */}
      <div className="fixed inset-0 bg-black/60" onClick={onClose} />

      {/* modal */}
      <div
        className="z-10 max-w-2xl w-full bg-white p-10 rounded-xl shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        {children}

        {/* close button */}
        <div className="flex justify-center mt-10">
          <Button onClick={onClose}>Вернуться на сайт</Button>
        </div>
      </div>
    </div>,
    document.getElementById("modal-root")
  );
};
