export const breakpoints = {
    width: {
        sPhone: "@media (max-width: 329px)",   // по 330px
        mPhone: "@media (max-width: 449px)",   // по 450px
        base: "@media (max-width: 639px)",   // до sm (Tailwind base)
        sm: "@media (max-width: 767px)",     // Tailwind sm: ≥640
        md: "@media (max-width: 1023px)",    // Tailwind md: ≥768
        lg: "@media (max-width: 1279px)",    // Tailwind lg: ≥1024
        xl: "@media (max-width: 1535px)",    // Tailwind xl: ≥1280
    },
    combined: {
        mdLowHeight: "@media (max-width: 1023px) and (max-height: 700px)",  // md
        lgLowHeight: "@media (max-width: 1279px) and (max-height: 700px)",  // lg
    },
};
