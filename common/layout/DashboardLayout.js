import React, { useState } from "react";
import Image from "next/image";

// Mui
import { styled, useTheme } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Stack from "@mui/material/Stack";
import Link from "@mui/material/Link";

// Mui Icons
import HomeIcon from "@mui/icons-material/Home";
import GppGoodOutlinedIcon from "@mui/icons-material/GppGoodOutlined";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";

// Utils
import { Colors, DrawerWidth } from "../utils/constants";

const openedMixin = (theme) => ({
  width: DrawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: DrawerWidth,
    width: `calc(100% - ${DrawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: DrawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  backgroundColor: "red",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const DashboardLayout = ({ children }) => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  const NavItems = [
    {
      name: "Dashboard",
      icon: <HomeIcon sx={{ color: Colors.accent }} />,
      path: "/dashboard",
    },
    {
      name: "Profile",
      icon: <GppGoodOutlinedIcon sx={{ color: Colors.black }} />,
      path: "/profile",
    },
  ];

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar position="fixed" open={open}>
        <IconButton
          onClick={() => setOpen(true)}
          edge="start"
          sx={{
            marginRight: 5,
            ...(open && { display: "none" }),
            position: "absolute",
            left: "25px",
            top: "10px",
          }}
        >
          <MenuIcon sx={{ color: Colors.black }} />
        </IconButton>
      </AppBar>

      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton
            onClick={() => setOpen(false)}
            sx={{ display: !open && "none" }}
          >
            {theme.direction === "rtl" ? (
              <ChevronRightIcon
                sx={{ color: `${Colors.primary} !important` }}
              />
            ) : (
              <ChevronLeftIcon sx={{ color: `${Colors.primary} !important` }} />
            )}
          </IconButton>
        </DrawerHeader>

        <Stack alignItems="center">
          <Image src="/rolodex.svg" width={100} height={100} alt="logo" />
        </Stack>

        <Divider />

        <List>
          {NavItems.map((item, index) => (
            <Link underline="none" href={item.path} key={index}>
              <ListItem disablePadding sx={{ display: "block" }}>
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? "initial" : "center",
                    px: 2.5,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                    }}
                  >
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText
                    primary={item.name}
                    sx={{ opacity: open ? 1 : 0 }}
                  />
                </ListItemButton>
              </ListItem>
            </Link>
          ))}
        </List>

        <Divider />

        <List sx={{ height: "100%" }}>
          <ListItem disablePadding sx={{ display: "block" }}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                <ExitToAppIcon sx={{ color: Colors.primary }} />
              </ListItemIcon>
              <ListItemText primary="Logout" sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
      <Box
        sx={{
          p: 4,
          pt: 4,
          width: { xs: "calc(100% - 65px)", md: "calc(100% - 70px)" },
          minHeight: "100vh",
          position: "relative",
          flexGrow: 1,
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default DashboardLayout;
