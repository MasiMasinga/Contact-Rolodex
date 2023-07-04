// Mui
import { ThemeProvider } from "@mui/material/styles";

// Notistack
import { SnackbarProvider } from "notistack";

// Provider
import { StateProvider } from "@/common/context/StateContext";
import { AuthProvider } from "@/common/context/AuthContext";
import { DashboardProvider } from "./dashboard/context/DashboardContext";
import { ProfileProvider } from "./profile/context/ProfileContext";
import { SessionProvider } from "next-auth/react"

// Global Styles
import { Global, css } from "@emotion/react";
import CssBaseline from "@mui/material/CssBaseline";

// Theme
import theme from "@/common/theme/theme";

const GlobalStyle = css`
  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: "Poppins", sans-serif;
    font-weight: 400;
    margin: 0;
  }

  .SnackbarContent-root {
    .SnackbarItem-message {
      font-family: "Poppins", sans-serif;
      font-size: 14px;
    }
    .MuiSvgIcon-root {
      color: white !important;
    }
  }
`;

export default function App({ Component, pageProps, session }) {
  return (
    <ThemeProvider theme={theme}>
      <SessionProvider session={session}>
        <SnackbarProvider>
          <StateProvider>
            <AuthProvider>
              <ProfileProvider>
                <DashboardProvider>
                  <Global styles={GlobalStyle} />
                  <CssBaseline />
                  <Component {...pageProps} />
                </DashboardProvider>
              </ProfileProvider>
            </AuthProvider>
          </StateProvider>
        </SnackbarProvider>
      </SessionProvider>
    </ThemeProvider>
  );
}
