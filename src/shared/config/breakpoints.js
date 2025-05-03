export const breakpoints = {
    width: {
      xsPhone: "@media (min-width: 0px)",       // base
      sPhone: "@media (min-width: 400px)",      // от 400px
      mPhone: "@media (min-width: 500px)",      // от 500px
      sm: "@media (min-width: 640px)",          // Tailwind sm: от 640px
      md: "@media (min-width: 768px)",          // Tailwind md: от 768px
      lg: "@media (min-width: 1024px)",         // Tailwind lg: от 1024px
      xl: "@media (min-width: 1280px)",         // Tailwind xl: от 1280px
    },
    combined: {
      mdLowHeight: "@media (min-width: 1024px) and (max-height: 650px)", // md и низкая высота
    },
  };
  