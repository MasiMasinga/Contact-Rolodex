import { createTheme } from "@mui/material/styles";
import { Colors } from "../utils/constants";

const ThemeFontFamily = "'Poppins', sans-serif";

const theme = createTheme({
  typography: {
    fontFamily: ThemeFontFamily,
  },
  palette: {
    primary: {
      main: Colors.primary,
      light: Colors.primary,
      dark: Colors.primary,
    },
    secondary: {
      main: Colors.primary,
    },
    neutral: {
      main: Colors.black,
      light: Colors.white,
    },
    success: {
      main: Colors.green,
    },
    error: {
      main: Colors.red,
    },
    warning: {
      main: Colors.yellow,
    },
  },
  shape: {
    borderRadius: 5,
  },
  shadows: {
    0: "",
    1: `${Colors.shadow}`,
    4: `${Colors.shadowBig}`,
    6: "0 6px 20px rgba(255 0 0/ 1)",
    8: `${Colors.shadowBig}`,
    16: `${Colors.shadowBig}`,
    24: `${Colors.shadowBig}`,
  },
});

const fontSize = 14;
const htmlFontSize = 16;
const coef = fontSize / 14;

theme.typography = {
  pxToRem: (size) => `${(size / htmlFontSize) * coef}rem`,
  h1: {
    fontWeight: 700,
    fontSize: "45px",
    color: Colors.black,
    fontFamily: ThemeFontFamily,
    [theme.breakpoints.up("md")]: {
      ineHeight: "85px",
      fontSize: "65px",
    },
  },
  h2: {
    fontWeight: 700,
    fontSize: "50px",
    fontFamily: ThemeFontFamily,
  },
  h3: {
    fontWeight: 700,
    fontSize: "36px",
    fontFamily: ThemeFontFamily,
  },
  h4: {
    fontWeight: 700,
    fontSize: "30px",
    fontFamily: ThemeFontFamily,
  },
  h5: {
    fontWeight: 700,
    fontSize: "20px",
    fontFamily: ThemeFontFamily,
  },
  h6: {
    fontSize: "16px",
    fontFamily: ThemeFontFamily,
  },
  subheader: {
    fontWeight: 400,
    fontSize: "18px",
    fontFamily: ThemeFontFamily,
  },
  paragraph: {
    fontWeight: 400,
    fontSize: "14px",
    lineHeight: "22px",
    fontFamily: ThemeFontFamily,
  },
  subtitle: {
    fontWeight: 400,
    fontSize: "12px",
    fontFamily: ThemeFontFamily,
  },
};

theme.components = {
  MuiTypography: {
    defaultProps: {
      variantMapping: {
        paragraph: "p",
      },
    },
  },
  MuiButton: {
    styleOverrides: {
      root: ({ ownerState }) => ({
        fontFamily: ThemeFontFamily,
        fontWeight: "700",
        height: "fit-contents",
        ...(ownerState.variant === "contained" && {
          backgroundColor: Colors.secondary,
          color: Colors.white,
          border: `2px solid ${Colors.secondary}`,
          "&:hover": {
            backgroundColor: Colors.secondary,
            border: `2px solid ${Colors.secondary}`,
          },
        }),
        ...(ownerState.variant === "outlined" && {
          border: `2px solid ${Colors.secondary}`,
          "&:hover": {
            backgroundColor: Colors.secondary,
            color: Colors.white,
            border: `2px solid ${Colors.secondary}`,
          },
        }),
        ...(ownerState.disabled && {
          backgroundColor: `${Colors.greyMed} !important`,
          color: Colors.white,
          border: `2px solid ${Colors.greyMed} !important`,
          ...(ownerState.variant === "plain" && {
            backgroundColor: `transparent !important`,
            color: `${Colors.greyMed} !important`,
            border: `0px solid transparent !important`,
          }),
        }),
      }),
    },
    variants: [
      {
        props: { variant: "plain" },
        style: {
          backgroundColor: "transparent",
          color: Colors.primary,
        },
      },
      {
        props: { variant: "danger" },
        style: {
          backgroundColor: Colors.red,
          borderColor: Colors.red,
          color: Colors.white,
          "&:hover": {
            backgroundColor: Colors.red,
            opacity: 0.9,
          },
        },
      },
      {
        props: { variant: "success" },
        style: {
          backgroundColor: Colors.green,
          borderColor: Colors.green,
          color: Colors.white,
          "&:hover": {
            backgroundColor: Colors.green,
            opacity: 0.9,
          },
        },
      },
      {
        props: { variant: "plain-white" },
        style: {
          fontWeight: 900,
          fontSize: "12px",
          color: Colors.white,
          ".MuiSvgIcon-root": {
            fontSize: "24px",
          },
        },
      },
    ],
  },
  MuiIconButton: {
    styleOverrides: {
      root: () => ({
        "&:hover": {
          backgroundColor: Colors.primary,
        },
      }),
    },
  },
  MuiListItemButton: {
    styleOverrides: {
      root: {
        ".MuiSvgIcon-root": {
          fontSize: 20,
          color: Colors.primary,
        },
        "&:before": {
          content: `''`,
          opacity: "0",
          position: "absolute",
          left: 0,
          top: "50%",
          transform: "translateY(-50%)",
          width: 6,
          backgroundColor: Colors.primary,
          height: 35,
          borderRadius: "0px 10px 10px 0",
          transition: "0.3s ease",
        },
        " &.Mui-selected": {
          backgroundColor: "initial",

          " &:before": {
            opacity: "1",
          },
          ".MuiListItemText-root": {
            fontWeight: "700",
            color: Colors.primary,
          },
          ".MuiListItemIcon": {
            color: Colors.yellow,
          },
        },
        " &.whiteItemList": {
          "&:before": {
            opacity: "0",
            transform: "translateY(-50%)",
            backgroundColor: Colors.white,
          },
          " &.Mui-selected": {
            " &:before": {
              opacity: "1",
            },
            ".MuiListItemText-root": {
              fontWeight: "700",
              color: Colors.white,
            },
            ".MuiListItemIcon": {
              color: Colors.yellow,
            },
          },
        },
      },
    },
  },
  MuiLink: {
    styleOverrides: {
      root: {
        fontFamily: ThemeFontFamily,
        fontWeight: 700,
        fontSize: "16px",
        color: Colors.secondary,
      },
    },
  },
  MuiFormControlLabel: {
    styleOverrides: {
      root: {
        marginRight: 0,
        fontFamily: ThemeFontFamily,
        fontSize: "14px",
      },
    },
  },
  MuiFormHelperText: {
    styleOverrides: {
      root: {
        fontFamily: ThemeFontFamily,
        fontSize: "12px",
      },
    },
  },
  MuiTextField: {
    styleOverrides: {
      root: {
        fontFamily: ThemeFontFamily,
        "& label.Mui-focused": {
          color: Colors.black,
        },
        "& .MuiOutlinedInput-root": {
          "&.Mui-focused fieldset": {
            borderColor: Colors.black,
          },
          "&:hover": {
            borderColor: Colors.black,
          },
          "& .MuiInputLabel-root": {
            color: Colors.black,
          },
        },
      },
    },
  },
  MuiListItem: {
    styleOverrides: {
      root: {
        fontFamily: ThemeFontFamily,
        fontSize: "14px",
      },
    },
  },
};

export default theme;
