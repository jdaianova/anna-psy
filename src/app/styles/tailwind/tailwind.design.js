import { breakpoints } from "../../../shared/config/breakpoints";

export default {
  ".section": {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100vw",
  },

  ".title-in-section": {
    fontSize: "16vw",
    textAlign: "center",
    marginTop: "-40px",
    zIndex: "50",

    [breakpoints.width.sPhone]: {
      fontSize: "14vw",
    },

    [breakpoints.width.mPhone]: {
      fontSize: "12vw",
    },

    [breakpoints.width.sm]: {
      fontSize: "10vw !important",
    },

    [breakpoints.width.md]: {
      fontSize: "8vw !important",
    },

    [breakpoints.width.lg]: {
      fontSize: "6vw !important",
    },

    [breakpoints.width.xl]: {
      fontSize: "80px !important",
      marginTop: "-50px",
    },
  },

  ".box-in-section": {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "80%",
    maxWidth: "1200px",
    paddingBottom: "80px",
  },

  ".cards-in-section": {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "stretch",
  },

  ".lines-in-section": {
    display: "flex",
    flexDirection: "column",
    justifyContent: "start",
    gap: "10px",
  },

  ".hero-design-line": {
    backgroundColor: "var(--color-primary-light)",
    borderRight: "2px solid var(--color-secondary-dark)",
  },

  ".hero-box-h": {
    height: "240px", // базовое значение (от 0px)

    [breakpoints.width.sPhone]: {
      height: "280px", // от 400px
    },

    [breakpoints.width.mPhone]: {
      height: "320px", // от 500px
    },

    [breakpoints.width.sm]: {
      height: "380px", // от 640px
    },

    [breakpoints.width.md]: {
      height: "400px", // от 768px
    },

    [breakpoints.width.lg]: {
      height: "500px", // от 1024px
    },

    [breakpoints.combined.mdLowHeight]: {
      height: "400px", // от 1024px и при низкой высоте
    },

  }
}

// };

// [breakpoints.width.sPhone]: {

// },

// [breakpoints.width.mPhone]: {

// },

// [breakpoints.width.sm]: {

// },

// [breakpoints.width.md]: {

// },

// [breakpoints.width.lg]: {

// },

// [breakpoints.combined.mdLowHeight]: {

// },
