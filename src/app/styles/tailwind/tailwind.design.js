import { breakpoints } from "../../../shared/config/breakpoints";

export default {
  ".section": {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },

  ".title-in-section": {
    fontSize: "4.5rem",
    textAlign: "center",
    marginBottom: "30px",
    marginTop: "-46px",
  },

  ".box-in-section": {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    width: "1200px",
    paddingLeft: "40px",
    paddingRight: "40px",
    paddingBottom: "120px",
    gap: "32px",

    [breakpoints.width.lg]: {
      width: "1000px",
      paddingLeft: "20px",
      paddingRight: "20px",
      paddingBottom: "100px",
    },

    [breakpoints.width.md]: {
      width: "780px",
      paddingBottom: "84px",
      gap: "0px",
    },

    [breakpoints.width.sm]: {
      width: "620px",
      paddingBottom: "64px",
      gap: "0px",
    },

    [breakpoints.width.base]: {
      width: "560px",
      paddingBottom: "64px",
      gap: "0px",
      backgroundColor: 'green'
    },

    [breakpoints.width.mPhone]: {
      width: "400px",
      backgroundColor: 'blue'
    },

    [breakpoints.width.sPhone]: {
      width: "260px",
      backgroundColor: 'orange'
    },

  },

  ".cards-in-section": {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
    justifyContent: "center",
    alignItems: "stretch",
    gap: "32px",
    paddingLeft: "80px",
    paddingRight: "80px",

    [breakpoints.width.lg]: {
      paddingLeft: "10px",
      paddingRight: "10px",
      justifyContent: "space-between",
      gap: "28px",
    },

    [breakpoints.width.base]: {

    }
  },

  ".lines-in-section": {
    display: "flex",
    flexDirection: "column",
    justifyContent: "start",
    gap: "10px",
  },

  ".hero-box": {
    display: "flex",
    width: "100%",
    width: "1280px",
    paddingTop: "47px",
    height: "530px",

    [breakpoints.width.lg]: {
      width: "1000px",
      height: "500px",
    },

    [breakpoints.combined.lgLowHeight]: {
      height: "430px",
    },

    [breakpoints.width.md]: {
      width: "740px",
      height: "360px",
    },

    [breakpoints.width.sm]: {
      width: "620px",
      height: "320px",
    },

    [breakpoints.width.base]: {
      width: '100%',
      maxWidth: "640px",
      height: "280px",
      backgroundColor: 'red'
    },

    [breakpoints.width.mPhone]: {
      width: '100%',
      backgroundColor: 'blue'
    },

    [breakpoints.width.sPhone]: {
      width: '100%',
      backgroundColor: 'orange'
    },
  },

  ".hero-design-line": {
    backgroundColor: "var(--color-primary-light)",
    borderRight: "2px solid var(--color-secondary-dark)",
  },

  ".hero-btn": {
    paddingLeft: "40px",
    paddingRight: "40px",
    paddingTop: "32px",
    paddingBottom: "32px",
    display: "flex",
    flex: 1,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    gap: "16px",
    marginTop: "-30px",
    boxShadow: "0 8px 24px rgba(0,0,0,0.1)",

    [breakpoints.width.md]: {
      gap: "6px",
      paddingLeft: "30px",
      paddingRight: "30px",
      paddingTop: "26px",
      paddingBottom: "26px",
      marginTop: "-20px",
    },

  },
};
