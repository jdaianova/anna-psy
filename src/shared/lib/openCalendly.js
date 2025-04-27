export const openCalendly = (url, onClose) => {
    document.body.style.overflow = "auto";
  
    const separator = url.includes("?") ? "&" : "?";
    const calendlyUrl = `${url}${separator}primary_color=5A8F6B`;
  
    Calendly.initPopupWidget({ url: calendlyUrl });
  
    if (onClose) {
      onClose(); // закрываем модалку сразу после открытия виджета
    }
  
    const handleCalendlyClose = (event) => {
      if (event.data?.event === "calendly.event_scheduling_closed") {
        document.body.style.overflow = "auto";
        window.removeEventListener("message", handleCalendlyClose);
      }
    };
  
    window.addEventListener("message", handleCalendlyClose);
  };
  